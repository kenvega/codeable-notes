// mergeObjects

function mergeObjects<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const mergedObj = mergeObjects({ name: "John" }, { age: 30 });
//       ^ const mergedObj: { name: string; } & { age: number; }

// en genericos
//   cuando se no pasan parametros los tipos se tratan como unknown
mergeObjects()

