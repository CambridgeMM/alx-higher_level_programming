#!/usr/bin/python3
import random
number = random.randint(-10, 10)

'# 'Print the number
print(f'The number: {number}')

if number > 0:
    print('is positive')
elif number == 0:
    print('is zero')
else:
    print('is negative')
