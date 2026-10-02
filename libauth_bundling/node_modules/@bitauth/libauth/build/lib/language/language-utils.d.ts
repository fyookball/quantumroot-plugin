import type { AuthenticationInstruction, AuthenticationProgramStateAlternateStack, AuthenticationProgramStateControlStack, AuthenticationProgramStateError, AuthenticationProgramStateMinimum, AuthenticationProgramStateStack, CompilationError, CompilationErrorRecoverable, EvaluationSample, MaskedProgramState, Range, ResolvedScript, ResolvedSegmentLiteralType, ScriptReductionTraceScriptNode } from '../lib.js';
/**
 * Combine an array of `Range`s into a single larger `Range`.
 *
 * @param ranges - an array of `Range`s
 * @param parentRange - the range to assume if `ranges` is an empty array
 */
export declare const mergeRanges: (ranges: Range[], parentRange?: Range) => {
    startColumn: number;
    startLineNumber: number;
    endColumn: number;
    endLineNumber: number;
};
/**
 * Returns `true` if the `outerRange` fully contains the `innerRange`, otherwise,
 * `false`.
 *
 * @param outerRange - the bounds of the outer range
 * @param innerRange - the inner range to test
 * @param exclusive - disallow the `innerRange` from overlapping the
 * `outerRange` (such that the outer start and end columns may not be equal) –
 * defaults to `true`
 */
export declare const containsRange: (outerRange: Range, innerRange: Range, exclusive?: boolean) => boolean;
/**
 * Returns `true` if the provided ranges are exactly equivalent.
 * @param a - the first range
 * @param b - the second range
 */
export declare const rangesAreEqual: (a: Range, b: Range) => boolean;
/**
 * Extract a list of the errors that occurred while resolving a script.
 *
 * @param resolvedScript - the result of {@link resolveScript} from which to
 * extract errors
 */
export declare const getResolutionErrors: <ProgramState>(resolvedScript: ResolvedScript<ProgramState>) => CompilationError[];
/**
 * Verify that every error in the provided array can be resolved by providing
 * additional variables in the compilation data (rather than deeper issues, like
 * problems with the wallet template or wallet implementation).
 *
 * Note, errors are only recoverable if the "entity ownership" of each missing
 * identifier is known (specified in `CompilationData`'s `entityOwnership`).
 *
 * @param errors - an array of compilation errors
 */
export declare const allErrorsAreRecoverable: (errors: CompilationError[]) => errors is CompilationErrorRecoverable[];
/**
 * A single resolution for a {@link ResolvedSegment}. The `variable`, `script`,
 * or `opcode` property contains the full identifier that resolved
 * to `bytecode`.
 */
export type CashAssemblyResolution = {
    bytecode: Uint8Array;
    type: ResolvedSegmentLiteralType | 'opcode' | 'script' | 'variable';
    text: string;
};
/**
 * Get an array of all resolutions used in a {@link ResolvedScript}.
 * @param resolvedScript - the resolved script to search
 */
export declare const extractBytecodeResolutions: <ProgramState>(resolvedScript: ResolvedScript<ProgramState>) => CashAssemblyResolution[];
/**
 * Extract an object mapping the variable identifiers used in a
 * {@link ResolvedScript} to their resolved bytecode.
 *
 * @param resolvedScript - the resolved script to search
 */
export declare const extractResolvedVariableBytecodeMap: <ProgramState>(resolvedScript: ResolvedScript<ProgramState>) => {
    [fullIdentifier: string]: Uint8Array;
};
/**
 * Format a list of {@link CompilationError}s into a single string, with an
 * error start position following each error. E.g. for line 1, column 2:
 * `The error message. [1, 2]`
 *
 * Errors are separated with the `separator`, which defaults to `; `, e.g.:
 * `The first error message. [1, 2]; The second error message. [3, 4]`
 *
 * @param errors - an array of compilation errors
 * @param separator - the characters with which to join the formatted errors.
 */
export declare const stringifyErrors: (errors: CompilationError[], separator?: string) => string;
/**
 * Programs may include hints for labeling stack items using comments, e.g.:
 *
 * `// any text here [[ 3rd_down_item, 2nd_down_item, top_stack_item ]]`
 *
 * Labeling hints may be included in either single-line or multi-line
 * comments, and only the first labeling hint is matched within a comment.
 * During sample extraction, any labeling hints are parsed, and the previously
 * extract sample's stack is used to assign values to each label. Note that
 * labels are in source order, i.e.:
 *
 * `<0xab> <0xcd> <0xef> // we'll call these: [[ ab, cd, ef ]]`
 */
export type StackItemLabel = {
    /**
     * The index of the sample from which the label's value was extracted
     */
    sourceSample: number;
    /**
     * The depth of the stack item labeled at `sourceSample`, with the top being
     * `0`, next down `1`, etc.
     */
    itemDepth: number;
    /**
     * The extracted label (with whitespace trimmed).
     */
    label: string;
    /**
     * The hex encoded value of the labeled stack item.
     */
    value: string;
};
export type SampleExtractionResult<ProgramState> = {
    /**
     * The samples successfully extracted from the provided `nodes` and `trace`.
     *
     * In a successful evaluation, one sample will be produced for each state in
     * `trace` with the exception of the last state (the evaluation result), which
     * will be returned in `unmatchedStates`.
     *
     * In an unsuccessful evaluation, the `trace` states will be exhausted before
     * all `nodes` have been matched. In this case, all matched samples are
     * returned, and the final state (the evaluation result) is dropped. This can
     * be detected by checking if the length of `unmatchedStates` is `0`.
     */
    samples: EvaluationSample<ProgramState>[];
    /**
     * If the provided `nodes` are exhausted before all states from `trace` have
     * been matched, the remaining "unmatched" states are returned. This is useful
     * for extracting samples for an evaluation involving two or more
     * compilations.
     *
     * In a successful evaluation, after samples have been extracted from each set
     * of `nodes`, the final `trace` state (the evaluation result) will be
     * returned in `unmatchedStates`.
     */
    unmatchedStates: ProgramState[];
    /**
     * Any {@link StackItemLabel}s extracted during sample extraction.
     */
    labeledStackItems: StackItemLabel[];
};
/**
 * Extract a set of "evaluation samples" from the result of a CashAssembly
 * compilation and a matching debug trace (from `vm.debug`), pairing program
 * states with the source ranges that produced them – like a "source map" for
 * complete evaluations. This is useful for omniscient debuggers like
 * Bitauth IDE.
 *
 * Returns an array of samples and an array of unmatched program states
 * remaining if `nodes` doesn't contain enough instructions to consume all
 * program states provided in `trace`. Returned samples are ordered by the
 * ending position (line and column) of their range.
 *
 * If all program states are consumed before the available nodes are exhausted,
 * the remaining nodes are ignored (the produced samples end at the last
 * instruction for which a program state exists). This usually occurs when an
 * error halts evaluation before the end of the script. (Note: if this occurs,
 * the final trace state will not be used, as it is expected to be the
 * duplicated final result produced by `vm.debug`, and should not be matched
 * with the next instruction. The returned `unmatchedStates` will have a length
 * of `0`.)
 *
 * This method allows for samples to be extracted from a single evaluation;
 * most applications should use
 * {@link extractEvaluationSamplesRecursive} instead.
 *
 * @remarks
 * This method incrementally concatenates the reduced bytecode from each node,
 * parsing the result into evaluation samples.
 *
 * Each node can contain only a portion of an instruction (like a long push
 * operation), or it can contain multiple instructions (like a long hex literal
 * representing a string of bytecode or an evaluation that is not wrapped by a
 * push).
 *
 * If a node contains only a portion of an instruction, the bytecode from
 * additional nodes are concatenated (and ranges merged) until an instruction
 * can be created. If any bytecode remains after a sample has been created, the
 * next sample begins in the same range. (For this reason, it's possible that
 * samples overlap.)
 *
 * If a node contains more than one instruction, the intermediate states
 * produced before the final state for that sample are saved to the sample's
 * `intermediateStates` array.
 *
 * If the program states in `trace` are exhausted before the final instruction
 * in a sample (usually caused by an evaluation error), the last instruction
 * with a matching program state is used for the sample (with its program
 * state), and the unmatched instructions are ignored. (This allows the "last
 * known state" to be displayed for the sample that caused evaluation to halt.)
 *
 * ---
 *
 * For example, the following script demonstrates many of these cases:
 *
 * `0x00 0x01 0xab01 0xcd9300 $(OP_3 <0x00> OP_SWAP OP_CAT) 0x010203`
 *
 * Which compiles to `0x0001ab01cd93000003010203`, disassembled:
 *
 * `OP_0 OP_PUSHBYTES_1 0xab OP_PUSHBYTES_1 0xcd OP_ADD OP_0 OP_0 OP_PUSHBYTES_3 0x010203`
 *
 * In the script, there are 6 top-level nodes (identified below within `[]`):
 *
 * `[0x00] [0x01] [0xab01] [0xcd9300] [$(OP_3 <0x00> OP_SWAP OP_CAT)] [0x010203]`
 *
 * These nodes together encode 7 instructions, some within a single node, and
 * some split between several nodes. Below we substitute the evaluation for its
 * result `0x0003` to group instructions by `[]`:
 *
 * `[0x00] [0x01 0xab][01 0xcd][93][00] [0x00][03 0x010203]`
 *
 * The "resolution" of samples is limited to the range of single nodes: nodes
 * cannot always be introspected to determine where contained instructions begin
 * and end. For example, it is ambiguous which portions of the evaluation are
 * responsible for the initial `0x00` and which are responsible for the `0x03`.
 *
 * For this reason, the range of each sample is limited to the range(s) of one
 * or more adjacent nodes. Samples may overlap in the range of a node that is
 * responsible for both ending a previous sample and beginning a new sample.
 * (Though, only 2 samples can overlap. If a node is responsible for more than 2
 * instructions, the second sample includes `internalStates` for instructions
 * that occur before the end of the second sample.)
 *
 * In this case, there are 6 samples identified below within `[]`, where each
 * `[` is closed by the closest following `]` (no nesting):
 *
 * `[0x00] [0x01 [0xab01] [0xcd9300]] [[$(OP_3 <0x00> OP_SWAP OP_CAT)] 0x010203]`
 *
 * The ranges for each sample (in terms of nodes) are as follows:
 * - Sample 1: node 1
 * - Sample 2: node 2 + node 3
 * - Sample 3: node 3 + node 4
 * - Sample 4: node 4
 * - Sample 5: node 5
 * - Sample 6: node 5 + node 6
 *
 * Note that the following samples overlap:
 * - Sample 2 and Sample 3
 * - Sample 3 and Sample 4
 * - Sample 5 and Sample 6
 *
 * Finally, note that Sample 4 will have one internal state produced by the
 * `OP_ADD` instruction. Sample 4 then ends with the `OP_0` (`0x00`) instruction
 * at the end of the `0xcd9300` node.
 *
 * ---
 *
 * Note, this implementation relies on the expectation that `trace` begins with
 * the initial program state, contains a single program state per instruction,
 * and ends with the final program state (as produced by `vm.debug`). It also
 * expects the `bytecode` provided by nodes to be parsable by
 * {@link decodeAuthenticationInstructions}.
 */
export declare const extractEvaluationSamples: <ProgramState extends AuthenticationProgramStateMinimum & AuthenticationProgramStateStack>({ evaluationRange, ipOffset, nodes, trace, }: {
    /**
     * The range of the script node that was evaluated to produce the `trace`
     */
    evaluationRange: Range;
    /**
     * The number to subtract from every `ip` in the provided `trace` when mapping
     * to `nodes`.
     */
    ipOffset?: number;
    /**
     * An array of reduced nodes to parse
     */
    nodes: ScriptReductionTraceScriptNode<ProgramState>["script"];
    /**
     * The `vm.debug` result to map to these nodes
     */
    trace: ProgramState[];
}) => SampleExtractionResult<ProgramState>;
/**
 * Similar to {@link extractEvaluationSamples}, but recursively extracts samples
 * from evaluations within the provided array of nodes.
 *
 * Because CashAssembly evaluations are fully self-contained, there should never
 * be unmatched states from evaluations within a script reduction trace tree.
 * (For this reason, this method does not return the `unmatchedStates` from
 * nested evaluations.)
 *
 * Returned samples are ordered by the ending position (line and column) of
 * their range. Samples from CashAssembly evaluations that occur within an
 * outer evaluation appear before their parent sample (which uses their result).
 */
export declare const extractEvaluationSamplesRecursive: <ProgramState extends AuthenticationProgramStateControlStack & AuthenticationProgramStateMinimum & AuthenticationProgramStateStack>({ evaluationRange, nodes, trace, ipOffset, }: {
    evaluationRange: Range;
    nodes: ScriptReductionTraceScriptNode<ProgramState>["script"];
    ipOffset?: number;
    trace: ProgramState[];
}) => SampleExtractionResult<ProgramState>;
/**
 * Extract an array of ranges that were unused by an evaluation. This is useful
 * in development tooling for fading out or hiding code that is unimportant to
 * the current evaluation being tested.
 *
 * @remarks
 * Only ranges that are guaranteed to be unimportant to an evaluation are
 * returned by this method. These ranges are extracted from samples that:
 * - are preceded by a sample that ends with execution disabled (e.g. an
 * unsuccessful `OP_IF`)
 * - end with execution disabled, and
 * - contain no `internalStates` that enable execution.
 *
 * Note, internal states that temporarily re-enable and then disable execution
 * again can still have an effect on the parent evaluation, so this method
 * conservatively excludes such samples. For example, the hex literal
 * `0x675167`, which encodes `OP_ELSE OP_1 OP_ELSE`, could begin and end with
 * states in which execution is disabled, yet a `1` is pushed to the stack
 * during the sample's evaluation. (Samples like this are unusual, and can
 * almost always be reformatted to clearly separate the executed and unexecuted
 * instructions.)
 *
 * @param samples - an array of samples ordered by the ending position (line and
 * column) of their range.
 * @param evaluationBegins - the line and column at which the initial sample's
 * evaluation range begins (where the preceding state is assumed to be
 * executing), defaults to `1,1`
 */
export declare const extractUnexecutedRanges: <ProgramState extends AuthenticationProgramStateControlStack>(samples: EvaluationSample<ProgramState>[], evaluationBegins?: string) => Range[];
/**
 * Given a stack, return a summary of the stack's contents, encoding valid VM
 * numbers as numbers, and all other stack items as hex literals.
 *
 * @param stack - a stack of Uint8Array values
 */
export declare const summarizeStack: (stack: Uint8Array[]) => string[];
type MinimalDebugTrace = AuthenticationProgramStateAlternateStack & AuthenticationProgramStateControlStack<unknown> & AuthenticationProgramStateError & AuthenticationProgramStateMinimum & AuthenticationProgramStateStack;
/**
 * Given a debug trace (produced by {@link AuthenticationVirtualMachine.debug}),
 * return an array summarizing each step of the trace. Note, debug traces
 * include the full program state at the beginning of each evaluation step; the
 * summary produced by this method instead shows the resulting stacks after each
 * evaluation step.
 */
export declare const summarizeDebugTrace: <Trace extends MaskedProgramState<MinimalDebugTrace>[] | MinimalDebugTrace[]>(trace: Trace) => {
    alternateStack: string[];
    error?: string;
    execute: boolean;
    instruction: AuthenticationInstruction | undefined;
    ip: number;
    stack: string[];
}[];
/**
 * Return a string with the result of {@link summarizeDebugTrace} including one
 * step per line.
 *
 * @param summary - a summary produced by {@link summarizeDebugTrace}
 */
export declare const stringifyDebugTraceSummary: (summary: ReturnType<typeof summarizeDebugTrace>, { opcodes, padInstruction, printLineCount, }?: {
    /**
     * An opcode enum, e.g. {@link OpcodesBch}.
     */
    opcodes?: {
        [opcode: number]: string;
    };
    /**
     * The width of the instruction column.
     */
    padInstruction?: number;
    /**
     * The number of steps to print counting backward from the end of the
     * debug trace.
     */
    printLineCount?: number;
}) => string;
export {};
//# sourceMappingURL=language-utils.d.ts.map