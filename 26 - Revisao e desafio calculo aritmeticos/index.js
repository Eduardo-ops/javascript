/* 
    1) Ao executar o script a aplicação deve solicitar a entrada de um número, seguido de 
    uma operação de soma ou subtração e posteriormente seguido de um segundo 
    número. 
    2) A operação deve ser inserida pelo usuário de forma textual, ou seja, quando o sistema 
    solicita a operação o usuário deve informar o texto ‘soma’ ou ‘subtração’ (sem as 
    aspas). 
    3) Na sequência o sistema deve enviar os parâmetros para uma função efetuar o devido 
    cálculo. Exemplo: calculo(num1, num2, operacao). 
    4) A função deve executar o cálculo com base na operação informada pelo usuário e na 
    sequência deve retornar o valor encontrado. 
    5) Ao término o sistema deve fornecer a seguinte saída para o usuário: 
    “O resultado é: <resultado>.” 
    *A informação em vermelho é uma variável e deve ser substituída pelo seu respectivo valor 
    calculada dentro da aplicação.
*/

function arithmeticCalculation(num1, num2, operation) {
    if (operation == 'soma') {
        return num1 += num2
    } else if (operation == 'subtração') {
        return num1 -= num2
    }
}

var num1 = 0
var num2 = 0
var operation = ''
var result = 0

num1 = parseInt(prompt('Digite o primeiro número: '))
operation = prompt('Escreve o nome da operação que deseja realizar: ')
num2 = parseInt(prompt('Digite o segundo número: '))

result = arithmeticCalculation(num1, num2, operation)

document.write('O resultado é: ' + result)