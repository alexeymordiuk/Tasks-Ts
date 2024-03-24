// Returns true if all elements of the list are equal to the second parameter passed in, false if there are any mismatches.

// For example

type All<List extends any[], T> = List extends [infer Head, ...infer Tail]
  ? Head extends T
    ? All<Tail, T>
    : false
  : true;

type Test1 = [1, 1, 1]
type Test2 = [1, 1, 2]

type Todo = All<Test1, 1> // should be same as true
type Todo2 = All<Test2, 1> // should be same as false