print('Para um financiamento, o valor do juros aplicado ao mês é\n calculado com base na quantidade de parcelas escolhida')

value = float(input('Valor do imóvel: '))
entryvalue = float(input('Quantos você dará de entrada: '))
financing = int(input('Em quantos anos pretende-se financiar o imóvel? '))
wage = float(input('Informe o total de sua renda física mensal: '))
CETam = 0.0123
quota = 0.8
financingvalue = value-entryvalue
mount = financing*value*(1 + CETam)**12
installment = mount/(financing*12)
cashfinancinpart = installment*(3/10)

print('O valor do Imóvel de                         R$ {}.'.format(value))
print('Prazo Máximo                                 360 meses')
print('Prazo escolhido                              {} anos / {} meses'.format(financing, financing*12))
print('Cota Máxima do Financiamento                 {}%.'.format(quota*100) )
print('Valor de entrada                             R$ {}.'.format(entryvalue))
print('Valor de financiamento                       R$ {}.'.format(financingvalue))
print('Sitema de amortização SAC                    taxa de {}% ao mês'.format(CETam))

if financing < 30 and (financingvalue) < 0.8*value and wage > cashfinancinpart:
    print('Financiamento APROVADO.')
    print('Financiamento com parcelas mensais de        R$ {}.'.format(installment))
else:
    print('Crédito para o financiamento NÃO APROVADO.')