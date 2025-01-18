//CallBack Practice

//Function inside a Function

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSquares(a, b) {
  const val1 = square(a);
  const val2 = square(b);

  return val1 + val2;
}

function sumOfCubes(a, b) {
  const val1 = cube(a);
  const val2 = cube(b);

  return val1 + val2;
}

console.log("Sum of Squares is " + sumOfSquares(2, 3));
console.log("Sum of Cubes is " + sumOfCubes(2, 3));

//Usage of CallBacks for this example

function sumOfSmtng(a, b, fn) {
  const val1 = fn(a);
  const val2 = fn(b);

  return val1 + val2;
}

console.log(sumOfSmtng(2, 3, square));
console.log(sumOfSmtng(2, 3, cube));



