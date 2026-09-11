let cart = [];

export const addProduct = (product) => {
  const { id, name, price, quantity = 1 } = product;
  const existingProduct = cart.find(item => item.id === id);

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({ id, name, price, quantity });
  }
};

export const removeProduct = (productId) => {
  const exists = cart.some(item => item.id === productId);
  if (!exists) {
    throw new Error(`Produsul cu ID-ul ${productId} nu există în coș.`);
  }
  cart = cart.filter(item => item.id !== productId);
};

export const updateQuantity = (productId, newQuantity) => {
  const product = cart.find(item => item.id === productId);
  if (!product) {
    throw new Error(`Produsul cu ID-ul ${productId} nu a fost găsit pentru actualizare.`);
  }
  if (newQuantity <= 0) {
    removeProduct(productId);
    return;
  }
  product.quantity = newQuantity;
};

export const calculateTotal = () => {
  return cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
};

export const getCartItems = () => {
  return cart.map(item => ({ ...item }));
};