// 50,000 / 10,000 / 500 / 100 / 50 / 10 : 가용한 화폐단위
// 가용한 최대 화폐단위를 최대한 활용

// 총 결제금액, 지불한 돈 입력받기
const payment = 100000
const total = 34830 

// 거스름돈 구하는 함수
function change(payment, total) {
  return payment - total
}

// 가용한 화폐단위
const Money = {
  fiveMillion : 50000,
  oneMillion : 10000,
  fiveHundred : 500,
  oneHundred : 100,
  fifty : 50,
  ten : 10
}

// 거스름돈 지불할 화폐 세기
const MoneyCount = {
  fiveMillion : 0,
  oneMillion : 0,
  fiveHundred : 0,
  oneHundred : 0,
  fifty : 0,
  ten : 0
}

//* 1. 화폐 단위가 큰 순서로 비교
//* 2. 화폐 단위가 거스름돈보다 작다면 진행, 크다면 다음 화폐단위로 건너뛰기
//* 3. 화폐 단위로 거스름돈을 더 이상 나눌 수 없을 때까지 나누기 
//* 4. 몫 -> moneyCount에 저장, 나머지 -> 거스름돈 변수에 저장
//* 5. 거스름돈이 0이 될 때까지 진행

function change_money(change, Money, MoneyCount) {
  // 거스름돈이 0이 될때까지 반복
  while(change > 0) {

    const keys = Object.keys(Money);
    // const countKeys = Object.keys(MoneyCount);

    // 화폐단위 큰 순으로 객체 순회 
    for(let i = 0; i < keys.length; i++) {

      const key = keys[i];
      const value = Money[key];

      // 거스름돈이 화폐단위보다 크다면 
      if(change > value) {
        // 화폐 카운트 객체 값에 나누기 한 몫 저장
        MoneyCount[key] = parseInt(change / value);
        // 남은 거스름돈에 나누기한 나머지 값 저장 
        change = change % value;
      } else {
        continue;
      }
    }
    console.log(MoneyCount);   
  }
}

change_money(change(payment, total), Money, MoneyCount);