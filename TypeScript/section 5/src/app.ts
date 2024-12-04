const names: Array<string> = ["Max", "Robert"];

names[0].length;

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

promise.then((data) => {});
