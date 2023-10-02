from datetime import date
ano = int(input('Que ano que analisar? '))
if ano == 0:
	ano = date.today().year
if ano % 4 == 0 and ano % 100 != 0 or ano % 400 == 0: # A expressão != significa Não pode ser diferente de zero 
	print('O ano {} é BISSEXTO'.format(ano))
else:
	print('O ano {} Não é BISSEXTO'.format(ano))