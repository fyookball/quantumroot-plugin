import { pushToStack, useFourStackItems, useOneStackItem, useOneVmNumber, useSixStackItems, useThreeStackItems, useTwoStackItems, } from './combinators.js';
import { applyError, AuthenticationErrorCommon } from './errors.js';
import { bigIntToVmNumber, stackItemIsTruthy, } from './instruction-sets-utils.js';
export const opToAltStack = (state) => useOneStackItem(state, (nextState, [item]) => {
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
    nextState.alternateStack.push(item);
    return nextState;
});
export const opFromAltStack = (state) => {
    // eslint-disable-next-line functional/immutable-data
    const item = state.alternateStack.pop();
    if (item === undefined) {
        return applyError(state, AuthenticationErrorCommon.emptyAlternateStack);
    }
    return pushToStack(state, [item]);
};
export const op2Drop = (state) => useTwoStackItems(state, (nextState) => nextState);
export const op2Dup = (state) => useTwoStackItems(state, (nextState, [a, b]) => pushToStack(nextState, [a, b, a.slice(), b.slice()], {
    pushedBytes: a.length + b.length,
}));
export const op3Dup = (state) => useThreeStackItems(state, (nextState, [a, b, c]) => pushToStack(nextState, [a, b, c, a.slice(), b.slice(), c.slice()], {
    pushedBytes: a.length + b.length + c.length,
}));
export const op2Over = (state) => useFourStackItems(state, (nextState, [a, b, c, d]) => pushToStack(nextState, [a, b, c, d, a.slice(), b.slice()], {
    pushedBytes: a.length + b.length,
}));
export const op2Rot = (state) => useSixStackItems(state, (nextState, [a, b, c, d, e, f]) => pushToStack(nextState, [c, d, e, f, a, b], {
    pushedBytes: a.length + b.length,
}));
export const op2Swap = (state) => useFourStackItems(state, (nextState, [a, b, c, d]) => pushToStack(nextState, [c, d, a, b], {
    pushedBytes: 0,
}));
export const opIfDup = (state) => useOneStackItem(state, (nextState, [item]) => stackItemIsTruthy(item)
    ? pushToStack(nextState, [item, item.slice()], {
        pushedBytes: item.length,
    })
    : pushToStack(nextState, [item], {
        pushedBytes: 0,
    }));
export const opDepth = (state) => pushToStack(state, [bigIntToVmNumber(BigInt(state.stack.length))]);
export const opDrop = (state) => useOneStackItem(state, (nextState) => nextState);
export const opDup = (state) => useOneStackItem(state, (nextState, [item]) => pushToStack(nextState, [item, item.slice()], {
    pushedBytes: item.length,
}));
export const opNip = (state) => useTwoStackItems(state, (nextState, [, b]) => pushToStack(nextState, [b], { pushedBytes: 0 }));
export const opOver = (state) => useTwoStackItems(state, (nextState, [a, b]) => pushToStack(nextState, [a, b, a.slice()], {
    pushedBytes: a.length,
}));
export const opPick = (state) => useOneVmNumber(state, (nextState, [depth]) => {
    const item = nextState.stack[nextState.stack.length - 1 - Number(depth)];
    if (item === undefined) {
        return applyError(state, AuthenticationErrorCommon.invalidStackIndex, `Current stack depth: ${nextState.stack.length}; requested depth: ${depth}.`);
    }
    return pushToStack(nextState, [item.slice()]);
});
export const opRoll = (state) => useOneVmNumber(state, (nextState, [depthBigInt]) => {
    const depth = Number(depthBigInt);
    const index = nextState.stack.length - 1 - depth;
    if (index < 0 || index > nextState.stack.length - 1) {
        return applyError(state, AuthenticationErrorCommon.invalidStackIndex, `Current stack depth: ${nextState.stack.length}; requested depth: ${depth}.`);
    }
    // eslint-disable-next-line functional/immutable-data, @typescript-eslint/no-non-null-assertion
    const item = nextState.stack.splice(index, 1)[0];
    return pushToStack(nextState, [item], { pushedBytes: item.length + depth });
});
export const opRot = (state) => useThreeStackItems(state, (nextState, [a, b, c]) => pushToStack(nextState, [b, c, a], {
    pushedBytes: 0,
}));
export const opSwap = (state) => useTwoStackItems(state, (nextState, [a, b]) => pushToStack(nextState, [b, a], {
    pushedBytes: 0,
}));
export const opTuck = (state) => useTwoStackItems(state, (nextState, [a, b]) => pushToStack(nextState, [b.slice(), a, b], {
    pushedBytes: b.length,
}));
export const opSize = (state) => useOneStackItem(state, (nextState, [item]) => {
    const size = bigIntToVmNumber(BigInt(item.length));
    return pushToStack(nextState, [item, size], {
        pushedBytes: size.length,
    });
});
//# sourceMappingURL=stack.js.map