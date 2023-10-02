speed = float(input('Qual a velocidade do carro?'))
limit = 80
trafficticket = (speed - limit)*7
if speed > limit:
    print('MULTADO! Você excedeu o limite de permitido que é de {}Km/h \nandando a {}Km/h'.format(limit, speed))
    print('Você deve pagar uma multa de {}'.format(trafficticket))
    print('Tenha um bom dia! Dirija com segurança')
else:
    print('Tenha um bom dia! Dirija com segurança')