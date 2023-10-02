sal = float(input('Qual é o salário do funcionário? '))
tax1 = 0.15
tax2 = 0.1
sal1 = sal*tax1+sal
sal2 = sal*tax2+sal
if sal >= 1250:
    print('Quem ganhava R$ {} passa a ganhar R$ {} agora.'.format(sal, sal2))
else:
    print('Quem ganahava R$ {} passa a ganhar R$ {} agora.'.format(sal, sal1))