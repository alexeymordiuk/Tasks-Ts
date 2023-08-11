// Replace the camelCase or PascalCase string with kebab-case.

// FooBarBaz -> foo-bar-baz

// For example

type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? First extends Uppercase<First>
    ? `${Lowercase<First>}${KebabCase<Rest>}`
    : `${First}${KebabCase<Rest>}`
  : S;

type FooBarBaz = KebabCase<"FooBarBaz">; // "foo-bar-baz"
const foobarbaz: FooBarBaz = "foo-bar-baz" as FooBarBaz;

type DoNothing = KebabCase<"do-nothing">; // "do-nothing"
const doNothing: DoNothing = "do-nothing" as DoNothing;