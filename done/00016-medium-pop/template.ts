type Pop<T extends any[]> = T extends [...infer R, infer L] ? R : T extends [] ? [] : never
