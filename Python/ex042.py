print('-=-'*20)
print('Desigualdade Triângular')
print('-=-'*20)
a = float(input('Primeiro lado do triângulo: '))
b = float(input('Segundo lado do triângulo: '))
c = float(input('Terceiro lado do triângulo: '))
if a<b+c and b<a+c and c<a+b:
    print('Os lados dos triângulos podem formar um triângulo')
    if a == b == c:
        print('O triângulo é um triângulo EQUILÁTERO')
    elif (a == b and b != c ) or (a == c and c!= b):
        print('O Trinângulo é um ISÓSCELES')
    elif a != b and b != c:
        print('O triângulo é ESCALENO')
else:
    print('Os lados dos triângulos não podem formar um triângulo')