print('=-'*20)
print('''Esse é um programa que converte números inteiros de base decimais para
1º Converter para BINÁRIO
2º Converter para OCTAL
3º Converter para HEXADECIMAL''')
print('=-'*20)

intn = int(input('Informe o número inteiro: '))
base = str(input('Informe qual a base que deseja converter: '))
checkbasebin = 'BINARIO' in base.upper() or 'BINÁRIO' in base.upper()
checkbaseoct = 'OCTAL' in base.upper()
checkbasehex = 'HEXADECIMAL' in base.upper()
if checkbasebin == True:
    print('Binário {}'.format(checkbasebin))
    print('O número em base decimal {} convertido para base binária é {}.'.format(intn, bin(intn)[2:]))
elif checkbaseoct == True:
    print('Octal {}'.format(checkbaseoct))
    print('O número em base decimal {} convertido para base octal é {}.'.format(intn, oct(intn)[2:]))
elif checkbasehex == True:
    print('Hexadecimal {}'.format(checkbasehex))
    print('O número em base decimal {} convertido para base hexadecimal é {}'.format(intn, hex(intn)[2:]))
else:
    print('''Escreva uma das opções:
    1º Converter para BINÁRIO
    2º Converter para OCTAL
    3º Converter para HEXADECIMAL''')