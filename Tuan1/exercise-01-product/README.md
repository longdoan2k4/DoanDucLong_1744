# Bài tập 01: Product

**Sinh viên:** Đoàn Đức Long - 2280601744

## Yêu cầu

Mỗi Product gồm các thuộc tính:
- id – mã sản phẩm
- name – tên sản phẩm
- price – giá sản phẩm
- quantity – số lượng tồn kho
- category – danh mục sản phẩm
- isAvailable – trạng thái bán (true / false)

**Câu 1:** Khai báo constructor function Product để tạo đối tượng sản phẩm.

**Câu 2:** Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau.

**Câu 3:** Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm.

**Câu 4:** Lọc ra các sản phẩm còn hàng trong kho (quantity > 0).

**Câu 5:** Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không.

**Câu 6:** Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không.

**Câu 7:** Tính tổng giá trị kho hàng. Giá trị kho = price × quantity.

**Câu 8:** Dùng for...of duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái.

**Câu 9:** Dùng for...in để:
- In ra tên thuộc tính
- In ra giá trị tương ứng

**Câu 10:** Lấy danh sách tên các sản phẩm đang bán và còn hàng.

## Cách chạy

```bash
node src/index.js
```
