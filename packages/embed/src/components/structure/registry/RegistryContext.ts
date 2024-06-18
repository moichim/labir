import { ThermalRegistry } from "@labir/core"
import {createContext} from "@lit/context"

export type RegistryContextType = ThermalRegistry;

export const RegistryContext = createContext<RegistryContextType>( "registry" )