// Aula totalment dedicada a funções nativas para manipulação de strings

// Atributo length
document.write('Eduardo Isidoro Gonçalves'.length)
document.write('<br>')

document.write('Caracter na posição do índice informado referente ao nome Eduardo Isidoro Gonçalves é :' + 'Eduardo Isidoro Gonçalves'.charAt(5))
document.write('<br>')

// Atributo indexOf
var nome = 'Eduardo Isidoro Gonçalves'
// A letra n ocorre na posição 18
document.write(nome.indexOf('n'))
document.write('<br>')

var nome = 'Eduardo Isidoro Gonçalves'
// No caso de informar a primeira ocorrência da letra a, seria na posição 3.
document.write(nome.indexOf('a'))
document.write('<br>')

var nome = 'Eduardo Isidoro Gonçalves'
// Caso é infomado um caracte que não existe na frase ou nome, é retornado um valor negativo.
document.write(nome.indexOf('p'))
document.write('<br>')

// Atributo replace
var nome = 'Eduardo Isidoro Gonçalves'
// Troca uma determinada cadeia de caracteres informado por outro informado no segundo parâmetro.
document.write(nome.replace('Isidoro', 'de Campos'))
document.write('<br>')

// Atributo substr
var nome = 'Eduardo Isidoro Gonçalves'
// Informa os caracteres com base na quantidade do que vc informou para receber pós a primeira posição informada
document.write(nome.substr(8, 7))
document.write('<br>')

// Atributo toLocaleLowerCase
var nome = 'Eduardo Isidoro Gonçalves'
// Deixa todos caracteres minúsculos
document.write(nome.toLocaleLowerCase())
document.write('<br>')

// Atributo toLocaleUpperCase
var nome = 'Eduardo Isidoro Gonçalves'
// Deixa todos caracteres maiúsculos
document.write(nome.toLocaleUpperCase())
document.write('<br>')

// Atributo toLocaleUpperCase
var nome = ' Eduardo Isidoro Gonçalves '
// Remove os espaços na extremidades
document.write('-' + nome.trim() + '-')
document.write('<br>')