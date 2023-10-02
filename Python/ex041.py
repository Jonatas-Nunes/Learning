from datetime import date
ano = int(input('Ano de Nascimento: '))
print ('O atleta tem {} anos.'.format(date.today().year - ano))
atual = date.today().year
if  atual - ano <= 9:
    print('Classificação do atleta: MIRIM')
elif 9 < atual - ano <= 14:
    print('Classificação do atleta: INFANTIL')
elif 14 < atual - ano <= 19:
    print('Classificação do atleta:  JÚNIOR')
elif 19 < atual - ano <= 25:
    print('Classificação do atleta: SÊNIOR')
else:
    print('Classificação do atleta: MASTER')