// Implement the type version of Array.join, Join<T, U> takes an Array T,
//  string or number U and returns the Array T with U stitching up.

type Join<T extends any[], U extends string | number | bigint | boolean | null | undefined> = T extends [infer Head extends string | number | bigint | boolean | null | undefined, ...infer Tail]
    ? Tail extends []
        ? `${Head}`
        : `${Extract<Head, string | number | bigint | boolean | null | undefined>}${U}${Join<Tail, U>}`
    : '';

type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
type Res3 = Join<["o"], "u">; // expected to be 'o'