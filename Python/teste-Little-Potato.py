a1 = int(input('O primeiro termo: '))
r = int(input('Razão: '))
an = int(input('Até qual termo você quer a sua P.A : '))

print('-='*20)
print('				OS {} TERMOS DE UMA P.A				'.format(an))

for c in range(a1, an+1):
    print(a1 +(c-1)*r, end=' → ')
print('ACABOU')