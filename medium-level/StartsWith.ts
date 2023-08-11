// Implement StartsWith<T, U> which takes two exact string types and returns whether T starts with U

// For example
type StartsWith<T extends string, U extends string> = T extends `${U}${infer _}` ? true : false;
type a = StartsWith<'abc', 'ac'> // expected to be false
type b = StartsWith<'abc', 'ab'> // expected to be true
type c = StartsWith<'abc', 'abcd'> // expected to be false