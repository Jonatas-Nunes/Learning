import math
CO = float(input('Comprimento do cateto oposto: '))
CA = float(input('Comprimento do cateto adjacente: '))
HP = (CO**2 + CA**2)
print('A hipotenusa vai medir {}'.format(math.sqrt(HP)))