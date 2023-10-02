n1 = float(input('Primeiro valor: '))
n2 = float(input('Segundo valor: '))
n3 = float(input('Terceiro valor: '))
if n1<n2<n3:
    print('O menor valor digitado foi {}'.format(n1))
    print('O maior valor digitado foi {}'.format(n3))
if n1<n3<n2:
    print('O menor valor digitado foi {}'.format(n1))
    print('O maior valor digitado foi {}'.format(n2))
if n2<n3<n1:
    print('O menor valor digitado foi {}'.format(n2))
    print('O maior valor digitado foi {}'.format(n1))
if n2<n1<n3:
    print('O menor valor digitado foi {}'.format(n2))
    print('O maior valor digitado foi {}'.format(n3))
if n3<n1<n2:
    print('O menor valor digitado foi {}'.format(n3))
    print('O maior valor digitado foi {}'.format(n2))
if n3<n2<n1:
    print('O menor valor digitado foi {}'.format(n3))
    print('O menor valor digitado foi {}'.format(n1))