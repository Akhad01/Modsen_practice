class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calculateAnnualSalary() {
    const baseSalary = super.calculateAnnualSalary();
    const bonus = baseSalary * 0.1;
    return baseSalary + bonus;
  }
}

const manager1 = new Manager('Иван Иванов', 5000, 'Продажи');
const manager2 = new Manager('Анна Петрова', 6000, 'Маркетинг');

console.log(
  `${manager1.name} (отдел: ${
    manager1.department
  }): ${manager1.calculateAnnualSalary()} евро`
);
console.log(
  `${manager2.name} (отдел: ${
    manager2.department
  }): ${manager2.calculateAnnualSalary()} евро`
);
