// Função que nos permite arredondar um determinado número fracionário
var x = Math.ceil(10.347)
document.write(x)
document.write('<br>')

// Função que nos permite considerar apenas a parte inteira do número fracionário
var x = Math.floor(10.347)
document.write(x)
document.write('<br>')

// Arredonda, caso o número com casas decimais acima de 5, é redondado para o valor maior, caso contrário, valor menor.
var x = Math.round(10.347)
document.write(x) // = 10
document.write('<br>')

var x = Math.round(10.647)
document.write(x) // = 11
document.write('<br>')

// Metod que retorna qualquer número aleatório
var x = Math.random()
document.write(x)
document.write('<br>')