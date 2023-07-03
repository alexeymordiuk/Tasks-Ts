18// For given a tuple, you need create a generic Length, pick the length of the tuple

// For example:
type Length<T extends readonly any[]> = keyof { [K in keyof T as K extends keyof any[] ? K : never]: K } extends infer Keys ? Keys extends keyof any[] ? Keys : never : never;
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5