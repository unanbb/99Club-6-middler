const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'day6.txt');
let input = fs.readFileSync(filePath).toString().replace('\r','').split('\n');

//코드
// 땅:1, 바다:0
// 땅인 곳을 찾아서 dfs 실행
// 8면에 바다가 없을 때까지 dfs 반복 
// 없으면 cnt+1 하고 dfs 종료
function dfs(x,y,map,w,h) {
  const dx = [0,0,-1,1,-1,1,1,-1];
  const dy = [-1,1,0,0,-1,1,-1,1];

  for(let i=0; i<8; i++){
    let nx = x + dx[i];
    let ny = y + dy[i];

    if(nx >= 0 && ny >= 0 && nx < h && ny < w && map[nx][ny]){ // 좌표 안넘어가고, 땅(1)이 있으면
      map[nx][ny] = 0; // 방문체크
      dfs(nx,ny,map,w,h);
    }
  }
}

let idx = 0;

while(1){
  const [w,h] = input[idx].split(' ').map(Number); // 5 4
  if(w === 0 && h === 0) break;
  else idx++; // map배열을 받기위해 idx 조정

  const map = input.slice(idx,idx+h).map((item) => item.split(' ').map(Number));
  idx += h; // 다음 w,h를 받기 위해 idx 조정

  let cnt = 0;

  for(let i=0; i<h; i++){    
    for(let j=0; j<w; j++){
      if(map[i][j]){ // 땅인 곳(1 => true) 찾아서 dfs 실행
        dfs(i,j,map,w,h);
        cnt++; // (i,j)좌표에 한해 dfs 전부하고 나와서 cnt+1 
      }
    }
  }

  console.log(cnt);
}