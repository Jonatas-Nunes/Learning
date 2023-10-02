import random
al1 = str(input('Primeiro aluno: '))
al2 = str(input('Segundo aluno: '))
al3 = str(input('Terceiro aluno: '))
al4 = str(input('Quarto aluno: '))
alunos = al1, al2, al3, al4
sorteio = random.choices(alunos)
print('O aluno escolhido foi {}'.format(sorteio))