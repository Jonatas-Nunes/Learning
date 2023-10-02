dist = float(input('Qual a distância da sua viagem em Km? '))
price1 = dist*0.50
price2 = dist*0.45
if dist <= 200:
    print('Você está prestes a começar uma viagem de {}Km.'.format(dist))
    print('O preço da sua passagem será de R$ {}.'.format(price1))
else:
    print('Você está prestes a começar uma viagem de {}Km.'.format(dist))
    print('O preço da sua passagem será de R$ {}.'.format(price2))