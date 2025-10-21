// union
type Impares = 1 |  3 | 5 | 7 | 9
type HastaCinco = 0 | 1 | 2 | 3 | 4 | 5

let number: Impares | HastaCinco; // queda como 0 | 1 | 3 | 5 | 7 | 9 | 2 | 4

number = 5
number = 6 // Type 6 is not assignable to type 0 | 1 | 3 | 5 | 7 | 9 | 2 | 4


