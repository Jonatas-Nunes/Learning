price = float(input())
icprice = price *0.9
ccprice = price*0.95
moreccprice = price*1.2
print('-='*20)
print('Escolha uma das opções de pagamento:')
print('[1] A vista com 10''%'' de desconto.')
print('[2] A vista no cartão de crédito com 5''%'' de desconto')
print('[3] 2x no cartão de crédito sem juros')
print('[4] 3x ou mais no cartão de crédito: 20''%'' de juros')
print('-='*20)

choice = int(input())

if choice == 1:
     print('R$ {}.'.format(icprice))
elif choice == 2:
     print(' R$ {}.'.format(ccprice))
elif choice == 3:
     print('R$ {}.'.format(price))
elif choice == 4:
    print('R$ {}'.format(moreccprice))
else:
     print('Escolha uma das opções de 1 a 4.')