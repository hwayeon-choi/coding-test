inputData = [6, 2, 9, 3, 4, 0, 8, 5,  7, 1]
swap = 0

def sortArray(list):
  step = 0

  for i in range(len(list)):
    for j in range(len(list) - 1 - i):
      if(list[j] > list[j + 1]):
        swap = list[j]
        list[j] = list[j + 1]
        list[j + 1] = swap

    step = step + 1
    print(f'{step}회전: {list}')
    
    if(not swap):
      break

  return list

class ResultData: 
  def __init__(self, list):
    self.one = list[0]
    self.two = list[1]
    self.three = list[2]
    self.four = list[3]
    self.five = list[4]
    
  def __str__(self):
    return  str(self.__class__) + '\n'+ '\n'.join(('{} = {}'.format(item, self.__dict__[item]) for item in self.__dict__))

result = ResultData(sortArray(inputData))
print(result)