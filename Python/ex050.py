soma = 0
cont = 0
for c in range(1, 7):
    numb = int(input('Digite o número: '))
    if numb % 2 == 0:
        soma = soma + numb
        cont = cont + 1
        print('A soma dos números pares informados é: {}.'.format(soma))
print('Vocë informou {} números pares.'.format(cont))