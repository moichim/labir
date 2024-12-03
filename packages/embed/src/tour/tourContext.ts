import { createContext } from "@lit/context";
import { Tour } from "./Tour";
import { TourStepDefinition } from "./TourStepDefinition";
import { BaseElement } from "../hierarchy/BaseElement";
import { TourableElement } from "./TourableElement";


type TourContext = Tour;

export const tourContext = createContext<TourContext>( "tour-context" );

export type TourStepContext = undefined|TourStepDefinition;

export const tourStepContext = createContext<TourStepContext>( "tour-step" );

type TourableElementWithProps<T extends BaseElement = TourableElement> = {
    element: T,
    step: string
}

export type TourableElementReference = TourableElementWithProps|undefined;

export const tourableElementContext = createContext<TourableElementReference>( "tourable-element" );

