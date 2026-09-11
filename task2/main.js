import { 
  displayStudents, 
  getTopStudents, 
  getClassAverage, 
  findStudentById, 
  addStudent 
} from './students.js';

console.log("--- Toți elevii ---");
displayStudents();

console.log("\n--- Elevi cu nota >= 8 ---");
const topStudents = getTopStudents();
topStudents.forEach(s => console.log(`${s.name} - Nota ${s.grade}`));

console.log(`\nMedia clasei: ${getClassAverage().toFixed(2)}`);

console.log("\n--- Adăugare elev nou ---");
addStudent("Mihai", 10);

console.log("\n--- Căutare elev cu try/catch ---");
try {
  const found = findStudentById(3);
  console.log(`Găsit: ${found.name}, Nota: ${found.grade}`);
  
  // Căutare ID inexistent pentru a declanșa eroarea
  findStudentById(99);
} catch (error) {
  console.error(`Eroare: ${error.message}`);
}