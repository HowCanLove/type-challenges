type MyReturnType<T> = T extends (...args: infer A) => infer R ? R : never
