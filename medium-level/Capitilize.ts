// Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

// For example
type Capitalize<T extends string> = T extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${Rest}`
  : T;

type capitalized = Capitalize<'hello world'>; // 'Hello world'