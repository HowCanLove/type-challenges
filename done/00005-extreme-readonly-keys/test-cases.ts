import type { Equal, Expect } from '@type-challenges/utils'

type GetReadonlyKeys<T> = keyof {
  [P in keyof T as Equal<Pick<T, P>, Readonly<Pick<T, P>>> extends true ? P : never]: T[P]
}

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

type R1 = GetReadonlyKeys<Todo1>
interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}
