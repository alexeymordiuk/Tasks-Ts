// Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

// For example
type ReplaceAll<S extends string, From extends string, To extends string> =S extends `${infer Start}${From}${infer Rest}`? `${Start}${To}${ReplaceAll<Rest, From, To>}`: S;
type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'