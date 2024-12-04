// const names: Array<string> = ["Max", "Robert"];

// names[0].length;

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 1000);
// });

// promise.then((data) => {
// data.split(' ')
// });

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const MergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "aymen", hobbies: ["sport"] },
  { age: 20 }
);
console.log(MergedObj);
