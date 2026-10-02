import { formatError } from './error.js';
import { readCompactUintMinimal } from './number.js';
/**
 * Given an initial {@link ReadPosition} and a list of {@link ReadFunction}s,
 * apply each {@link ReadFunction} in order, aggregating each result and passing
 * the next {@link ReadPosition} into the next {@link ReadFunction}. If an error
 * occurs, immediately return the error message (`string`), otherwise, return
 * the array of results.
 *
 * @param position - the {@link ReadPosition} at which to start the first read
 * @param readFunctions - the ordered list of {@link ReadFunction}s to apply to
 * the {@link ReadPosition}
 */
export const readMultiple = (position, readFunctions) => {
    // eslint-disable-next-line functional/no-let
    let nextPosition = position;
    const results = [];
    // eslint-disable-next-line functional/no-loop-statements
    for (const readFunction of readFunctions) {
        const out = readFunction(nextPosition);
        if (typeof out === 'string') {
            return out;
        }
        // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
        results.push(out.result);
        // eslint-disable-next-line functional/no-expression-statements
        nextPosition = out.position;
    }
    return {
        position: nextPosition,
        result: results,
    };
};
export var ReadItemCountError;
(function (ReadItemCountError) {
    ReadItemCountError["itemCount"] = "Error reading item count.";
    ReadItemCountError["item"] = "Error reading item.";
})(ReadItemCountError || (ReadItemCountError = {}));
/**
 * Read a count of items indicated by the CompactUint at {@link ReadPosition}.
 * The CompactUint will be read to determine the number of items, and the read
 * function will be applied in series, aggregated each result and passing the
 * next {@link ReadPosition} into each iteration. If an error occurs,
 * immediately return the error message (`string`), otherwise, return the array
 * of results.
 */
export const readItemCount = (position, readFunction) => {
    const countRead = readCompactUintMinimal(position);
    if (typeof countRead === 'string') {
        return formatError(ReadItemCountError.itemCount, countRead);
    }
    // eslint-disable-next-line functional/no-let
    let nextPosition = countRead.position;
    const result = [];
    // eslint-disable-next-line functional/no-loop-statements, functional/no-let, no-plusplus
    for (let remaining = Number(countRead.result); remaining > 0; remaining--) {
        const read = readFunction(nextPosition);
        if (typeof read === 'string') {
            return formatError(ReadItemCountError.item, read);
        }
        // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
        result.push(read.result);
        // eslint-disable-next-line functional/no-expression-statements
        nextPosition = read.position;
    }
    return { position: nextPosition, result };
};
//# sourceMappingURL=read.js.map