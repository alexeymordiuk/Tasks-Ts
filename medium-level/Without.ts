// Implement the type version of Lodash.without, Without<T, U> takes an Array T, 
// number or array U and returns an Array without the elements of U.
type Without<T, U> = T extends [infer Head, ...infer Tail]
    ? Head extends U
        ? Without<Tail, U>
        : [Head, ...Without<Tail, U>]
    : []; 
type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []