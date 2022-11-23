const { isArrayLiteralExpression } = require("typescript");

// 원소 값 0이 10개로 이루어진 배열 n개 생성
const createArray = (count) => {
  let arr = [];
  for (let i = 0; i < count; i++) {
    const line = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    arr.push(line);
  }
  return arr;
}

function promise(arr) {
  return new Promise((resolve, reject) => {
    if(arr[0].length !== 0) resolve(arr);
  });
}

async function gameContinue(arr) {
  let array = Bingo(arr);
  let i = Math.floor((Math.random()*array.length));
  let j = Math.floor((Math.random()*array[i].length));
  array[i][j] = 1;
  return array;
} 

async function bingoCheck(arr) {
  let array = await gameContinue(arr); 

  // 원소 1인 인덱스 찾기
  const findIndex = () => {
    let temp = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].includes(1) === true) {
        temp.push(array[i].indexOf(1));
      } else {
        temp.push(0);
      } 
    }
    return temp;
  }

  // 모든 배열의 원소 값이 1인 인덱스가 일치하면 해당 원소 값 삭제
  let temp = findIndex();
  if (temp.every(x => x === temp[0]) === true) {      
    for (let i = 0; i < array.length; i++) {
      array[i].splice(array[i].indexOf(1), 1);
    } 
  } 
  return array;
} 

async function Bingo(arr) {
  let array = await bingoCheck(arr);
  if (array[0].length === 0) {
    console.log("승리!");
    return array;
  } else {
    return array;
  }   
} 

console.log(Bingo(createArray(5)));