let value:
  | Date
  | null
  | undefined
  | "manzana"
  | [number]
  | { dateRange: [Date, Date] };

// haz hover a value y mira como se va reduciendo los posibles tipos
// mientras que vas avanzando en los ifs
if (value instanceof Date) {
  value;
  // ^ let value: Date
} else if (typeof value === "string") {
  value;
  // ^ let value: "manzana"
} else if (value === null) {
  value;
  // ^ let value: null
} else if (!value) {
  value;
  // ^ let value: undefined
} else if (Array.isArray(value)) {
  // Some built-in functions
  value;
  // ^ let value: [number]
} else if ("dateRange" in value) {
  // Property presence check
  value;
  // ^ let value: { dateRange: [Date, Date]; }
} else {
  value;
  // ^ let value: never
}

// never representa que nunca deberia llegar a ese punto

// pregunta
// en vscode cuando en javascript el codigo nota que no se va a llegar a cierto punto se pinta ese codigo como gris. 

// en el ejemplo de typeguard parece que no sucede eso incluso cuando sabe que sera never.

// se activa en algun lado para que se ponga gris? o por que en todo caso no sale un error en typescript cuando se tiene un never?