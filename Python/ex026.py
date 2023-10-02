text = str(input('Digite seu texto a qui: ')).strip()
strpos = text.upper().count('A')
print('A letra A aparece {} vezes no texto.'.format(strpos))
txtlen = len(text)-text.count(' ')
txtfirsta = (txtlen-(text.find('a')+1))
txtlasta = (text.rfind('a'))
jaw = txtlen - txtfirsta
print('A letra A aparece na posição {} pela primeira vez.'.format(jaw))
print('A letra A aparece na posição {} por último.'.format(txtlasta))