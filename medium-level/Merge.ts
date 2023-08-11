// Merge two types into a new type. Keys of the second type overrides keys of the first type.

// For example

type Merge<T, U> = Omit<T, keyof U> & U;

type foo = {
  name: string;
  age: string;
};

type coo = {
  age: number;
  sex: string;
};

type Result = Merge<foo, coo>; // { name: string, age: number, sex: string }