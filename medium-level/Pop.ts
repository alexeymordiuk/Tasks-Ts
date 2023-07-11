// Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.

// For example
type Pop<T extends any[]> = T extends [...infer Rest, any] ? Rest : never;
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]