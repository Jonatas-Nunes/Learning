firstterm = int(input('Primeiro termo: '))
ratio = int(input('Primeiro termo: '))
an = int(input('Digite quantos termos você quer: ')) 
term = 0
n = 1

if n > 0:
	while n < an + 1:
		term = firstterm + (n-1)*ratio
		n += 1
		print(' → {}'.format(term), end='')
	print(' → FIM')
else:
	print('O conjunto de termos dessa P.A é ∅')