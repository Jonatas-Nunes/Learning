n1 =  int(input('Digite o número : '))
cont = 0
for c in range(1, n1+1):
    n = n1 % c == 0
    if n == True:
        cont = cont + 1
if cont == 2:
    print('É primo!')
else:
    print('Não é primo!')