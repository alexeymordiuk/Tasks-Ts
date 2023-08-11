// Implement the Absolute type. A type that take string, number or bigint. The output should be a positive number string

// For example
type Absolute<T extends string | number | bigint> =
  `${T}` extends `-${infer Num}`
    ? Num
    : `${T}`;
type Test = -100
type Result = Absolute<Test> // expected to be "100"