
class DataHolder<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  getValue(): T {
    return this.data;
  }

  setValue(value: T): void {
    this.data = value;
  }
}

// DataHolder con string
const stringHolder = new DataHolder("Hello World");
let value1 = stringHolder.getValue();
//    ^ let value: string

stringHolder.setValue("Goodbye World"); // OK
stringHolder.setValue(10);
//                    ^ Argument of type 'number' is not assignable to parameter of type 'string'

// DataHolder con number
const numberHolder = new DataHolder(123);
let value2 = numberHolder.getValue()
//     ^ let value2: number

numberHolder.setValue(456); // OK
numberHolder.setValue(true);
//                     ^ Argument of type 'boolean' is not assignable to parameter of type 'number'.


type User = {
  name: string;
  age: number;
  email: string;
  id: number;
};

// DataHolder con user
const userHolder = new DataHolder<User>({
  id: 1,
  name: "John",
  age: 30,
  email: "john@example.com",
});
