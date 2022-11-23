"use strict";
//* 트럼프덱 객체타입으로 리턴하는 함수
//* 총 카드 갯수 길이 값 도출 
const shape_array = ["spade", "heart", "diamond", "club", "joker"]; // key
const shapeArray = {
    variation: 13,
    joker: 2,
}; // value
const createJoker = () => {
    let temp = [];
    for (let i = 0; i < shapeArray['joker']; i++) {
        temp.push(i + 1);
    }
    let obj = temp.reduce((acc, value, index) => {
        return Object.assign(Object.assign({}, acc), { [index + 1]: value });
    }, {});
    let card = {};
    card['RED'] = obj['1'];
    card['BLACK'] = obj['2'];
    return card;
};
const createVariation = () => {
    let temp = [];
    for (let i = 0; i < shapeArray['variation']; i++) {
        temp.push(i + 1);
    }
    let obj = temp.reduce((acc, value, index) => {
        if (index === 0) {
            return Object.assign(Object.assign({}, acc), { ['A']: value });
        }
        if (index === 10) {
            return Object.assign(Object.assign({}, acc), { ['J']: value });
        }
        if (index === 11) {
            return Object.assign(Object.assign({}, acc), { ['Q']: value });
        }
        if (index === 12) {
            return Object.assign(Object.assign({}, acc), { ['K']: value });
        }
        else {
            return Object.assign(Object.assign({}, acc), { [index + 1]: value });
        }
    }, {});
    return obj;
};
const trump_deck = (obj) => {
    let result = {};
    for (let i = 0; i < shape_array.length; i++) {
        if (shape_array[i] === "joker") {
            result[`${shape_array[i]}`] = createJoker();
        }
        else {
            result[`${shape_array[i]}`] = createVariation();
        }
    }
    return result;
};
console.log(trump_deck(shapeArray));
