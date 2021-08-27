// Declaração de variáveis

var a = 10
var b = 20
var c = null // Variável auxiliar na lógica

document.write('A:' + a + '<br>')
document.write('B:' + b + '<br>')
document.write('C:' + c + '<br>')

document.write('<hr/>')

// Lógica de inversão de valores.
c = a
a = b
b = c


// Apresentando valores invertidos
document.write('Valores invertidos de A e B <br>')
document.write('A:' + a + '<br>')
document.write('B:' + b + '<br>')