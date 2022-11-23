//* 트럼프덱 객체타입으로 리턴하는 함수
//* 총 카드 갯수 길이 값 도출 

const shape_array = ["spade", "heart", "diamond", "club", "joker"]; // key
const shapeArray = {
  variation : 13,
  joker : 2,
} // value

interface Result {
  [key: string]: any
}

const createJoker = () => {
  let temp = [];

  for (let i = 0; i < shapeArray['joker']; i++) {
    temp.push(i + 1);
  }
  let obj: Result = temp.reduce((acc, value, index) => {
    return {...acc, [index + 1]: value};
  }, {});

  let result: Result = {};
  result['RED'] = obj['1'];
  result['BLACK'] = obj['2'];

  return result;
}

const createVariation = () => {
  let temp = [];
  for (let i = 0; i < shapeArray['variation']; i++) {
    temp.push(i + 1);
  }
  let result: Result = temp.reduce((acc, value, index) => {
    if(index === 0) {
      return {...acc, ['A']: value}
    } 
    if(index === 10) {
      return {...acc, ['J']: value}
    }
    if(index === 11) {
      return {...acc, ['Q']: value}
    }
    if(index === 12) {
      return {...acc, ['K']: value}
    }
    else {
      return {...acc, [index + 1]: value};
    }
  }, {});

  return result;
}

const trump_deck = () => {
  let result: Result = {};

  for(let i = 0; i < shape_array.length; i++) {

    if (shape_array[i] === "joker") {
      result[`${shape_array[i]}`] = createJoker();
    } else {
      result[`${shape_array[i]}`] = createVariation();
    } 
  }
  return result;
}

console.log(trump_deck());