import { range } from '../format/format.js';
/**
 * Partially clone a `ProgramState`, avoiding duplication of components that are
 * never expected to change (improving performance and memory footprint). Note,
 * this could make mutation-related bugs in VMs harder to track down (mutations
 * in later operations can create confusion in the "history" returned by
 * `vm.debug`), but the performance and memory benefits are worth the added
 * development and testing effort.
 * @param state - the state to clone
 * @param referenceOnlyKeys - keys which should be copied entirely by reference
 * @param shallowCloneArrayKeys - keys to arrays which should be shallow cloned
 */
export const partiallyCloneProgramState = (state, referenceOnlyKeys = ['instructions', 'program'], shallowCloneArrayKeys = [
    'alternateStack',
    'controlStack',
    'signedMessages',
    'stack',
]) => Object.fromEntries(Object.entries(state).map(([key, value]) => referenceOnlyKeys.includes(key)
    ? [key, value]
    : shallowCloneArrayKeys.includes(key)
        ? [key, value.slice()]
        : [key, structuredClone(value)]));
/**
 * Given a `ProgramState`, clone and return a {@link MaskedProgramState} from
 * which `instructions` and `program` are excluded.
 * @param state - the `ProgramState` to mask
 */
export const maskStaticProgramState = (state) => {
    const maskedState = partiallyCloneProgramState(state);
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
    delete maskedState.instructions;
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
    delete maskedState.program;
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
    maskedState.instruction = state.instructions[state.ip];
    return maskedState;
};
/**
 * Create an {@link AuthenticationVirtualMachine} to evaluate authentication
 * programs constructed from operations in the `instructionSet`.
 * @param instructionSet - an {@link InstructionSet}
 */
export const createVirtualMachine = (instructionSet) => {
    const availableOpcodes = 256;
    const operators = range(availableOpcodes).map((codepoint) => instructionSet.operations[codepoint] ?? instructionSet.undefined);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const getCodepoint = (state) => state.instructions[state.ip];
    const afterInstruction = (state) => {
        // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
        state.ip += 1;
        return state;
    };
    const afterOperation = (state) => {
        // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
        state.metrics.evaluatedInstructionCount += 1;
        return state;
    };
    const getOperation = (state) => 
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    operators[getCodepoint(state).opcode];
    const noOp = ((state) => state);
    const stateEvery = instructionSet.every ?? noOp;
    const stateStepMutate = (state) => {
        const operator = getOperation(state);
        return afterInstruction(stateEvery(afterOperation(operator(state))));
    };
    const stateContinue = instructionSet.continue;
    /**
     * When we get real tail call optimization, this can be replaced
     * with recursion.
     */
    const untilComplete = (state, stepFunction) => {
        // eslint-disable-next-line functional/no-loop-statements
        while (stateContinue(state)) {
            // eslint-disable-next-line functional/no-expression-statements, no-param-reassign
            state = stepFunction(state);
        }
        return state;
    };
    const initialize = instructionSet.initialize ??
        ((_program) => ({ metrics: { evaluatedInstructionCount: 0 } }));
    const stateClone = partiallyCloneProgramState;
    const { success } = instructionSet;
    const stateEvaluate = (state) => untilComplete(stateClone(state), stateStepMutate);
    const stateDebugStep = (state) => {
        const operator = getOperation(state);
        return afterInstruction(stateEvery(afterOperation(operator(stateClone(state)))));
    };
    const stateDebug = (state) => {
        const trace = [];
        // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
        trace.push(state);
        // eslint-disable-next-line functional/no-expression-statements
        untilComplete(state, (currentState) => {
            const nextState = stateDebugStep(currentState);
            // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
            trace.push(nextState);
            return nextState;
        });
        return trace;
    };
    const stateStep = (state) => stateStepMutate(stateClone(state));
    const evaluate = (program, { stateOverride } = {}) => instructionSet.evaluate(program, {
        stateEvaluate,
        stateInitialize: initialize,
        stateOverride,
    });
    const debug = (program, { stateOverride, maskProgramState = false, } = {}) => {
        const results = [];
        const proxyDebug = (state) => {
            const debugResult = stateDebug(state);
            // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
            results.push(...debugResult);
            return debugResult[debugResult.length - 1] ?? state;
        };
        const finalResult = instructionSet.evaluate(program, {
            stateEvaluate: proxyDebug,
            stateInitialize: initialize,
            stateOverride,
        });
        const trace = [...results, finalResult];
        return (maskProgramState ? trace.map(maskStaticProgramState) : trace);
    };
    const verify = (resolvedTransaction) => instructionSet.verify(resolvedTransaction, {
        evaluate,
        initialize,
        success,
    });
    return {
        debug,
        evaluate,
        stateClone,
        stateContinue,
        stateDebug,
        stateEvaluate,
        stateInitialize: initialize,
        stateStep,
        stateStepMutate,
        stateSuccess: success,
        verify,
    };
};
export const createAuthenticationVirtualMachine = createVirtualMachine;
//# sourceMappingURL=virtual-machine.js.map