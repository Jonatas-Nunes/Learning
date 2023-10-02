sum_age = 0 
minor_age = 0
major_age_man = 0
name_old_man = ''
count_w = 0 

for c in range(1, 5):
   
    print('----- {}ª PESSOA -----'.format(c))
    name = str(input('NOME: ')).strip()
    age = int(input('Idade: '))
    gender = str(input('Sexo [M/F]: ')).strip()
    sum_age += age
    
    if c == 1 and gender in 'Mm':
        major_age_man = age
        name_old_man = name
    if gender in 'Mm' and age > major_age_man:
        major_age_man = age
        name_old_man = name
    if gender in 'Ff' and age > 20:
        count_w += 1

average_age = sum_age / 4
print('A média de idade do grupo é de {} anos.'.format(average_age))
print('O homem mais velho tem {} anos e se chama {}.'.format(major_age_man, name_old_man))
print('Ao todo são {} mulheres com menos de 20 anos.'.format(count_w))