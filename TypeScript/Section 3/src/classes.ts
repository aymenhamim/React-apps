class Department {
  // private id: string;
  // name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name };
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
  private lastReport: string;
  constructor(id: string, private reports: string[]) {
    super(id, "accounting");
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      return;
    }
    this.addReport(value);
  }

  addEmploye(name: string) {
    if (name == "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("aymen");
console.log(employee1);

const it = new ITDepartment("a1", ["eric"]);

it.addEmploye("eric");
it.addEmploye("mark");

// it.employees[2] = "pau";

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("b1", []);

accounting.addReport("Test report");
accounting.addEmploye("Maxx");
accounting.printReports();

accounting.mostRecentReport = "Eric";

console.log(accounting.mostRecentReport);

console.log(accounting);
