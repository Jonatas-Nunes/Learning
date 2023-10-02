ordem = int(input('Mensione até que ordem deseja somar: '))

for d in range(1, ordem + 1):
    print('Ordem {}ª: {}'.format(d, d*3))
print('Soma da sequência até a {}ª ordem é: {}'.format(d, ((3+d*3)*ordem)/2)) 