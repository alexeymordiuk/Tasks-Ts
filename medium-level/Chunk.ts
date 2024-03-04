// Do you know lodash? Chunk is a very useful function in it, now let's implement it. 
// Chunk<T, N> accepts two required type parameters, the T must be a tuple, and the N must
//  be an integer >=1
type Chunk<T extends any[], N extends number, R extends any[][] = []> = T extends []
    ? R
    : T extends [infer F, ...infer U]
    ? Chunk<U, N, [...R, Take<F[], N>]>
    : never;

type Take<T extends any[], N extends number, R extends any[] = []> = T extends []
    ? R
    : R['length'] extends N
    ? R
    : Take<Tail<T>, N, [...R, Head<T>]>;

type Head<T extends any[]> = T extends [infer H, ...any[]] ? H : never;
type Tail<T extends any[]> = T extends [any, ...infer U] ? U : never;

type exp1 = Chunk<[1, 2, 3], 2>; // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4>; // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1>; // expected to be [[1], [2], [3]]