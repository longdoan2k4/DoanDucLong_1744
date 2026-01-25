const Product = require('./Product');

const products = [
  new Product(1, 'iPhone 15 Pro Max', 32000000, 15, 'Electronics', true),
  new Product(2, 'Samsung Galaxy S24 Ultra', 28000000, 20, 'Electronics', true),
  new Product(3, 'MacBook Pro M3', 45000000, 8, 'Electronics', true),
  new Product(4, 'AirPods Pro 2', 6500000, 0, 'Accessories', true),
  new Product(5, 'Apple Watch Ultra 2', 22000000, 12, 'Accessories', true),
  new Product(6, 'Magic Keyboard', 3500000, 5, 'Accessories', false),
  new Product(7, 'iPad Air M2', 18000000, 10, 'Electronics', true),
  new Product(8, 'USB-C Cable', 500000, 50, 'Accessories', true)
];

console.log('DANH SÁCH TẤT CẢ SẢN PHẨM');
console.log(products);

const productNamePrice = products.map(product => ({
  name: product.name,
  price: product.price
}));

console.log('\nCÂU 3: MẢNG CHỈ CHỨA NAME VÀ PRICE');
console.log(productNamePrice);

const productsInStock = products.filter(product => product.quantity > 0);

console.log('\nCÂU 4: SẢN PHẨM CÒN HÀNG TRONG KHO');
console.log(productsInStock);

const hasExpensiveProduct = products.some(product => product.price > 30000000);

console.log('\nCÂU 5: CÓ SẢN PHẨM GIÁ TRÊN 30 TRIỆU?');
console.log(hasExpensiveProduct ? 'Có' : 'Không');

const accessoriesProducts = products.filter(product => product.category === 'Accessories');
const allAccessoriesAvailable = accessoriesProducts.every(product => product.isAvailable === true);

console.log('\nCÂU 6: TẤT CẢ PHỤ KIỆN ĐANG ĐƯỢC BÁN?');
console.log(allAccessoriesAvailable ? 'Có' : 'Không');

const totalInventoryValue = products.reduce((total, product) => {
  return total + (product.price * product.quantity);
}, 0);

console.log('\nCÂU 7: TỔNG GIÁ TRỊ KHO HÀNG');
console.log(`Tổng giá trị: ${totalInventoryValue.toLocaleString('vi-VN')} VNĐ`);

console.log('\nCÂU 8: DUYỆT MẢNG VỚI FOR...OF');
for (const product of products) {
  const status = product.isAvailable ? 'Đang bán' : 'Ngừng bán';
  console.log(`${product.name} - ${product.category} - ${status}`);
}

console.log('\nCÂU 9: DUYỆT THUỘC TÍNH VỚI FOR...IN');
console.log('Ví dụ với sản phẩm đầu tiên:');
for (const key in products[0]) {
  console.log(`Thuộc tính: ${key} - Giá trị: ${products[0][key]}`);
}

const availableInStockProducts = products
  .filter(product => product.isAvailable === true && product.quantity > 0)
  .map(product => product.name);

console.log('\nCÂU 10: SẢN PHẨM ĐANG BÁN VÀ CÒN HÀNG');
console.log(availableInStockProducts);
