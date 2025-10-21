// unión de tipo 'base' y el tipo 'recursivo'
type NestedNumbers = number | NestedNumbers[];

const nested: NestedNumbers = [1, 2, 3, [4, 5], 6, [[7, [8, 9, [10]]]]]; // OK