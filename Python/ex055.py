maior_peso = 0
menor_peso = 0
for c in range(1, 6):
    peso = float(input('Peso da {}ª pessoa: '.format(c)))
    if c == 1:
        maior_peso = peso
        menor_peso = peso
    else:
        if peso > maior_peso:
            maior_peso = peso
        if peso < menor_peso:
            menor_peso = peso
print('O maior peso lido foi de {}Kg.'.format(maior_peso))
print('O menor peso lido foi de {}Kg.'.format(menor_peso))