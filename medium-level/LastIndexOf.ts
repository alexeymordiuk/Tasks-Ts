// Implement the type version of Array.lastIndexOf, LastIndexOf<T, U> takes an Array T, any U and returns the index of the last U in Array T

// For example:

type LastIndexOf<T extends unknown[], U> = T extends [...infer F, infer R] ? 
Equal<U, R> extends true ? F['length'] : LastIndexOf<F, U> : -1

type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
type Res2 = LastIndexOf<[0, 0, 0], 2> // -1