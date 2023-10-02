name = str(input('Digite seu nome completo: ')).strip()
namesplited = name.split()
lastname0 = len(namesplited)
lastname = lastname0-1
print('Seu primeiro nome é {}.'.format(namesplited[0]))
print('Seu último nome é {}.'.format(namesplited[lastname]))
