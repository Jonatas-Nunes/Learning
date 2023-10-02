salário = float(input('Qual é o salário do funcionário? R$'))
taxa = 3/20
print('Um funcionário que ganhava R$ {}, com 15''%'' de aumento, passa a receber R$ {:.2f}'.format(salário, salário+(salário*taxa)))