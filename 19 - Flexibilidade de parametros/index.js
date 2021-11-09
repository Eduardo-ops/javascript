function soma(n1, n2) {
    return n1 + n2
}

var n1 = parseInt(prompt('Digite o valor de n1:'))
var n2 = parseInt(prompt('Digite o valor de n2:'))

var area = soma(n1, n2)
document.write('Resultado da soma: ' + area + '\n')

// Todo parâmetro passado a mais do que o necessário na função, é desconsiderado.
var area = soma(n1, n2, 9, 15)
document.write('Resultado da soma: ' + area)

// Valor de n1 será interpretado, porém, o resutado final será note a number. 
var area = soma(n1)
document.write('Resultado da soma: ' + area)