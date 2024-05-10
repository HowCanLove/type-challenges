type TupleMerge<A, B> = {
  [P in keyof A | keyof B]: P extends keyof A ? A[P] : P extends keyof B ? B[P] : never;
}
type TupleToObject<T extends readonly any[], O = {}> = T extends readonly [infer F, ...infer R]
  ? TupleToObject<R, TupleMerge<O, { [P in F & (string | number | symbol)]: F }>> : O
