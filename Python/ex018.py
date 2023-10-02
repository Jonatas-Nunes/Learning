from math import radians, sin, cos, tan
dg = float(input('Digite o ângulo que você deseja: '))
rad = radians(dg)
sin = sin(rad)
cos = cos(rad)
tg = tan(rad)
print('Seno de {}: {:.2f}'.format(dg, sin))
print('Cosseno de {}: {:.2f}'.format(dg, cos))
print('Tangente de {}: {:.2f}'.format(dg, tg))