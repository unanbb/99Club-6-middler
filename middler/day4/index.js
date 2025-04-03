const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'day4.txt');
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift(); // 행렬 크기
const map = input.map((item) => item.replace('\r', '').split(' ').map(Number));

function dfs(x, y, check) {
  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];

  for (let j = 0; j < 4; j++) { //상하좌우로 1씩 움직이기
    let nx = x + dx[j];
    let ny = y + dy[j];

    if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
      if (check[nx][ny] !== '#') { // 잠기지 않았으면 (일반 숫자 -> 방문 가능)
        check[nx][ny] = '#'; // 방문 처리
        dfs(nx, ny, check);
      }
      //사방이 모두 잠겼으면 순회 끝
    }
  }
}

let maxCnt = 0;

for (let i = 1; i <= 100; i++) { // i 이하의 지역이 물에 잠김
  let cnt = 0;
  let check = map.map(row => row.map(item => (item <= i ? '#' : item)));

  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (check[j][k] !== '#') { // 잠기지 않은 땅이면 (일반 숫자 -> 방문 가능)
        check[j][k] = '#'; // 방문 체크
        dfs(j, k, check);
        cnt++;
      }
      // 사방이 모두 잠겼으면 순회 끝
    }
  }

  maxCnt = Math.max(maxCnt, cnt);
}

console.log(maxCnt);
