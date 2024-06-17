import { useParentGroup } from "./useParentGroup";
import { useParentRegistry } from "./useParentRegistry";

export const useFileHierarchy = ( fileName: string ) => {

    // const registry = useParentRegistry( `file_registry_${fileName}` );
    const group = useParentGroup(`file_group_${fileName}`);

    return {
        manager: group.registry.manager,
        registry: group.registry,
        group
    }

}