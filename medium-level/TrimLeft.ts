// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

// For example
type TrimLeft<T extends string> = T extends `${' ' | '\t' | '\n'}${infer R}` ? TrimLeft<R> : T;
type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '