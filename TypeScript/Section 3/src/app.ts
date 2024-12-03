class Department {
  name: string;
  protected employees: (string | number)[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("User " + this.name);
  }

  addEmploye(newEmploye: string) {
    this.employees.push(newEmploye);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("AymenHa");
accounting.addEmploye("eric");
accounting.addEmploye("mark");

// accounting.employees[2] = "pau";

accounting.describe();
accounting.printEmployeeInformation();
