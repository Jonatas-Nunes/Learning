import random
print('Tente adivinhar o número que estou pensando.')
nmachine = random.randint(1, 10)
n = int(input('Qual número você acha que eu estou pensando? '))
if n == nmachine:
    print('Você acertou! Eu pensei no número {}'.format(nmachine))
else:
    print('Errou feio! Errou rude!! Eu pensei no número {}.'.format(nmachine))