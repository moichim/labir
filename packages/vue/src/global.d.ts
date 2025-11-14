import type { ThermalManager } from "@labirthermal/core"

declare global {
    interface Window {
        thermal: {
            managers?: Map<string|ThermalManager>
        }
        thermalManagers: Map<string,ThermalManager>
    }
}