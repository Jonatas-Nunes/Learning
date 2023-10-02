print('Vamos pintar a sua parede. Para isso, me responda a seguinte coisa.')
largura = float(input('Qual o lado da sua parade em metros? '))
altura = float(input('Qual a altura da sua parede em metros? '))
area = largura*altura
print('Sua pare tem a dimensão de {}mx{}m e sua área é de {} m²'.format(largura, altura, area))
print('Supondo que para cada 1 litro de tinda pintamos 2 m² de parede')
print('Para pintar essa parede você precisará de {}'.format(area/2))