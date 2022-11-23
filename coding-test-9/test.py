from functools import reduce

shape_array = ["spade", "heart", "diamond", "club", "joker"]
shapeArray = {
  "variation" : 13,
  "joker" : 2,
} 

def createJoker(dict):
  temp = [];

  for i in range (dict["joker"]):
    temp.append(i + 1);

  result = list(map(lambda value: {value : value}, temp))
  # print(result)

  card = {}
  card['RED'] = result[0][1]
  card['BLACK'] = result[1][2]

  return card


def createVariation(dict):
  temp = [];
  for i in range (dict["variation"]):
    temp.append(i + 1)
  
  result = list(map(lambda value: {value : value}, temp))
  # print(result)

  result[0]['A'] = result[0].pop(1)
  result[10]['J'] = result[10].pop(11)
  result[11]['J'] = result[11].pop(12)
  result[12]['J'] = result[12].pop(13)

  return result;


def trump_deck(dict):
  result = {}

  for i in range (len(shape_array)):

    if shape_array[i] == "joker":
      result[shape_array[i]] = createJoker(dict)
    else:
      result[shape_array[i]] = createVariation(dict)
    
  return result;

print(trump_deck(shapeArray))