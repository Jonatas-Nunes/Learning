from random import randint
from time import sleep
comp = randint (1, 3)
op = int(input('Qual é a sua jogada? '))
item = ('PEDRA', 'PAPEL', 'TESOURA')

print('''Suas opções: 
[ 1 ] PEDRA 
[ 2 ] PAPEL
[ 3 ] TESOURA''')

print('JO')
sleep(1)
print('KEN')
sleep(1)
print('PO!!!')
print('-='*12)

if comp == op:
    print('Computador jogou {}.'.format(item[comp]))
    print('Você jogou {}.'.format(item[op]))
    print('-='*12)
    print('EMPATE!')
elif comp == 1:
    if op == 2:
        print('Computador jogou {}.'.format(item[comp]))
        print('Você jogou {}.'.format(item[op]))
        print('-='*12)
        print('Você GANHOU!')
    elif op == 3:
        print('Computador jogou {}.'.format(item[comp]))
        print('Você jogou {}.'.format(item[op]))
        print('-='*12)
        print('Computador GANHOU!')
elif comp == 2:
    if op == 1:
        print('Computador jogou {}.'.format(item[comp]))
        print('Você jogou {}.'.format(item[op]))
        print('-='*12)
        print('Computador GANHOU!')
    elif op == 3:
        print('Computador jogou {}.'.format(item[comp]))
        print('Você jogou {}.'.format(item[op]))
        print('-='*12)
        print('Você GANHOU!')
elif comp == 3:
    if op == 1:
        print('Computador jogou {}.'.format(item[comp]))
        print('Você jogou {}.'.format(item[op]))
        print('-='*12)
        print('Você GANHOU!')
    elif op == 2:
        print('Computador jogou {}.'.format(item[comp]))
        print('Você jogou {}.'.format(item[op]))
        print('-='*12)
        print('Computador GANHOU!')