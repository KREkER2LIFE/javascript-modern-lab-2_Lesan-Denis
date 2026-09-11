const grades = [7, 9, 5, 10, 8, 6];


// 1. Toate notele mai mari sau egale cu 8 (folosind filter)
const noteMari = grades.filter(grade => grade >= 8);

// 2. Media notelor (folosind reduce)
const media = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

// 3. Fiecare notă mărită cu 1 punct, fără a depăși 10 (folosind map și Math.min)
const noteMarite = grades.map(grade => Math.min(grade + 1, 10));

console.log("Note >= 8:", noteMari);       
console.log("Media notelor:", media);     
console.log("Note mărite:", noteMarite);   