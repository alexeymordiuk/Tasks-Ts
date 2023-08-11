// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

// For example

type Trim<T extends string> = T extends ` ${infer Rest}`? Trim<Rest>: T extends `${infer Rest} `? Trim<Rest>: T;

type trimmed = Trim<'Hello World'>; // 'Hello World