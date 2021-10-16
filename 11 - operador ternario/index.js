var nota = 9
var faltas = 1

var media = 7
var faltas_maximas = 15

/* 
    Forma mais simplificado de escrever operações condicionais
    Caso seja verdadeiro a condição abaixo, será retornado Aprovado, caso contrário, será
    retornado Reprovado 
*/
var resultado = (nota >= media && faltas <= faltas_maximas) ? 'Aprovado' : 'Reprovado'

console.log(resultado)

