const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  const result = n1 + n2;
  if (showResult) console.log(phrase + result);
  else return result;
};

const num1 = 10;
const num2 = 621;
const printResult: boolean = true;
const resultPhrase = "Result is: ";

add(num1, num2, printResult, resultPhrase);
