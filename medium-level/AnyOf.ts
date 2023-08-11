// Implement Python liked any function in the type system. A type takes the Array and returns true if any element of the Array is true. If the Array is empty, return false.

// For example:
type AnyOf<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First extends true
    ? true
    : AnyOf<Rest>
  : false;
type Sample1 = AnyOf<[1, "", false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]> // expected to be false.