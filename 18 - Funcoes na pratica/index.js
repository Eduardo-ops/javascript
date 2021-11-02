// Sintaxe de uma função
function calcularAreaTerreno(largura, comprimento) {
    // Lógica
    var area = largura * comprimento
    return area
}

var largura = prompt('Digite a largura do terreno:')
var comprimento = prompt('Digite a comprimento do terreno:')
var area = calcularAreaTerreno(largura, comprimento)

// Chamando a função
document.write('O terreno possui ' + area + 'm quadrados')