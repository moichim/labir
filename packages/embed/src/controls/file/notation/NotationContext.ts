import { createContext } from "@lit/context";
import { NotationEntry } from "./NotationEntry"

export type NotationListContext = NotationEntry[];
export type NotationSetListContext = ( entries: NotationEntry[] ) => void
export type NotationCurrentContext = NotationEntry[]|undefined;

export const notationListContext = createContext<NotationListContext>( "NotationListContext" );
export const notationSetListContext = createContext<NotationSetListContext>("NotationSetListContext");
export const notationCurrentContext = createContext<NotationCurrentContext>("NotationCurrentContext");

export interface IWithNotationContext {
    ms?: number,
    duration?: number,
    notationList: NotationListContext,
    notationSetList: NotationSetListContext,
    notationCurrent: NotationCurrentContext,
    updateNotationsMs: ( ms: number ) => void
}


