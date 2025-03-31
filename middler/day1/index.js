//환경 구축
const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'day1.txt');
let input = fs.readFileSync(filePath).toString().split(' ');

const M = +input[0]; // 3
const N = +input[1]; // 16

//코드
for (let i = M; i <= N; i++) {
  if (i === 1) continue;
  if (i === 2 || i === 3) {
    console.log(i);
    continue;
  }

  let isPrime = true;
  
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) { 
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}