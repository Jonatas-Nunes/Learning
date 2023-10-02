mass = float(input('Insira o seu peso: '))
high = float(input('Insira a sua altura: '))
imc = mass / high**2
print('O seu índice de Massa bodyral é {:.1f}.'.format(imc))
if imc < 18.5:
    print('MAGRESA')
elif 18.5 <= imc < 25:
    print('PESO NORMAL')
elif 25 <= imc < 30:
    print('SOBREPESO')
elif 30 <= imc < 40:
    print('OBESIDADE')
else:
    print('OBESIDADE GRAVE')