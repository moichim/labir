import { ThermalGroup } from "@labirthermal/core";
import { createContext } from "@lit/context";

type GroupContext = ThermalGroup;

export const groupContext =  createContext<GroupContext>("group-instance");

