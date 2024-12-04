// type AddFn = (n1: number, n2: number) => number;

// let add: AddFn;

// add = (a: number, b: number) => a + b;

// ##########

// interface AddFn {
//   (a: number, b: number): number;
// }

// let add: AddFn;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

//#############

interface Named {
  name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number = 20;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("aymen");

user1.greet("Hello ");
