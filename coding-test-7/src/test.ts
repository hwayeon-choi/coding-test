//* 조건1. 더미텍스트에 사용된 알파벳의 종류와 갯수 -> 객체 타입으로 출력
//* 조건2. 언어가 달라도 동작해야 한다.
//* 조건3. 가장 적게 작성된 알파벳이 가장 많이 작성된 알파벳과의 차이만큼 문장 사이사이에 무작위로 배치
//* 조건4. 5개의 음절 단위로 띄어쓰기
//* 조건5. 부모함수는 text_listup() 하나만 존재

const fromInput = " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of  constters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) "

function text_listup(text: string) {
  // 문자열의 공백과 특수문자 제거
  const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"/\s/g]/gi;
  const text2 = fromInput.replace(reg,''); 
  
  // 문자열을 소문자로 변환하여 배열로 반환
  const stringToArray = [...text2.toLowerCase()];

  // 배열을 돌면서 중복된 요소 카운트하여 객체로 반환
  const text_count = (arr: Array<string>) => {
    const result = arr.reduce((acc: {[key: string]: number}, el: string) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
  
    return result;
  }
  
  // 조건에 맞는 새로운 문자열 반환
  const text_edit = () => {
  
    // 가장 적게 쓴 음절과 많이 쓴 음절 찾기
    const obj = text_count(stringToArray)
    const min = Object.values(obj).sort((prev, next) => prev - next)[0];
    const max = Object.values(obj).sort((prev, next) => next - prev)[0];
  
    const getKeyByValue = (obj: {[key: string]: number}, value: number) => {
      return Object.keys(obj).find(key => obj[key] === value);
    }
  
    const minKey = getKeyByValue(obj, min);
    const maxKey = getKeyByValue(obj, max);
  
    // 가장 적게 쓴 음절 많이 쓴 음절만큼 끼워넣은 새로운 텍스트 반환
    const new_text = (text: string, word: string, count: number) => {
      
      // slice할 인덱스 숫자 랜덤 생성
      for (let i = 0; i < max-min; i++) {
        let randomNum = Math.floor(Math.random()*text.length);

        const newText = text.slice(0, randomNum) + word + text.slice(randomNum, text.length);
        text = newText;
      }
      return text;
    }
    new_text(text2, `${minKey}`, max-min);

    // 5개 음절 단위로 띄어쓰기
    const data = new_text(text2, `${minKey}`, max-min);
    const outputData = data.replace(/(.{5})/g, "$1 ");
    return outputData;
  }
  console.log(text_edit());
} 

text_listup(fromInput);