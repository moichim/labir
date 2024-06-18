import { useDefineRegistry } from "../define/useDefineRegistry";
import { useProvidedRegistry } from "../provided/useProvidedRegistry"

export const useProvidedOrNewRegistry = (
    id: string
) => {
    const providedRegistry = useProvidedRegistry();

    if (providedRegistry ) {
        return providedRegistry;
    }

    return useDefineRegistry( id );
}