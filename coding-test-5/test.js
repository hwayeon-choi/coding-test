const inputData = [6, 2, 9, 3, 4, 0, 8, 5,  7, 1]; 
let step = 0;

function sortArray(arr) {

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

function Result(arr) {
  this.one = arr[0];
  this.two = arr[1];
  this.three = arr[2];
  this.four = arr[3];
  this.five = arr[4];
}

const result = new Result(sortArray(inputData));
console.log(result);
