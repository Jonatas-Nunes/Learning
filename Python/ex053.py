frase = str(input('Digite a frase: ')).strip().upper()
palavras = frase.split()
n = ''.join(palavras)
inverso = n[::-1]
print(inverso)

if inverso == n:
    print('É um palíndromo.')
else:
    print('Náo é um palíndromo.')