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

function merge<T extends object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const merged = merge({ name: "Alice" }, { age: 25 });

interface lengthy {
  length: number;
}

function countAndDescribe<T extends lengthy>(e: T): [T, string] {
  let descriptionText = "Got no Value.";

  if (e.length === 1) {
    descriptionText = "Got 1 Elements";
  }
  if (e.length > 1) {
    descriptionText = "Got " + e.length + " Elements";
  }

  return [e, descriptionText];
}

console.log(countAndDescribe("aa"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert(merged, "age");

class DataStorage<T extends boolean | string | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("hello");
textStorage.addItem("test");

console.log(textStorage.getItems());
