import { ThermalCursorPositionOrUndefined, ThermalGroup } from "@labir/core";
import { createContext } from "@lit/context";

export type GroupContext = ThermalGroup;

export const groupContext =  createContext<GroupContext>("group-instance");

export type GroupCursorContext = ThermalCursorPositionOrUndefined;
export const groupCursorContext = createContext<GroupCursorContext>( "group-cursor" );