const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'day5.txt');
let input = fs.readFileSync(filePath).toString().replace('\r','').split('\n');

//변수 선언
const [N,K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let maxHap = arr.slice(0,K).reduce((acc,cur) => acc+cur,0);
let hap = maxHap;

for(let i=1; i<=N-K; i++){
  hap = hap - arr[i-1] + arr[i+K-1];

  maxHap = Math.max(hap, maxHap);
}

console.log(maxHap);