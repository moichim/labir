export const numberRangeConverter = (
    emptyValue: number,
    min: number,
    max: number
) => {

    const fromAttribute = (value: string | null) => {
        if (value === undefined || value === null) {
            return emptyValue;
        }

        const valueNumber = Number(value);

        if (isNaN(valueNumber)) {
            return emptyValue;
        }

        if (valueNumber < min) {
            return min;
        }

        if (valueNumber > max) {
            return max;
        }

        return valueNumber;

    }

    const toAttribute = (value: number) => {
        return String(value);
    }

    return {
        fromAttribute,
        toAttribute
    }

}