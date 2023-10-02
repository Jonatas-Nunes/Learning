from datetime import date
tot_maior = 0
tot_menor = 0
for c in range(1, 8):
    y = int(input('Em que ano a {}ª pessoa nasceu? '.format(c)))
    ano_atual = date.today().year
    idade = ano_atual - y
    if idade >= 18:
        print('É maior de idade.')
        tot_maior += 1
    else:
        print('Essa pessoa é menor de idade.')
        tot_menor += 1
print('Ao todo tivemos {} pessoas maiores de idade.'.format(tot_maior))
print('Ao todo tivemos {} pessoas menores de idade.'.format(tot_menor))
