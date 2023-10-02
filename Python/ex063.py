number_fibonacci_term = int(input('Me diaga até que termo você quer a sequência de Fibonacci: '))

couple_a1 = 1
couple_a0 = 0
couple_a = 3
an_term = 3

if number_fibonacci_term > 2:
    print('{} → {}'.format(couple_a0, couple_a1), end='')

    while an_term <= number_fibonacci_term:
        couple_a3 = couple_a0 + couple_a1
        an_term += 1
        couple_a0 = couple_a1
        couple_a1 = couple_a3
        print(' → {}'.format(couple_a3), end='')

elif number_fibonacci_term == 1:
    print('{}'.format(couple_a0), end='')

elif number_fibonacci_term == 2:
    print('{} → {}'.format(couple_a0, couple_a1), end='')
    
print(' → FIM.')