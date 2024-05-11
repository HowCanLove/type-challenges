type spaceValue = '\t' | ' ' | '\n' | '\r'
type Trim<S extends string> = S extends `${spaceValue}${infer R}` | `${infer R}${spaceValue}` ? Trim<R> : S
