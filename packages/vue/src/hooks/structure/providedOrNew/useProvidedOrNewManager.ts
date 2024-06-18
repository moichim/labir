import { useDefineManager } from "../define/useDefineManager";
import { useProvidedManager } from "../provided/useProvidedManager"

export const useProvidedOrNewManager = (
    id: string
) => {

    const providedManager = useProvidedManager();

    if ( providedManager ) {
        return providedManager;
    }

    return useDefineManager( id );

}