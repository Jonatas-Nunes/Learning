print('-='*20)
print('         OS {} TERMOS DE UMA P.A         ')
print('-='*20)
a1 = int(input('O primeiro termo: '))
r = int(input('Razão: '))
an = int(input('Último termo: '))
for c in range(a1, an+1):
    print(a1 + (c-1)*r , end=' → ')
print('It ends')