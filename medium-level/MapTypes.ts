// Implement MapTypes<T, R> which will transform types in object T
//  to different types defined by type R which has the following structure

type StringToNumber = { mapFrom: string; mapTo: number };
type StringToDate = { mapFrom: string; mapTo: Date };

type MapTypes<T, R> = {
  [K in keyof T]: T[K] extends string
    ? R extends { mapFrom: T[K]; mapTo: infer U }
      ? U
      : T[K]
    : T[K];
};

// Test cases
type Result1 = MapTypes<{ iWillBeANumberOneDay: string }, StringToNumber>;
// Result1: { iWillBeANumberOneDay: number }

type Result2 = MapTypes<
  { iWillBeNumberOrDate: string },
  StringToDate | StringToNumber
>;
// Result2: { iWillBeNumberOrDate: number | Date }

type Result3 = MapTypes<
  { iWillBeANumberOneDay: string; iWillStayTheSame: Function },
  StringToNumber
>;
// Result3: { iWillBeANumberOneDay: number; iWillStayTheSame: Function }