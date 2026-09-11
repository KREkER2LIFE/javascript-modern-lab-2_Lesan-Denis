const employees = [
  { id: 1, name: "Ion Popescu", department: "IT", salary: 1200, experience: 4 },
  { id: 2, name: "Maria Ionescu", department: "HR", salary: 900, experience: 2 },
  { id: 3, name: "Andrei Georgescu", department: "Finance", salary: 1500, experience: 7 },
  { id: 4, name: "Elena Dumitrescu", department: "IT", salary: 1800, experience: 6 },
  { id: 5, name: "Cristian Marin", department: "Marketing", salary: 850, experience: 1 },
  { id: 6, name: "Ana Stan", department: "Finance", salary: 1300, experience: 5 },
  { id: 7, name: "Vlad Vasilescu", department: "IT", salary: 2100, experience: 9 }
];

// 1. Filtrarea angajaților cu experiență mai mare de 3 ani
const experiencedEmployees = employees.filter(employee => employee.experience > 3);
console.log(`Angajați cu experiență mai mare de 3 ani: ${experiencedEmployees}`, );

// 2. Calcularea salariului mediu al angajaților din departamentul IT

const averageSalary = employees.reduce((total, employee) => total + employee.salary, 0) / employees.length;
console.log("Salariul mediu al angajaților din IT:", averageSalary.toFixed(2));

//3. Majorarea angajatilor cu experiență mai mare de 3 ani cu 10%
const updatedSalaries = employees.map(employee => {
  if (employee.experience > 3) {
    return { ...employee, salary: employee.salary * 1.10 };
  }
  return employee;
});
console.log("Salarii actualizate:", updatedSalaries);

// Gruparea angajaților după departament
const groupedByDepartment = employees.reduce((acc, employee) => {
  if (!acc[employee.department]) {
    acc[employee.department] = [];
  }
  acc[employee.department].push(employee);
  return acc;
}, {});
console.log("Angajați grupați după departament:", groupedByDepartment);