3057// Implement the generic version of Array.push

// For example:
type Push<T extends any[], U> = [...T, U];
type Result = Push<[1, 2], '3'> // [1, 2, '3']