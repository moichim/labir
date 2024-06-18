import { useDefineGroup } from "../define/useDefineGroup";
import { useProvidedGroup } from "../provided/useProvidedGroup"

export const useProvidedOrNewGroup = (
    id: string
) => {
    const providedGroup = useProvidedGroup();

    if ( providedGroup ) {
        return providedGroup;
    }

    return useDefineGroup( id );
}