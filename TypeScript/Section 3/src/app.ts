class Department {
  // private id: string;
  // name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.name}): ${this.id}`);
  }

  addEmploye(newEmploye: string) {
    this.employees.push(newEmploye);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("a1", ["eric"]);

it.addEmploye("eric");
it.addEmploye("mark");

// it.employees[2] = "pau";

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("b1", []);

accounting.addReport("Test report");
accounting.printReports();

console.log(accounting);
