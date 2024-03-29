// Convert a property of type literal (label type) to a primitive type.

// For example

type ToPrimitive<T> = {
    [K in keyof T]: T[K] extends { [Key: string]: any }
      ? ToPrimitive<T[K]>
      : T[K] extends infer U
        ? U extends string | number | boolean
          ? U
          : never
        : never;
  };

type X = {
  name: 'Tom',
  age: 30,
  married: false,
  addr: {
    home: '123456',
    phone: '13111111111'
  }
}

type Expected = {
  name: string,
  age: number,
  married: boolean,
  addr: {
    home: string,
    phone: string
  }
}
type Todo = ToPrimitive<X> // should be same as `Expected`