from datetime import date
year = int(input('Ano de nascimento: '))
datetoday = date.today().year
calc = date.today().year - year
if calc == 18:
    print('Você tem {} anos.'.format(calc))
    print('Está na hora de se alistar.')
elif calc > 18:
    print('Você tem {} anos.'.format(calc))
    print('Você já deve ter se alistado...')
    print('Seu alistamento foi em {}'.format(year + 18))
else:
    print('Você tem {} anos.'.format(calc))
    print('Você deverá se alistar daqui a {} anos'.format(18 - calc))
    print('Seu alistament será em {}'.format(datetoday + (18-calc)))