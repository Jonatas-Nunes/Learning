print('-=-'*20)
print('Desigualdade Triângular')
print('-=-'*20)
a = float(input('Primeiro lado do triângulo: '))
b = float(input('Segundo lado do triângulo: '))
c = float(input('Terceiro lado do triângulo: '))
if a<b+c and b<a+c and c<a+b:
    print('Os lados dos triângulos podem formar um triângulo')
else:
    print('Os lados dos triângulos não podem formar um triângulo')