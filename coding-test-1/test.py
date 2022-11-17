import math

def cone_volume(radius, height):
  value = (math.pi * ( radius*radius ) * height) / 3
  return value.toFixed()

print(cone_volume(10,10))