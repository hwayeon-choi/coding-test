payment = 100000
total = 34830 

def change(payment, total):
  return payment - total

Money = {
  'fiveMillion' : 50000,
  'oneMillion' : 10000,
  'fiveHundred' : 500,
  'oneHundred': 100,
  'fifty' : 50,
  'ten' : 10
}

MoneyCount = {
  'fiveMillion' : 0,
  'oneMillion' : 0,
  'fiveHundred' : 0,
  'oneHundred' : 0,
  'fifty' : 0,
  'ten' : 0
}

def change_money(change, Money, MoneyCount):
  while(change > 0):

    for k, v in Money.items():
      if(change > v):
        MoneyCount[k] = int(change / v)
        change = change % v
      else:
        continue
      
    print(MoneyCount)   

change_money(change(payment, total), Money, MoneyCount)