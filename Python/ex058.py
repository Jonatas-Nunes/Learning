from random import randint
tent = 0
comp = randint(0, 10)

print('Acabei de pensar em um número de 0 a 10')
print('Será que você consegue adivinhar qual foi?')
n = int(input('Qual é o seu palpite? '))

while n != comp:
    if n  < comp:
        print('Mais... Tente mais uma vez.')
        n = int(input('Qual é o seu palpite? '))
        tent += 1
    elif n > comp:
        print('Menos... Tente mais uma vez.')
        n = int(input('Qual é o seu palpite? '))
        tent += 1
print('Acertou com {} tentativas'.format(tent))