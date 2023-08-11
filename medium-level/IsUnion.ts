// Implement a type IsUnion, which takes an input type T and returns whether T resolves to a union type.

// For example:
type IsUnion<T> = ([T] extends [T] ? false : true) extends true ? true : false;
type case1 = IsUnion<string> // false
type case2 = IsUnion<string | number> // true
type case3 = IsUnion<[string | number]> // false