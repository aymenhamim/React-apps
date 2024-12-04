// Code goes here!
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee implements Admin, Employee;

type ElevatedEmployee = Admin & Employee;

let developer: Employee;
developer = { name: "Aymen", startDate: new Date() };

let em1: ElevatedEmployee = {
  name: "John Doe",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable): Combinable {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + " " + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("startDate: " + emp.startDate);
  }
}

printEmployeeInformation(em1);
printEmployeeInformation(developer);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // console.log("Moving with speed: ,"animal.flyingSpeed);
  let speed: number;

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Moving with speed: ", speed);
}

moveAnimal({ type: "bird", flyingSpeed: 80 });
// moveAnimal({ type: "horse", runningSpeed: 10 });

// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
const userInput = document.getElementById("user-input")! as HTMLInputElement;
userInput.value = "Input";

interface ErrorContainer {
  // {email :'Not a valid email', username: 'Must starts with character'}

  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid Email",
  username: "Must start with a capital character",
};
