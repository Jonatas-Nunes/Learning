from time import sleep
t = 0
n1 = int(input('Digite um primeiro valor: '))
n2 = int(input('Digite um segundo valor: '))

while t != 5:
    
    print(' [ 1 ] Somar \n [ 2 ] Multiplicar \n [ 3 ] Maior \n [ 4 ] novos números \n [ 5 ] Sair do programa')
    t = int(input('Qual é a sua opção? '))
    
    if t == 1:
        print('A soma entre {} + {} é {}'.format(n1, n2, n1+n2))
    elif t == 2:
        print('A multiplicação entre {} x {} é {}.'.format(n1, n2, n1*n2))
    elif t == 3:
        if n1 < n2: 
            print('{} é maior que {}.'.format(n2, n1))
        elif n1 > n2:
            print('{} é maior que {}.'.format(n1, n2))
    elif t == 4:
        n1 = int(input('Digite um primeiro valor: '))   
        n2 = int(input('Digite um segundo valor: '))
        print(' [ 1 ] Somar \n [ 2 ] Multiplicar \n [ 3 ] Maior \n [ 4 ] novos números \n [ 5 ] Sair do programa')
        t = int(input('Qual é a sua opção? '))
print('Finalizando...')
sleep(2)
print('Fim.')