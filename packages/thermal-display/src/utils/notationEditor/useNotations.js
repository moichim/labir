import { useCallback, useEffect, useId, useMemo, useState } from '@wordpress/element';

export const useNotations = (notations = {}, duration) => {

    const [state, setState] = useState(notations);

    const addNotation = useCallback( (
        from,
        to,
        label,
        img
    ) => {

        if ( duration === undefined || duration === 0 ) {
            return;
        }

        const id = Math.random();

        const notation = {
            id,
            from: Math.max( 0, Math.min( from, to ) ),
            to: Math.min( duration, Math.max( from, to ) ),
            label,
            img
        };

        const newState = {...state, [id]: notation};
        setState(newState);

    }, [state, setState, duration]);



    const removeNotation = useCallback((
        id
    ) => {
        const newState = {...state};
        delete newState[id.toString()];
        setState(newState);
    }, [state, setState]);

    

    const updateNotation = useCallback( (
        id,
        updates
    ) => {

        const notation = state[id];

        if ( notation ) {

            if ( "from" in updates ) {
                updates.from = Math.max( 0, Math.min( updates.from, notation.to ) );
            }

            if ( "to" in updates ) {
                updates.to = Math.min( duration, Math.max( updates.to, notation.from ) );
            }

            const newNotation = {
                ...notation,
                ...updates
            };

            const newState = {
                ...state,
                [id]: newNotation
            };

            setState(newState);

        }

    }, [state,setState, duration] );

    useEffect( () => {

        const arr = Object.values(state);

        if ( arr.length === 0 ) {
            return;
        }

        const newState = {...state};
        const changed = false;

        arr.forEach( notation => {
            if ( notation.from > duration ) {
                delete newState[notation.id];
                changed = true;
                return;
            }

            if ( notation.to > duration ) {
                newState.to = duration;
                changed = true;
            }

        } );

        if ( changed ) {
            setState(newState);
        }

    }, [state,duration, setState] );



    const array = useMemo(() => {
        return Object.values(state).sort( (a,b) => a.from - b.from );
    }, [state]);



    return {
        notations: state,
        array,
        addNotation,
        removeNotation,
        updateNotation
    }

}