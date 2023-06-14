// 4. Khai báo mảng 1 chiều
let arr = [];
// a.Cho phép người dùng nhập các giá trị của mảng bằng hàm prompt
// và lưu trữ giá trị trong mảng cho đến khi người dùng nhập một giá
// trị không phải là số, một chuỗi trống hoặc nhấn “Cancel”

while (true) {
  let input = parseInt(prompt("Nhập giá trị số vào mảng"));
  if (input == null || input == "") {
    break;
  }
  let number = parseInt(input);
  if (isNaN(number)) {
    break;
  }
  arr.push(number);
}
console.log(arr);

// b.Tính tổng các giá trị của mảng,

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("Tổng giá trị các phần tử trong mảng là : ", sum);

// in ra phần tử có giá trị max - min
let max = arr[0];
let min = arr[0];
for (i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log("Giá trị phần tử lớn nhất là : ", max);
console.log("Giá trị phần tử nhỏ nhất là : ", min);
