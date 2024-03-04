// Fill, a common JavaScript function, now let us implement it with types. 
// Fill<T, N, Start?, End?>, as you can see,Fill accepts four types of parameters, 
// of which T and N are required parameters, and Start and End are optional parameters. 
// The requirements for these parameters are: T must be a tuple, N can be any type of value, 
// Start and End must be integers greater than or equal to 0.

type Fill<T extends any[], N extends number, Result extends any[] = []> = 
Result['length'] extends N ? Result : Fill<T, N, [...Result, ...T]>;

type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]