// Given a number (always positive) as a type. Your type should return the number decreased by one.

// For example:
type MinusOne<N extends number> = N extends 0 ? 0 : N - 1;
type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54