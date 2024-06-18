import { ThermalGroup } from "@labir/core"
import {createContext} from "@lit/context"

export type GroupContext = ThermalGroup;

export const GroupContext = createContext<GroupContext>( "group" )