5// Implement the built-in Readonly<T> generic without using it.

// Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

// For example:
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
};
const todoAsTodo: Todo = todo;
todoAsTodo.title = "Hello"; // Error: cannot assign to 'title' because it is a read-only property
todoAsTodo.description = "barFoo"; // Error: cannot assign to 'description' because it is a read-only property