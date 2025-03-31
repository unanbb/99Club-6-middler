//환경 구축
const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'day1.txt');
let [M,N] = fs.readFileSync(filePath).toString().split(' ').map(item => +item);

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