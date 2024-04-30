interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working remotely";
  }

  getCoffeeBreak(): string {
    return "Taking a coffee break";
  }

  workDirectorTasks(): string {
    return "Performing director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Taking a short break";
  }

  workTeacherTasks(): string {
    return "Engaging in teaching tasks";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

// Employee-specific functions

function isDirector(employee: Teacher | Director): boolean {
  return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): string {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else if (employee instanceof Teacher) {
    return employee.workTeacherTasks();
  }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

// String literal types

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return `Teaching Math class`;
  } else if (todayClass === "History") {
    return `Teaching History class`;
  }
}

console.log(teachClass("Math"));
console.log(teachClass("History"));

