import { calculateAverage } from './utils.js';

let students = [
  { id: 1, name: "Denis", grade: 9 },
  { id: 2, name: "Constantin", grade: 7 },
  { id: 3, name: "Maria", grade: 10 },
  { id: 4, name: "Vlad", grade: 8 },
  { id: 5, name: "Elena", grade: 6 }
];

export const displayStudents = () => {
  students.forEach(student => {
    console.log(`ID: ${student.id} | Nume: ${student.name} | Notă: ${student.grade}`);
  });
};

export const getTopStudents = () => students.filter(student => student.grade >= 8);

export const getClassAverage = () => {
  const grades = students.map(student => student.grade);
  return calculateAverage(grades);
};

export const findStudentById = (id) => {
  const student = students.find(s => s.id === id);
  if (!student) {
    throw new Error(`Elevul cu ID-ul ${id} nu a fost găsit.`);
  }
  return student;
};

export const addStudent = (name, grade) => {
  let newId = 1;
  
  if (students.length > 0) {
    newId = Math.max(...students.map(s => s.id)) + 1;
  }
  
  const newStudent = { id: newId, name, grade };
  students.push(newStudent);
  console.log(`Adăugat cu succes: ${newStudent.name} (ID: ${newStudent.id})`);
};