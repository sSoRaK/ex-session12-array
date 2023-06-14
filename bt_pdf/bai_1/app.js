// bài 1 - a,b Nhập 5 giá trị số nguyên cho mảng từ bàn phím và hiển thị giá trị các phần tử của mảng
let arrayInt = [];
for (let i = 0; i < 5; i++) {
  arrayInt[i] = Number(prompt("Nhập giá trị nguyên thứ " + (i + 1)));
  console.log("giá trị " + (i + 1) + " là " + arrayInt[i]);
}
console.log(arrayInt);
// 1-c,d. In các phần tử có giá trị chẵn, lẻ và tính tổng
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < 5; i++) {
  if (arrayInt[i] % 2 === 0) {
    sumEven += arrayInt[i];
  } else {
    sumOdd += arrayInt[i];
  }
}
console.log("tổng các số chẵn");
console.log(sumEven);
console.log("tổng các số lẻ");
console.log(sumOdd);
// 1-e In giá trị các phần tử trong mảng là số nguyên tố
for (let i = 0; i < arrayInt.length; i++) {
  let checkPrime = true;
  if (arrayInt[i] <= 1) {
    checkPrime = false;
  }
  // duyệt các giá trị phần tử trong mảng
  for (let j = 2; j < arrayInt[i]; j++) {
    // nếu chia hết cho các ước của nó thì không phải SNT
    if (arrayInt[i] % j === 0) {
      checkPrime = false;
      break;
    }
  }
  if (checkPrime) {
    console.log(arrayInt[i] + " là số nguyên tố");
  }
}

// 1-f. In các phần tử có giá trị là max hoặc min
let max = arrayInt[0];
let min = arrayInt[0];
for (let i = 0; i < arrayInt.length; i++) {
  if (min > arrayInt[i]) {
    min = arrayInt[i];
  }
  if (max < arrayInt[i]) {
    max = arrayInt[i];
  }
}
console.log("Giá trị max trong mảng là " + max);
console.log("Giá trị min trong mảng là " + min);

// 1-g. Sắp xếp mảng giảm dần và in giá trị các phần tử mảng sau khi sắp xếp
// c1: sort()
// for (let i = 0; i < arrayInt.length; i++) {
//   arrayInt.sort((a, b) => (a > b ? -1 : 1));
// }
// console.log(arrayInt);
// c2: bubble sort
// for (let i = 0; i < arrayInt.length; i++) {
//   let swap = 0;
//   for (let j = 0; j < arrayInt.length - 1; j++) {
//     if (arrayInt[i] > arrayInt[j]) {
//       swap = arrayInt[i];
//       arrayInt[i] = arrayInt[j];
//       arrayInt[j] = swap;
//     }
//   }
// }
// c3: selection sort
for (let i = 0; i < arrayInt.length - 1; i++) {
  // max i = array.length - 2
  for (let j = i; j < arrayInt.length; j++) {
    // max j = array.length - 1
    // so sánh arrayInt[i] với arrayInt[j]
    if (arrayInt[i] < arrayInt[j]) {
      // so sánh 2 phần tử trong mảng
      // let temp = arrayInt[i];
      // arrayInt[i] = arrayInt[j];
      // arrayInt[j] = temp;
      // Destructuring assignment
      [arrayInt[i], arrayInt[j]] = [arrayInt[j], arrayInt[i]];
    }
  }
}
console.log(arrayInt);
// 1-h Nhập vào một số nguyên và thống kê có bao nhiêu phần tử có giá trị như vậy
let n = Number(prompt("Nhập 1 số n"));
let count = 0;
for (const element of arrayInt) {
  if (n === element) {
    count++;
  }
}
console.log("số " + n + " có số lần lặp trong mảng là " + count);
