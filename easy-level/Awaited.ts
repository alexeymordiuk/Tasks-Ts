189// If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

// For example: if we have Promise<ExampleType> how to get ExampleType?
type MyAwaited<T> = T extends Promise<infer U> ? U : T;
type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string