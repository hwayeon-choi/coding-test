"use strict";
// 무작위의 숫자 데이터 배열을 작은값 순으로 정렬
// 정렬용 메서드 사용하지 않을 것
// 순서를 바꾸는 실행이 일어날 때 -> step 값 + 1 -> 실행 수 콜솔에 기록
// 인터페이스 문법 : 객체 타입으로 출력
const inputData = [6, 2, 9, 3, 4, 0, 8, 5, 7, 1];
let step = 0;

function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swap;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
        step++;
        console.log(`${step}회전: ${arr}`);
        if (!swap) {
            break;
        }
    }
    return arr;
}

class Result {
    constructor(arr) {
        this.one = arr[0];
        this.two = arr[1];
        this.three = arr[2];
        this.four = arr[3];
        this.five = arr[4];
    }
}

result = Result(sortArray(inputData))
print(result)
