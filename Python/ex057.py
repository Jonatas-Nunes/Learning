sexo =  str(input('Informe seu sexo: [M/F] ')).upper()

while sexo != 'M' and sexo != 'F':
    print('Dados inválidos.')
    sexo = str(input('Informe seu sexo: [M/F] ')).upper()
print('Sexo {} registrado com sucesso.'.format(sexo))