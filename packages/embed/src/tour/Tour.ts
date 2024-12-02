import { CallbacksManager } from "@labir/core";
import { TourStepDefinition } from "./TourStepDefinition";
import { TourStepsStorage } from "./TourStepsStorage";

export class Tour {

    private _active = false;
    public get active() { return this._active; }

    /** Callbacks triggered every time the activation status changes */
    public readonly onTourActivationStatus = new CallbacksManager< ( state: boolean ) => void >;

    /** Callbacks triggered every time the current step definition changes */
    public readonly onStepActivation = new CallbacksManager< ( step?: TourStepDefinition ) => void >;

    /** The tour controller stores the current step definition */
    private _current?: TourStepDefinition;

    /** The current step definition object */
    public get current() {
        return this._current;
    }

    /** Array of all steps definition */
    public get steps() {
        return this.storage.steps;
    }

    /** Tour steps storage object */
    private readonly storage: TourStepsStorage;



    private constructor(
        steps: TourStepDefinition[]
    ) {
        this.storage = new TourStepsStorage(steps);

        // Listen to internal changes
        this.storage.onStepInternalActivation.set( "__internal_observer", step => {

            if ( this._active === true ) {
                if ( step?.ID !== this.current?.ID ) {

                    this._current = step;
                    this.onStepActivation.call( step );

                }
            }

        } );
    }

    public static create(
        steps: TourStepDefinition[]
    ) {
        return new Tour( steps );
    }


    /** Activate the tour and optionaly reset it back to the beginning */
    activate(
        fromStart: boolean = false
    ) {

        // Do nothing if already active
        if ( this.active === true ) {
            return;
        }

        // Set activation status and call its listener
        this._active = true;
        this.onTourActivationStatus.call( true );

        // Set the current step (listeners shall be called subsequently)
        if ( fromStart || this.current === undefined) {
            this.storage.first();
        } else {
            this.storage.setStepByDefinition( this.current );
        }

    }


    /** Deactive the tour without changing the internal current step */
    deactivate() {

        // Do nothing if already inactive
        if ( this.active === false ) {
            return;
        }

        // indicate the status
        this._active = false;
        this.onTourActivationStatus.call( false );

        // Set local current step
        this._current = undefined;
        this.onStepActivation.call( undefined );

    }

    reset() {
        this.storage.first();
        return this;
    }

    next() {
        this.storage.next();
        return this;
    }

    previous() {
        this.storage.previous();
        return this;
    }


}