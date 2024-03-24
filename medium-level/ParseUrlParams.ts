// You're required to implement a type-level parser to parse URL params string into an Union.

type ParseUrlParams<S extends string> = S extends `${infer Param}/:${infer Rest}`
  ? Param | ParseUrlParams<Rest>
  : S extends `:${infer LastParam}`
    ? LastParam
    : never;
    
type Test1 = ParseUrlParams<':id'>;           // id
type Test2 = ParseUrlParams<'posts/:id'>;     // id
type Test3 = ParseUrlParams<'posts/:id/:user'>;  // id | user