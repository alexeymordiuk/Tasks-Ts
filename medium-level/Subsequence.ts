// Given an array of unique elements, return all possible subsequences.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.

// For example:

type Subsequence<T extends any[], U extends any[] = []> =
  T extends [infer Head, ...infer Rest]
    ? [Head, ...Subsequence<Rest>, ...Subsequence<Rest, [Head, ...U]>]
    : U;
    
type A = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]