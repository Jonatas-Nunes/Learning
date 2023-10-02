n1 = float(input('Primeira Nota: '))
n2 = float(input('Segunda Nota: '))
n3 = float(input('Terceira Nota: '))
m = (n1 + n2 + n3) / 3

if m < 5:
    print('Sua nota foi {:.1f}, abaixo da média.'.format(m))
    print('Precisará fazer a recuperação:')
    rec = float(input('Insira a nota da sua recuperação: '))
    final = (m + rec) / 2 
    if final < 5:
        print('Sua nota final foi {:.1f}. Abaixo da Média. Você está REPROVADO.'.format(final))
    else:
        print('Sua nota final foi {:.1f}. Acima da Média. Você está APROVADO'.format(final))
elif m >= 5:
    print('Sua nota média foi {:.1f}, acima de 5.'.format(m))
    print('Você está APROVADO')