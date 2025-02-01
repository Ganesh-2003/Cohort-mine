function findSum(n) {
  let ans = 0;
  for (let i = 1; i < n; i++) {
    ans = ans + i;
  }
  return ans;
}


// Asynchronous Call

function CallFindSum1000() {
  let ans = findSum(1000);
  console.log(ans);
}

setTimeout(CallFindSum1000, 1000); //Asynchronous Call
console.log("Hello World");

//Common Async Functions

// setTimeout
// fs.readFile - to read a file from your filesystem
// Fetch - to fetch some data from an API endpoint
