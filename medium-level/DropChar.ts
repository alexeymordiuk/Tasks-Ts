// Drop a specified char from a string.

// For example:
type DropChar<S extends string, Char extends string> =
  S extends `${infer First}${Char}${infer Rest}`
    ? DropChar<`${First}${Rest}`, Char>
    : S;
type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'