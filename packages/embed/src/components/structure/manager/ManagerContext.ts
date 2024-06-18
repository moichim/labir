import { ThermalManager } from "@labir/core"
import {createContext} from "@lit/context"

export type ManagerContextType = ThermalManager

export const ManagerContext = createContext<ManagerContextType>( "manager" )