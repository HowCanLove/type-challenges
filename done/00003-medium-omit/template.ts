type MyOmit<T, K> = {
  [P in keyof T as P extends K ? never : P]: P extends K ? never : T[P]
}
