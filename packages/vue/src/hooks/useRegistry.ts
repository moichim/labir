import { useManager } from "./useParentManager";
import { useParentRegistry } from "./useParentRegistry";

export const useRegistry = (
    id: string
) => {

    const manager = useManager();

    return manager.addOrGetRegistry( id );
    
}