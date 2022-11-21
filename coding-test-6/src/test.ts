// 데이터의 특성을 파악하여 값을 도출하기
// 게임 가격 64,800원
// 고정 지출예산 100,000원
// 고정지출 항목에서 어떤 것을 몇 번 절약해야 게임을 구매할 수 있을까?
// 중요도 : 출퇴근비용 < 커피 < 고양이간식(고정)
// 항목별 절약횟수를 하나의 문장으로 출력
// 출퇴근 절약 -> 피로도 + 1, 커피 절약 -> 미움지수 + 1

const budget = 100000;
const goal = 64800;

const fixedItems = {
  "출퇴근비용" : {
    "카카오톡자전거" : "1500원",
    "택시" : "3500원",
  },
  "커피" : {
    "엔시나" : "4500원",
    "카누" : "200원",
  },
  "고양이간식" : {
    "닭고기" : "400원",
    "락토프리우유" : "800원",
  }
} 
const fixedHistory = {
  "출퇴근비용" : {
    "카카오톡자전거" : "19회",
    "택시" : "3회",
  },
  "커피" : {
    "엔시나" : "6잔",
    "카누" : "15잔",
  },
  "고양이간식" : {
    "닭고기" : "30개",
    "락토프리우유" : "2개",
  }
}

// 절약할 금액 구하는 함수
const save = (budget: number, goal: number): number => {

  const quantity = Object.values(fixedHistory);
  const price = Object.values(fixedItems);

  // 객체데이터 조회하여 value값만 배열로 저장하는 함수
  const getValue = (arr: Array<object>) => {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      const price = Object.values(arr[i]);
      temp.push(price);
    }
    const result = temp.flat();
    return toNumber(result);
  }

  // 문자열 배열을 숫자로 바꾸는 함수
  const toNumber = (arr: Array<string>) => {
    const resultArr:number[] = [];

    arr.forEach((elem) => {
      resultArr.push(parseInt(elem));
    })
    return resultArr;
  }

  // 지출 총액 구하는 함수
  const total = (): number => {
    let sum = 0;
    const arr1 = getValue(price);
    const arr2 = getValue(quantity);
    for (let i = 0; i < arr1.length; i++) {
      sum = sum + arr1[i] * arr2[i]
    } 
    return sum;
  }

  return total() - (budget - goal)
}
console.log(save(budget, goal));

// 중요도 순으로 save가 0이 될 때까지 뺀다 (출퇴근 < 커피)
// 위에서 뺀 항목과 수량 체크하기 + 피로도, 미움지수 카운트
const commingsoon = (obj : Object): string => {
  return ("")
}

// const arr1 = Object.entries(fixedItems);
// const arr2 = Object.entries(arr1[0][1]);
// const arr3 = Object.entries(arr1[1][1]);
// const arr4 = Object.entries(arr1[2][1]);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

// console.log(arr1[0][0]);
// console.log(arr2[0][0]);
// console.log(arr2[0][1]);

// console.log(arr1[0][0]);
// console.log(arr2[1][0]);
// console.log(arr2[1][1]);

// console.log(arr1[1][0]);
// console.log(arr3[0][0]);
// console.log(arr3[0][1]);

// console.log(arr1[1][0]);
// console.log(arr3[1][0]);
// console.log(arr3[1][1]);

// console.log(arr1[2][0]);
// console.log(arr4[0][0]);
// console.log(arr4[0][1]);

// console.log(arr1[2][0]);
// console.log(arr4[1][0]);
// console.log(arr4[1][1]);

// const getArray = (obj: Object) => {
//   let temp = [];
//   const arr1 = Object.entries(fixedItems);

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1[i].length; j++) {
//       arr1[i][j]
//     }
//   }
// }