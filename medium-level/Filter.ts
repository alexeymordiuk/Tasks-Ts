// Implement the type Filter<T, Predicate> takes an Array T, primitive type or union primitive type Predicate and returns an Array include the elements of Predicate.

type Filter<T, Predicate> = T extends [infer Head, ...infer Tail]
  ? Predicate extends Head
    ? [Head, ...Filter<Tail, Predicate>]
    : Filter<Tail, Predicate>
  : [];