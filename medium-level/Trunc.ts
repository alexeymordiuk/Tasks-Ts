// Implement the type version of Math.trunc, which takes string 
// or number and returns the integer part of a number by removing any fractional digits.

// For example:
type Trunc<T> = T extends string | number ? `${T}` extends `${infer Num}.${infer _}` ? Num : T : never;
type A = Trunc<12.34> // 12