//* 원소 0으로 이루어진 길이 값 10인 배열 n개
//* 같은 인덱스의 원소값이 모두 1이 되면 득점으로 판정
//* 득점하면 원소 삭제시키고 빈자리가 다음 순서의 원소로 메워진다
//* 어떤 방식으로 원소 데이터를 0에서 1로 변화시키는지는 알 수 없다
//* 모든 배열 값이 사라지고 길이 값이 0이 되었을 때 "승리!"라는 문구를 출력
//* 추가 도전 : score처리, timer등 다양한 응용이나 애니메이션, dom api를 통한 인터렉션

// 원소 값 0이 10개로 이루어진 배열 n개 생성
const createArray = (count: number) => {
  let arr = [];
  for (let i = 0; i < count; i++) {
    const line = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    arr.push(line);
  }
  return arr;
}

function promise(arr: number[][]) {
  return new Promise((resolve, reject) => {
    if(arr[0].length !== 0) resolve(arr);
  });
}

async function gameContinue(arr: number[][]) {
  let array = Bingo(arr);
  let i = Math.floor((Math.random()*array.length));
  let j = Math.floor((Math.random()*array[i].length));
  array[i][j] = 1;
  return array;
} 

async function bingoCheck(arr: number[][]) {
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

async function Bingo(arr: number[][]) {
  let array = await bingoCheck(arr);
  if (array[0].length === 0) {
    console.log("승리!");
    return array;
  } else {
    return array;
  }   
} 

console.log(Bingo(createArray(5)));


// const bingo = (array: Array<Array<number>>) => {

//   let arr = array

//   while(true) {

//     if (arr[0].length === 0) {
//       console.log("승리!")

//     } else {
//       const gameContinue = () => {
//         let i = Math.floor((Math.random()*arr.length));
//         let j = Math.floor((Math.random()*arr[i].length));
//         arr[i][j] = 1;
//       }
//       gameContinue();
//       console.log(arr);
//       return arr;
//     }
    
//     const bingoCheck = () => {

//       while(true) { 
//         // 원소 1인 인덱스 찾기
//         const findIndex = () => {
//           let temp = [];
//           for (let i = 0; i < arr.length; i++) {
//             if (arr[i].includes(1) === true) {
//               temp.push(arr[i].indexOf(1));
//             } else {
//               temp.push(0);
//             } 
//           }
//           return temp;
//         }
    
//         // 모든 배열의 원소 값이 1인 인덱스가 일치하면 해당 원소 값 삭제
//         let temp = findIndex();
//         if (temp.every(x => x === temp[0]) === true) {      
//           for (let i = 0; i < arr.length; i++) {
//             arr[i].splice(arr[i].indexOf(1), 1);
//             break;
//           } 
//         } else continue;
//       } 
//       console.log(arr);
//       return arr;
//     }
//     bingoCheck();
//   }
// }

// bingo(createArray(5));