// Exercice 01

/*

1- b
2- a
3- c
4- c
5- non
6- b
7- c
8- d
9- b
10- c
11- b
12- b
13- oui
14- d
15- 7
16- d 
17- c
18- 40
19- b
20- b

*/

// EX 3

const input: number[] = [1, 2, 3, 4, 5];
let res: number[] = input.map((n: number) => n * n);

console.log(res);

// EX4
// 1)

const input2: number[] = [1, -2, 3, 4, -5];
const res2: number[] = input2.filter((n: number) => n > 0);

console.log(res2);

// 2)
const res3: number = input2.reduce((t: number, n: number) => t + n, 0);
console.log(res3);

// 3)

const res4: number = input2
  .filter((n: number) => n > 0)
  .reduce((t: number, n: number) => t + n, 0);

console.log(res4);

// EX 5
let livres = [
  { id: 10, titre: "POO", auteur: "RAMI", prix: 300 },
  { id: 11, titre: "JS ES6", auteur: "FAMI", prix: 230 },
  { id: 12, titre: "Algorithme", auteur: "KARIMI", prix: 330 },
  { id: 13, titre: "HTMH& CSS", auteur: "RAMI", prix: 340 },
];

// 1)
const titres: string[] = livres.map((livre) => livre.titre);
console.log(titres);

// 2)

const ramiLivresTitres = livres.filter((livre) => livre.auteur === "RAMI");
console.log(ramiLivresTitres);

// 3)
const findLivreById = livres.find((livre) => (livre.id = 12));
console.log(findLivreById);

// 4)

const totalPrix = livres
  .map((livre) => livre.prix)
  .reduce((t: number, p) => p + t, 0);
console.log(totalPrix);

// 5)

const mesLivres = [...livres];
console.log(mesLivres);
