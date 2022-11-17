"use strict";
// 한시간 플레이로 얻은 leather : 45개, 총 8시간 플레이 => 주어진 값
// leather를 gold로 바꾸고 나머지는 copper로 바꾼다 
// 1leather = 2silver = 0.5gold = 16copper
// 8시간 플레이해서 얻은 gold, copper의 개수를 출력
function leather(count, hour) {
    return count * hour;
}
console.log(leather(45, 8));
function game_money(leather) {
    const chanMoney = { gold: true, silver: false, copper: true };
    for (let key in chanMoney) {
        if (key.value === true) {
            const chanSilver = leather;
            const chanGold = parseInt(leather / 2);
            const chanCopper = (leather % 2) * 16;
        }
    }
    console.log(`gold: ${chanGold}개, copper: ${chanCopper}개 획득하였습니다.`);
}
console.log(game_money(leather(45, 8)));
