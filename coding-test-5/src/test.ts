// 무작위의 숫자 데이터 배열을 작은값 순으로 정렬
// 정렬용 메서드 사용하지 않을 것
// 순서를 바꾸는 실행이 일어날 때 -> step 값 + 1 -> 실행 수 콜솔에 기록
// 인터페이스 문법 : 객체 타입으로 출력

const inputData = [6, 2, 9, 3, 4, 0, 8, 5,  7, 1]; 
let step = 0;

//* 0. 버블정렬 알고리즘
//* 1. 배열의 원소 수 만큼 반복
//* 2. swap 변수 생성 : 원소 값을 교환하기 위한 임시 저장소
//* 3. 인덱스 j, j+1을 비교해서 작은 수를 j번째로 옮기는 동작 반복
//* 4. 실행이 한 번 끝날 때마다 step++ 하고 콘솔에 출력
//* 5. swap 변수에 아무 값도 들어오지 않으면 실행 종료하고 리턴

function sortArray(arr: Array<number>): Array<number> {

  for(let i = 0; i < arr.length;  i++) {
    let swap;
    for(let j = 0; j < arr.length-1-i; j++) {
      if(arr[j] > arr[j + 1]) {
        swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
    step++
    console.log(`${step}회전: ${arr}`);
    if(!swap) {
      break;
    }
  }
  return arr;
}

//* 1. sortArray에서 출력한 배열을 받아오기 
//* 2. 인덱스 4번까지의 배열 원소 값을 넣은 객체 생성

// 인터페이스 정의
interface ResultData {
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
}

// 클래스 생성
class Result implements ResultData {
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;

  constructor(arr: Array<number>) {
    this.one = arr[0];
    this.two = arr[1];
    this.three = arr[2];
    this.four = arr[3];
    this.five = arr[4];
  }
}

const result = new Result(sortArray(inputData));
console.log(result);