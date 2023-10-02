import random
al1 = str(input('Primeiro aluno: '))
al2 = str(input('Segundo aluno: '))
al3 = str(input('Terceiro aluno: '))
al4 = str(input('Terceiro aluno: '))
alunos = [al1, al2, al3, al4]
random.shuffle(alunos)
print('A ordem de apresentação é: {}'.format(alunos))
