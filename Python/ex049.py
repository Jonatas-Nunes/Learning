tab = int(input('Digite um número para ver sua tabuada: '))
rangetab = int(input('Digite até que número vai a sua tabuada: '))
for c in range(0, rangetab+1):
    print('{} X {} = {}'.format(tab, c, tab*c))