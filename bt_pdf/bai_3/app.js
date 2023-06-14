// bài 3: Tạo mảng có tên là styles có giá trị các phần tử là “Jazz”, “Blues”
// 3-a Thêm phần tử “Rock-n-Roll” vào cuối mảng
let styles = ["Jazz", "Blues"];
console.log(styles); // ['Jazz', 'Blues']
styles.push("Rock-n-Roll");
console.log("Push element 'Rock-n-Roll' in last index array");
console.log(styles); // ['Jazz', 'Blues', 'Rock-n-Roll']
// 3-b Thay thế phần tử nằm chính giữa mảng bằng “Classics” nếu mảng có tổng số phần tử là lẻ
let middleIndex = (styles.length - 1) / 2; // -> 1, 3, 5, 7,...
// Array have length equal odd number
if (middleIndex % 2 !== 0) {
  styles[middleIndex] = "Classics";
}
console.log(styles);
// // 3-c Xóa phần tử đầu tiên của mảng và hiển thị mảng
let firstIndexDelete = styles.shift();
console.log("Delete first element of array");
console.log(styles);
// // 1-d Thêm phần tử “Rap” và “Reggae” vào đầu mảng và hiển thị
let addTwoElements = styles.unshift("Rap", "Reggae");
console.log("Add two elements in array");
console.log(styles);
