type ConNombre = { nombre: string };
type ConEdad = { edad: number };

type Persona = ConNombre & ConEdad;

const ricardo: Persona = { nombre: "Ricardo", edad: 25 }



type NumerosPrimos = 2 | 3 | 5 | 7 | 11 | 13 | 17 | 19
type NumerosHastaElViente = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20

let number: NumerosPrimos & NumerosHastaElViente

