/*
    3 escopos: global, função e bloco

    Global: É o escopo do script como um todo.
    Função: Corresponde somente a um conteúdo inserido dentro de uma função.
    Bloco: Somente em pequenos trechos de código, um bom exemplo seria o switch case.
*/

var serie = 'Breaking Bad'

// Escopo de bloco
if (true) {
    var serie2 = 'Game of Thrones'
    document.write(serie)
}

/* 
    A impressão do valor da variáve é realizada devido  próprio techo de código estar no escopo global, sendo assim,
    uma eleção do escopo de bloco(hoinsting) para o escopo global. 
*/
document.write(serie2)

document.write('<br/>')

// Escopo de função
function x() {
    var serie3 = 'Vikings'
    document.write(serie)

    // Também disponível dentro da função.
    document.write(serie2)
}

/* 
    A seguinte variável não terá seu valor impresso, devido as variáveis declarada dentro de funções,
    não ter a condição de ser acessada fora de funções. 
*/

document.write(serie3)

x()

document.write('<br/>')

// Global