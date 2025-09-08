interface Runner {
  numOfLegs: number;
  walk(): void;
  run(): void;
}

interface Eater {
  eat(): void;
}

class Human implements Runner, Eater {
  numOfLegs = 2;

  walk() {}
  run() {}
  eat() {}
  sleep() {}
}

const person = new Human()