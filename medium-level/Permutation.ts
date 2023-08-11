// Implement permutation type that transforms union types into the array that includes permutations of unions.
type Permutation<T, U = T> = [T] extends [never]
  ? []
  : U extends U
  ? [U, ...Permutation<Exclude<T, U>>]
  : never;
type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
