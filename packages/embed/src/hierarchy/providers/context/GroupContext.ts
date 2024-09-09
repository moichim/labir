import { AbstractTool, ThermalCursorPositionOrUndefined, ThermalGroup, ThermalTool } from "@labir/core";
import { createContext } from "@lit/context";

export type GroupContext = ThermalGroup;

export const groupContext =  createContext<GroupContext>("group-instance");

export type GroupCursorContext = ThermalCursorPositionOrUndefined;
export const groupCursorContext = createContext<GroupCursorContext>( "group-cursor" );

export type ToolContext = ThermalTool;
export const toolContext = createContext<ToolContext>( "tool-context" );

export type ToolsContext = ThermalGroup["tool"]["tools"];
export const toolsContext = createContext<ToolsContext>( "tools-context" );