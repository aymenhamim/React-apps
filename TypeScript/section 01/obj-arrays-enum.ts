// const person: {
//   name: string;
//   age: number;
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "aymen hamim",
//   age: 20,
//   hobbies: ["Sport", "Cooking"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "aymen hamim",
  age: 20,
  hobbies: ["Sport", "Cooking"],
  role: Role.ADMIN,
};

let test: any[];
test = ["dsd"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("This is read only user");
}
