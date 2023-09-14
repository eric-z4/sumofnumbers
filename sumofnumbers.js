const testArr = [1, 2, 3, 4, 5, 6, 7];

function sumFor(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumWhile(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

function sumRecursion(arr, i = 0) {
  if (i > arr.length - 1) {
    return 0;
  }
  return arr[i] + sumRecursion(arr, i + 1);
}

function sumTheSimpleWay(arr) {
  return _.reduce(arr, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor(testArr)); // Should return 21
console.log(sumWhile(testArr));
console.log(sumRecursion(testArr, 0));
console.log(sumTheSimpleWay(testArr));
