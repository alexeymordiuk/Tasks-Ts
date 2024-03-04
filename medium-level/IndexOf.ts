// Implement the type version of Array.indexOf, indexOf<T, U> takes an 
// Array T, any U and returns the index of the first U in Array T.
type IndexOf<T extends unknown[], U extends unknown, Count extends 1[] = []> =
  T extends [infer First, ...infer Rest] ? (
    (<V>() => V extends First ? 1 : 0) extends
    (<V>() => V extends U ? 1 : 0) ? (
      Count['length']
    ) : IndexOf<Rest, U, [...Count, 1]>
  ) : -1
  
type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = IndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // expected to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1