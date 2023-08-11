// Implement Replace<S, From, To> which replace the string From with To once in the given string S

// For example
type Replace<S extends string, From extends string, To extends string> =S extends `${infer Start}${From}${infer Rest}`? `${Start}${To}${Rest}`: S;
type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'