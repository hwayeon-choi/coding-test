/** 
 * Todo : 그린컴퓨터아트학원 훈련생명단 만들기
 * 
 * ? 학사 행정팀에서 학사 운영을 진행하려면, 훈련생 한명에 대한 다음과 같은 정보가 필요하다.
 * * 임의의 훈련생
 * * 1. 이름 : 공욱재 // 문자열
 * * 2. 생년월일 : 19930920 // 년 단위 4자리, 월 단위 2자리, 일 단위 2자리 총 여덟자리로 구성된 문자열
 * * 3. NCS직종 : {
 *        번호 : 1 // 문자열
 *        이름 : 정보기술개발 // 문자열
 *      }
 * * 4. 훈련강의실 : 305호 // 문자열이어야 하며, 상황에 따라 다른 호수로 배정될 수 있다.
 * * 5. 연락처 : 010-9139-0957 // 문자열이어야 하며, 전화번호 규격에 맞게 "-" 하이픈이 들어가야한다.
 * * 6. 이메일 : kongukjae@gmail.com // 문자열이어야 하며, @ atsign(골뱅이) 표시와 도메인 규격인 .(닷)이 들어가야 한다.
 * * 7. 훈련강의명 : K-ONG minam Traning // 문자열
 * * 8. 훈련시작일 : 2022-07-19 // 2번 항목과 같은 자릿수 형식의 문자열이어야 하며, 연,월,일에 맞게 "-" 하이픈이 들어가야한다.
 * * 9. 훈련종료일 : 2023-01-05 // 2번 항목과 같은 자릿수 형식의 문자열이어야 하며, 연,월,일에 맞게 "-" 하이픈이 들어가야한다.
 * * 10. 훈련생번호 : 305-01 // "-" 하이픈 기준 좌측(앞) 부분은 4번 훈련강의실 항목이어야 하며, 훈련생 번호는 누산(카운트)된 형태여야 한다.
 */

class Student {
  constructor(studentName, birthday, NCSType, classroom, phone, email, className, classStartDay, classEndDay, studentNumber) {
    this.studentName = studentName;
    this.birthday = birthday;
    this.NCSType = NCSType;
    this.classroom = classroom;
    this.phone = phone;
    this.email = email;
    this.className = className;
    this.classStartDay = classStartDay;
    this.classEndDay = classEndDay;
    this.studentNumber = studentNumber;
  }
  set studentName(value) {
    value = typeof(value) === "string" ? value : String(value);
    if(!value) {
      alert("이름을 입력하세요.");
      return;
    }
    this._studentName = value;
  }
  set birthday(value) {
    value = typeof(value) === "string" ? value : String(value);
    if(value.length !== 8) {
      alert("년 단위 4자리, 월 단위 2자리, 일 단위 2자리 총 여덟자리로 구성된 문자열을 입력하세요.");
      return;
    }
    this._birthday = value;
  }
  set classroom(value) {
    value = typeof(value) === "string" ? value : String(value);
    if(!value) {
      alert("훈련강의실을 입력하세요.");
      return;
    }
    this._classroom = value;
  }
  set phone(value) {
    value = typeof(value) === "string" ? value : String(value);
    if(value.length !== 11) {
      alert("하이픈을 제외한 형식에 맞는 전화번호를 입력하세요.");
      return;
    }
    this._phone = value.substr(0, 3) + "-" + value.substr(3, 4) + "-" + value.substr(7, 4);
  }
  set email(value) {
    value = typeof(value) === "string" ? value : String(value);
    if(!(value.includes('.') && value.includes('@'))) {
      alert("형식에 맞는 이메일 주소를 입력하세요.");
      return;
    }
    this._email = value;
  }
  set className(value) {
    value = typeof(value) === "string" ? value : String(value);
    if(!value) {
      alert("훈련강의명을 입력하세요.");
      return;
    }
    this._className = value;
  }
  set classStartDay(value) {
    value = typeof(value) === "string" ? value : String(value);
    if(value.length !== 8) {
      alert("년 단위 4자리, 월 단위 2자리, 일 단위 2자리 총 여덟자리로 구성된 문자열을 입력하세요.");
      return;
    }
    this._classStartDay = value.substr(0, 4) + "-" + value.substr(4, 2) + "-" + value.substr(6, 2);
  }
  set classEndDay(value) {
    value = typeof(value) === "string" ? value : String(value);
    if(value.length !== 8) {
      alert("년 단위 4자리, 월 단위 2자리, 일 단위 2자리 총 여덟자리로 구성된 문자열을 입력하세요.");
      return;
    }
    this._classEndDay = value.substr(0, 4) + "-" + value.substr(4, 2) + "-" + value.substr(6, 2);
  }
  set studentNumber(count) {
    count++;
    return this._studentNumber = `${this._classroom}-0${count}`
  }
};

const testData = new Student("최화연", "19940301", { 번호:"1", 이름:"정보기술개발"}, "305호", "01040242117", "hwayeon.choi11@gmail.com", "KDT", "20220719", "20230105", 0);
console.log(testData);