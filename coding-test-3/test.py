def leather(count, hour):
    return count * hour
    
def game_money(leather):
  chanGold = leather / 2
  chanCopper = (leather % 2) * 16

  print('gold: ' + chanGold + '개, copper: ' + chanCopper + '개 획득하였습니다.')

game_money(leather(45, 8))