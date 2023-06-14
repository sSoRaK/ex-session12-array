// bài 2: khai báo mảng 2 chiều số nguyên arrInt
let arrInt = [];
let row = Number(prompt("Nhập số dòng của mảng "));
let column = Number(prompt("Nhập số cột của mảng "));
// 2-a,b Nhập giá trị các phần tử của mảng từ bàn phím và in giá trị các phần tử của mảng
for (let i = 0; i < row; i++) {
  arrInt[i] = [];
  for (let j = 0; j < column; j++) {
    arrInt[i][j] = Number(
      prompt("Nhập các giá trị phần tử dòng " + (i + 1) + " cột " + (j + 1))
    );
  }
}
for (let i = 0; i < arrInt.length; i++) {
  console.log("giá trị phần tử của mảng " + (i + 1) + " : " + arrInt[i]);
}
console.log(arrInt);
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// 2-c In giá trị các phần tử nằm trên đường biên (Coi mảng 2 chiều là ma trận)
let edgeLeft = [];
let edgeRight = [];

for (let i = 0; i < arrInt.length; i++) {
  // array[i][i-i] -> [0][0 - 0]
  // array[i][i-i] -> [1][1 - 1]
  // array[i][i-i] -> [2][2 - 2]
  edgeLeft[i] = arrInt[i][i - i];
  // i == array.length  - 1 <=> 2 == 3 - 1
  // i == array.length  - 1 <=> 4 == 5 - 1

  // array.length -1 = column - 1
  // array[i][array.length -1] -> [0][3 - 1]
  // array[i][array.length -1] -> [1][3 - 1]
  // array[i][array.length -1] -> [2][3 - 1]
  edgeRight[i] = arrInt[i][column - 1];
}
console.log("The left edge of array2D");
console.log(edgeLeft);
console.log("The right edge of array2D");
console.log(edgeRight);

// 2-d In giá trị các phần tử nằm trên đường chéo chính và phụ
let diagonalPrimary = [];
let diagonalSecondary = [];
let n = arrInt.length;
// n = 2n + 1 -> n is oddNumber
// n = 0 -> n = 1
// n = 1 -> n = 3
// n = 2 -> n = 5
for (let i = 0; i < n; i++) {
  // checkOddNumber = 2n+1;
  if (row == column) {
    diagonalPrimary[i] = arrInt[i][i];
    // arrInt i = 0, i = arrInt.length - i - 1 = 3 - 0 - 1 = 2
    // arrInt i = 1, i = arrInt.length - i - 1 = 3 - 1 - 1 = 1
    // arrInt i = 2, i = arrInt.length - i - 1 = 3 - 2 - 1 = 0
    diagonalSecondary[i] = arrInt[i][n - i - 1];
  } else {
    console.log("Pls re-type array2D");
    break;
  }
}
console.log("Primary diagonal in array2D");
console.log(diagonalPrimary);
console.log("Secondary diagonal in array2D");
console.log(diagonalSecondary);

// 2-e Sắp xếp mảng tăng dần theo dòng (không và có sử dụng hàm sort)
// c1: sort()
// c2:
for (let i = 0; i < row; i++) {
  // đang xét dòng i -> arrInt[i]: dòng i
  for (let j = 0; j < column - 1; j++) {
    for (let k = j + 1; k < column; k++) {
      if (arrInt[i][j] > arrInt[i][k]) {
        // đổi chổ 2 phần tử
        // let temp = arrInt[i][j];
        // arrInt[i][j]=arrInt[i][k];
        // arrInt[i][k]=temp;
        // Destructuring assignment
        [arrInt[i][j], arrInt[i][k]] = [arrInt[i][k], arrInt[i][j]];
      }
    }
  }
}
console.log("Ascending array2D");
console.log(arrInt);
