type IsAny<T> = 0 extends (1 & T) ? true : false

type thisIs1 = 1 & number
type thisIsNever1 = 1 & object
type thisIsNever2 = 1 & boolean
type thisIsNever3 = 1 & any

// 1 & number 得到1；
// 1 & string 得到never；
// 1 & any 得到 any；
