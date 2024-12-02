import { createContext } from "@lit/context";
import { Tour } from "./Tour";


type TourContext = Tour;

export const tourContext = createContext<TourContext>( "tour-context" );

