number =  int(input('Digite um número para calcular o fatorial: '))
factorial  = 1

print('Calculando {}!'.format(number))

while number >= 1:
        print('{}'.format(number), end='')
        factorial *= number
        number -= 1
        if number >= 1:
            print(' x '.format(factorial), end='')
        else:
            print(' = {}'.format(factorial))