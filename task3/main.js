import { 
  addProduct, 
  removeProduct, 
  updateQuantity, 
  calculateTotal, 
  getCartItems 
} from './task3.js';

console.log("--- 1. Adăugare produse ---");
addProduct({ id: 1, name: "Laptop", price: 3000, quantity: 1 });
addProduct({ id: 2, name: "Mouse", price: 100, quantity: 2 });
console.log("Conținut coș:", getCartItems());

console.log("\n--- 2. Actualizare cantitate ---");
updateQuantity(2, 5); // Schimbăm cantitatea pentru Mouse la 5
console.log("După actualizare:", getCartItems());

console.log("\n--- 3. Calculare total ---");
console.log(`Total de plată: ${calculateTotal()} RON`);

console.log("\n--- 4. Ștergere produs și testare eroare try/catch ---");
try {
  removeProduct(1); // Ștergem laptopul
  console.log("Coș după ștergere:", getCartItems());
  
  // Încercăm să ștergem un produs care nu există pentru a declanșa eroarea
  removeProduct(99);
} catch (error) {
  console.error(`Eroare capturată: ${error.message}`);
}