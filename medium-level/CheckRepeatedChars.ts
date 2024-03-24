// Implement type CheckRepeatedChars<S> which will return whether type S contains duplicated chars?

// For example:
type CheckRepeatedChars<S extends string> = S extends `${infer Char}${infer Rest}`
  ? Char extends `${Rest}`
    ? true
    : CheckRepeatedChars<Rest>
  : false;

type CheckRepeatedChars<'abc'>   // false
type CheckRepeatedChars<'aba'>   // true