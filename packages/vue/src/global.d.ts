import type { ThermalManager } from "@labir/core"

declare global {
    interface Window {
        thermal: {
            managers?: Map<string|ThermalManager>
        }
        thermalManagers: Map<string,ThermalManager>
    }
}