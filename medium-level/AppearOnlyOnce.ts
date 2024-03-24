// Find the elements in the target array that appear only once. For example：input: [1,2,2,3,3,4,5,6,6,6]，ouput: [1,4,5]

type FindEles<T extends any[], U extends any[] = []> = 
T extends [infer L, ...infer R]
  ? L extends U[number] | R[number] ? FindEles<R, [...U, L]> : [L, ...FindEles<R, U>]
  : T
