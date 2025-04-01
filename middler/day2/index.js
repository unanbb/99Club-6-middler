const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'day2.txt');
let n = +fs.readFileSync(filePath).toString();

//코드
const fibo = [1,1,1];

for(let i=4; i<=n; i++){
  fibo.push(BigInt(fibo[i-2]) + BigInt(fibo[i-4]));
}

console.log(String(fibo[n-1]));