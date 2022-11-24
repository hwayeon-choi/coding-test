kdt_invest = [2003, 1980, 1989, 1995, 2003, 2007, 2001, 2003, 1970, 1995]

def getValue(data):
  value = [0]
  for i in range(len(data) - 1):
    cal = (data[i + 1] - data[i]) / data[i];
    value.append(round(cal * 1000) / 100)

  return value;

print(getValue(kdt_invest))

# def bar_chart(data):
#   root = document.getElementById('root')
#   div = document.createElement('div')
#   ul = document.createElement('ul')
#   div.classList.add("graph")
#   ul.classList.add("ul")

#   for i in range(len(data)):
#     li = document.createElement('li')
#     li.textContent = data[i]
#     li.style.height = {data[i]} + 'px'
#     li.style.marginLeft = {i * 200} + 'px'
#     li.classList.add("li")
#     ul.appendChild(li)

#   div.appendChild(ul)
#   root.appendChild(div)

# bar_chart(kdt_invest)