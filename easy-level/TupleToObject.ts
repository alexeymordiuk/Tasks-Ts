11// Given an array, transform it into an object type and the key/value must be in the provided array.
// For example:
type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K;
};
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type result = TupleToObject<typeof tuple>;