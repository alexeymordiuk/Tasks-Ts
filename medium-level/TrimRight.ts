// Implement TrimRight<T> which takes an exact string type and returns a new string with the whitespace ending removed.
// For example:
type TrimRight<T extends string> = T extends `${infer Prefix} ` ? TrimRight<Prefix> : T;
type Trimed = TrimRight<'   Hello World    '> // expected to be '   Hello World'