// Please complete type Integer<T>, type T inherits from number, if T is an integer return it, otherwise return never.

type Integer<T extends number> = `${T}` extends `${string}.${string}`
  ? never
  : number extends T
  ? never
  : T;

// Test cases
type Test1 = Integer<3>;       // 3
type Test2 = Integer<3.14>;    // never
type Test3 = Integer<-5>;      // -5
type Test4 = Integer<number>;  // never