
budget = 100000
goal = 64800

fixedItems = {
    "출퇴근비용": {
        "카카오톡자전거": "1500원",
        "택시": "3500원",
    },
    "커피": {
        "엔시나": "4500원",
        "카누": "200원",
    },
    "고양이간식": {
        "닭고기": "400원",
        "락토프리우유": "800원",
    }
}
fixedHistory = {
    "출퇴근비용": {
        "카카오톡자전거": "19회",
        "택시": "3회",
    },
    "커피": {
        "엔시나": "6잔",
        "카누": "15잔",
    },
    "고양이간식": {
        "닭고기": "30개",
        "락토프리우유": "2개",
    }
}

# 절약할 금액 구하는 함수
def save(budget, goal):
    
    prices = list(fixedItems.values())
    quantity = list(fixedHistory.values())
    
    # 객체데이터 조회하여 value값만 배열로 저장하는 함수
    def getValue(list):
        temp = []
        for i in list:
            price = list(list[i].values())
            temp.append(price)
        result = temp.flatten()
        return toNumber(result)
    
    # 문자열 배열을 숫자로 바꾸는 함수
    def toNumber(list):
        result = []
        for elem in list:
            result.append(int(elem))

        return result
    
    # 지출 총액 구하는 함수
    def total():
        sum = 0
        list1 = getValue(prices)
        list2 = getValue(quantity)       
        for i in list1:
            sum = sum + list1[i] * list2[i]
            
        return sum

    return total() - (budget - goal)


print(save(budget, goal))

# 중요도 순으로 save가 0이 될 때까지 뺀다 (출퇴근 < 커피)
# 위에서 뺀 항목과 수량 체크하기 + 피로도, 미움지수 카운트

def commingsoon(dic):
    return ("")