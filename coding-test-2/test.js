// 3점슛(3점), 2점슛(2점), 자유투(1점)
// 자유투 한번 진행에 2번의 기회
// 총점 84점
// 3점슛 * 16개 
// 2점슛, 자유투로 얻은 점수 비율 50% 
// A : 2점슛 성공한 횟수
// B : 자유투 획득한 횟수
// C : 자유투 성공한 횟수
// D : 자유투 성공률

function KDT(three, two, free) {
  let threeScore = three => three * 3;
  let twoScore = two => two * 2;
  let freeScore = free => free * 1;
  return threeScore + twoScore + freeScore;
}

console.log(KDT(16, 9, 18));

function score_analysis(total) {
  // total = threeScore + twoScore + freeScore 


  console.log(`
  KDT팀이 이 날 성공한 2점슛은 총 A회 입니다.
  그리고 상대팀으로부터 자유투를 B번 획득해, 총 C개의 자유투를 성공하였습니다.
  이 날 KDT팀의 자유투 성공률은 D% 입니다.
  `);
}

score_analysis();