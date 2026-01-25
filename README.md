# DoanDucLong_1744
Đoàn Đức Long - 2280601744

Ngôn ngữ phát triển ứng dụng mới

---

## QUY CHUẨN CODE - CODING STANDARDS

### 1. CẤU TRÚC THƯ MỤC CHUẨN

```
DoanDucLong_1744/
├── README.md                 # File tài liệu chính
├── docs/                     # Tài liệu bổ sung (nếu có)
├── exercises/                # Thư mục chứa các bài tập
│   ├── exercise-01-product/  # Bài 1: Product Class
│   │   ├── README.md        # Hướng dẫn bài tập
│   │   ├── src/
│   │   │   ├── Product.js
│   │   │   └── index.js
│   │   └── package.json
│   ├── exercise-02-*/        # Bài 2
│   └── exercise-03-*/        # Bài 3...
└── .editorconfig             # Cấu hình editor
```

---

## QUY TẮC ĐẶT TÊN (NAMING CONVENTIONS)

### 1.1. Variables & Functions
```javascript
// ĐÚNG - camelCase
let userName = 'Long';
let productPrice = 100000;
function calculateTotal() { }
function getUserById(id) { }

//  SAI
let UserName = 'Long';        // PascalCase không dùng cho biến
let product_price = 100000;   // snake_case không dùng trong JS
```

### 1.2. Classes & Constructors
```javascript
//  ĐÚNG - PascalCase
class Product { }
class UserAccount { }
class ProductManager { }

// ❌ SAI
class product { }             // Phải viết hoa chữ cái đầu
class user_account { }        // Không dùng snake_case
```

### 1.3. Constants
```javascript
//  ĐÚNG - UPPER_SNAKE_CASE
const MAX_PRICE = 100000000;
const MIN_QUANTITY = 0;
const API_BASE_URL = 'https://api.example.com';

//  SAI
const maxPrice = 100000000;   // Chưa thể hiện đây là hằng số
```

### 1.4. Files & Folders
```javascript
//  ĐÚNG
Product.js              // Class files - PascalCase
index.js               // Entry files - lowercase
utils.js               // Utility files - camelCase
product-manager.js     // Multi-word - kebab-case
userService.js         // Services - camelCase

// Folders
src/                   // lowercase
exercises/             // lowercase
exercise-01-product/   // kebab-case
```

### 1.5. Boolean Variables
```javascript
//  ĐÚNG - Prefix: is, has, can, should
let isAvailable = true;
let hasPermission = false;
let canEdit = true;
let shouldUpdate = false;

//  SAI
let available = true;         // Không rõ ràng
let permission = false;       // Không thể hiện boolean
```

---

## QUY TẮC FORMATTING

### 2.1. Indentation & Spacing
```javascript
// ✅ ĐÚNG - 2 spaces hoặc 4 spaces (CHỌN 1 và THỐNG NHẤT)
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Spacing around operators
let total = price * quantity;         // ✅ Có khoảng trắng
let total=price*quantity;             // ❌ Không có khoảng trắng

// Spacing in objects
const user = { name: 'Long', age: 20 };   // ✅
const user={name:'Long',age:20};          // ❌
```

### 2.2. Braces & Brackets
```javascript
//  ĐÚNG - Opening brace cùng dòng
function calculate() {
  if (condition) {
    return true;
  }
}

//  SAI - Opening brace dòng mới (không theo JS convention)
function calculate()
{
  if (condition)
  {
    return true;
  }
}
```

### 2.3. Semicolons
```javascript
// ĐÚNG - Luôn có dấu chấm phẩy
const name = 'Long';
const age = 20;
function test() {
  return 'test';
}

// ⚠️ TRÁNH - Không có dấu chấm phẩy (có thể gây lỗi)
const name = 'Long'
const age = 20
```

### 2.4. Quotes
```javascript
// ĐÚNG - Thống nhất sử dụng single quote
const name = 'Long';
const category = 'Electronics';

// Template literals cho string interpolation
const message = `Hello ${name}`;
const info = `Product: ${name}, Price: ${price}`;

// SAI - Trộn lẫn quotes không cần thiết
const name = "Long";          // Double quote không nhất quán
const category = 'Electronics';
```

### 2.5. Line Length
```javascript
// ĐÚNG - Tối đa 80-100 ký tự/dòng
const result = products
  .filter(p => p.isAvailable)
  .map(p => p.name)
  .join(', ');

// SAI - Quá dài
const result = products.filter(p => p.isAvailable && p.quantity > 0 && p.price < 1000000).map(p => ({ name: p.name, price: p.price })).join(', ');
```

---

## CẤU TRÚC CODE

### 3.1. Class Structure (Thứ tự cố định)
```javascript
class Product {
  // 1. Static properties/methods (nếu có)
  static productCount = 0;
  static createProduct(data) { }

  // 2. Constructor
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  // 3. Getters
  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  // 4. Setters
  setName(name) {
    this.name = name;
  }

  setPrice(price) {
    this.price = price;
  }

  // 5. Business logic methods
  calculateTotalValue() {
    return this.price * this.quantity;
  }

  applyDiscount(percent) {
    this.price = this.price * (1 - percent / 100);
  }

  // 6. Validation methods
  isValid() {
    return this.price > 0 && this.quantity >= 0;
  }

  // 7. Display/Output methods
  displayInfo() {
    console.log(`${this.name}: ${this.price}`);
  }

  toString() {
    return `Product: ${this.name}`;
  }
}
```

### 3.2. File Structure
```javascript
// 1. Imports (nếu dùng modules)
const Product = require('./Product');
const { formatCurrency } = require('./utils');

// 2. Constants
const MAX_PRICE = 100000000;
const CATEGORIES = ['Electronics', 'Fashion', 'Accessories'];

// 3. Main code/functions
function main() {
  // Entry point
}

// 4. Helper functions
function helperFunction() {
  // Support functions
}

// 5. Exports (nếu cần)
module.exports = { main, helperFunction };

// 6. Execution (nếu là entry file)
if (require.main === module) {
  main();
}
```

---

## BEST PRACTICES

### 4.1. Variables
```javascript
// ĐÚNG - Dùng const/let, không dùng var
const MAX_SIZE = 100;
let currentSize = 0;

// ĐÚNG - Khai báo gần nơi sử dụng
function calculate() {
  const price = 1000;
  const quantity = 5;
  const total = price * quantity;
  return total;
}

// SAI - Khai báo tất cả ở đầu
function calculate() {
  const price = 1000;
  const quantity = 5;
  const total;
  // ... nhiều dòng code
  total = price * quantity;
}
```

### 4.2. Functions
```javascript
// ĐÚNG - Function làm 1 việc duy nhất
function calculateTotal(price, quantity) {
  return price * quantity;
}

function formatCurrency(amount) {
  return amount.toLocaleString('vi-VN') + 'đ';
}

// SAI - Function làm quá nhiều việc
function processProduct(product) {
  // Validate
  // Calculate
  // Format
  // Display
  // Save to database
  // Send notification
}
```

### 4.3. Comments
```javascript
// ĐÚNG - Comment giải thích TẠI SAO, không phải LÀM GÌ
// Calculate discount for bulk orders (>100 items get 10% off)
const discount = quantity > 100 ? 0.1 : 0;

// SAI - Comment mô tả code rõ ràng
// Set discount to 0.1
const discount = 0.1;

// ĐÚNG - JSDoc cho functions
/**
 * Calculate total price with discount
 * @param {number} price - Unit price
 * @param {number} quantity - Quantity
 * @param {number} discount - Discount percent (0-100)
 * @returns {number} Total price after discount
 */
function calculateTotal(price, quantity, discount) {
  return price * quantity * (1 - discount / 100);
}
```

### 4.4. Error Handling
```javascript
// ĐÚNG - Validation đầu vào
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// ĐÚNG - Try-catch cho external operations
try {
  const data = JSON.parse(jsonString);
  processData(data);
} catch (error) {
  console.error('Failed to parse JSON:', error.message);
}
```

### 4.5. Array Methods
```javascript
// ĐÚNG - Sử dụng array methods thay vì loops
const expensiveProducts = products.filter(p => p.price > 1000000);
const productNames = products.map(p => p.name);
const totalValue = products.reduce((sum, p) => sum + p.price, 0);

// CÓ THỂ - Nhưng ưu tiên array methods
const expensiveProducts = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].price > 1000000) {
    expensiveProducts.push(products[i]);
  }
}
```

---

## NHỮNG ĐIỀU CẦN TRÁNH

### Magic Numbers
```javascript
// SAI
if (user.age > 18) { }
if (product.quantity < 5) { }

// ĐÚNG
const ADULT_AGE = 18;
const LOW_STOCK_THRESHOLD = 5;

if (user.age > ADULT_AGE) { }
if (product.quantity < LOW_STOCK_THRESHOLD) { }
```

### Deep Nesting
```javascript
// SAI - Quá nhiều nested levels
if (user) {
  if (user.isActive) {
    if (user.hasPermission) {
      if (product) {
        if (product.isAvailable) {
          // Do something
        }
      }
    }
  }
}

// ĐÚNG - Early return
if (!user || !user.isActive || !user.hasPermission) {
  return;
}
if (!product || !product.isAvailable) {
  return;
}
// Do something
```

### Code Duplication
```javascript
// SAI - Lặp lại code
const total1 = product1.price * product1.quantity;
const total2 = product2.price * product2.quantity;
const total3 = product3.price * product3.quantity;

// ĐÚNG - Tạo function
function calculateTotal(product) {
  return product.price * product.quantity;
}
const total1 = calculateTotal(product1);
const total2 = calculateTotal(product2);
const total3 = calculateTotal(product3);
```

---

## TEMPLATE CHO CÁC BÀI TẬP

### Template: Class-based Exercise
```javascript
/**
 * Exercise: [Tên bài tập]
 * Student: Đoàn Đức Long - 2280601744
 * Date: [Ngày làm]
 */

// ===== CONSTANTS =====
const CONSTANT_NAME = value;

// ===== CLASS DEFINITION =====
class ClassName {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }

  // Methods here
}

// ===== MAIN CODE =====
function main() {
  console.log('=== [Tên bài tập] ===\n');

  // Câu 1: [Mô tả]
  console.log('--- Câu 1 ---');
  // Code...

  // Câu 2: [Mô tả]
  console.log('\n--- Câu 2 ---');
  // Code...
}

// ===== EXECUTION =====
main();
```

### Template: README cho bài tập
```markdown
# Exercise: [Tên bài tập]

## Yêu cầu
[Mô tả yêu cầu bài tập]

## Cấu trúc
- `src/ClassName.js` - Class definition
- `src/index.js` - Main execution

## Cách chạy
```bash
node src/index.js
```

## Checklist
- [ ] Câu 1: [Mô tả]
- [ ] Câu 2: [Mô tả]
...
```

---

## CÔNG CỤ HỖ TRỢ

### .editorconfig (Đồng bộ format giữa các editor)
```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.js]
indent_style = space
indent_size = 2
```

### package.json (Cấu hình cơ bản)
```json
{
  "name": "exercise-name",
  "version": "1.0.0",
  "description": "Exercise description",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "test": "echo \"No tests yet\""
  },
  "author": "Đoàn Đức Long - 2280601744",
  "license": "ISC"
}
```

---

## CHECKLIST TRƯỚC KHI SUBMIT

- [ ] Code theo đúng naming conventions
- [ ] Indentation thống nhất (2 hoặc 4 spaces)
- [ ] Có dấu chấm phẩy đầy đủ
- [ ] Không có magic numbers
- [ ] Functions ngắn gọn, rõ ràng
- [ ] Có comments cho logic phức tạp
- [ ] Đã test tất cả các chức năng
- [ ] Không có code duplication
- [ ] Error handling đầy đủ
- [ ] Code format đẹp, dễ đọc

---

**LƯU Ý**: 
- Luôn tuân thủ các quy chuẩn trên cho TẤT CẢ các bài tập
- Khi có thắc mắc, tham khảo lại README này
- Cập nhật README khi có quy chuẩn mới
- Code nhất quán = Code dễ maintain = Điểm cao hơn

