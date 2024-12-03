import { CallbacksManager } from "@labir/core";
import { Tour } from "./Tour";
import { TourStepDefinition } from "./TourStepDefinition";

export class TourStepsStorage {

    /** Internal listener used only by the `Tour` object. Do not use it in other places since this one is called every time, even if the tour is not active. */
    public readonly onStepInternalActivation = new CallbacksManager<( step?: TourStepDefinition ) => void>;

    private _currentStepId?: string;

    /** Id of the current step */
    public get currentStepId() { return this._currentStepId }

    

    /** Get index of the next step */
    public get currentStepIndex() {
        if (this._currentStepId === undefined) {
            return undefined;
        }
        return this.steps.findIndex(step => step.ID === this._currentStepId);
    }

    /** Get object of the current step */
    public get currentStepObject() {

        if (this._currentStepId === undefined) {
            return undefined;
        }

        const currentIndex = this.currentStepIndex;

        if (currentIndex === undefined) {
            return undefined;
        }

        return this.steps[currentIndex];

    }


    /** Get the index of the next step if any */
    private get nextStepIndex() {
        const currentIndex = this.currentStepIndex;
        if (currentIndex  !== undefined && currentIndex < this.steps.length) {
            return currentIndex + 1;
        }
    }


    /** Get the index of the previous step if any */
    private get previousStepIndex() {
        const currentIndex = this.currentStepIndex;
        if (currentIndex && currentIndex > 0) {
            return currentIndex - 1;
        }
    }


    /** The next step definition if any */
    public get nextStep() {
        const nextStepIndex = this.nextStepIndex;
        if (nextStepIndex !== undefined)
            return this.steps[nextStepIndex]
    }


    /** The previous step definition if any */
    public get previousStep() {
        const previousIndex = this.previousStepIndex;
        if ( previousIndex !== undefined ) 
            return this.steps[ previousIndex ];
    }






    public constructor(
        public readonly steps: TourStepDefinition[]
    ) { }





    /** Set current step from outside */
    public setStepById( id?: string ) {

        // Do nothing if same
        if ( id === this._currentStepId ) {
            return;
        }

        // Store the value
        this._currentStepId = id;
        // Call the listener
        this.onStepInternalActivation.call( this.currentStepObject );
    }


    /** Set current step internally */
    public setStepByDefinition( step?: TourStepDefinition ) {

        // Do nothing if same
        if ( step?.ID === this.currentStepId ) {
            // return;
        }
        // Assign value
        this._currentStepId = step?.ID;
        // Call the listener
        this.onStepInternalActivation.call( step );

    }

    /** Advance to the next step */
    next() {
        this.setStepByDefinition( this.nextStep );
    }

    /** Return to the previous step */
    previous() {
        this.setStepByDefinition( this.previousStep );
    }

    first() {
        this.setStepByDefinition( this.steps[0] );
    }

    hasNextStep(
        step: TourStepDefinition
    ): boolean {

        const index = this.steps.indexOf( step );

        if (index === -1) {
            return false;
        }

        return index + 1 < this.steps.length;

    }

    hasPrevStep(
        step: TourStepDefinition
    ): boolean {
        const index = this.steps.indexOf(step);
        if ( index <= 0 ) {
            return false;
        }
        return true;
    }

    stepIndex( step: TourStepDefinition ) {
        return {
            index: this.steps.indexOf( step ) + 1,
            of: this.steps.length
        }
    }

}