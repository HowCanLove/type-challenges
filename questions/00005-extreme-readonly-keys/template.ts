import type { Equal } from '@type-challenges/utils'

type GetReadonlyKeys<T> = keyof {
  [P in keyof T as Equal<Pick<T, P>, Readonly<Pick<T, P>>> extends true ? P : never]: T[P]
}

// type GetReadonlyKeys<T> = {
//   [K in keyof T]: T[K] extends Readonly<any> ? K : never;
// }[keyof T]
