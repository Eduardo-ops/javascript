// Sintaxe if
if (condicao) {
    // Toda lógica a ser executada
}

// Sintaxe if else
if (condicao) {
    // Toda lógica a ser executada
} else {
    // Toda lógica a ser executada
}

// Três ou mais condições existentes
if (condicao) {
    // Toda lógica a ser executada
} else if (condicao2) {
    // Toda lógica a ser executada
} else {
    // Toda lógica a ser executada
}

// Variável do tipo string com valor atribuído
semafaro = "verde"

// Condição de igualdade, se o valor de variável for igual a valor sugerido na condição
if (semafaro == "verde") {
    mesagem = "Pode passar"
}

semafaro = "vermelho"

if (semafaro == "verde") {
    mensagem = "Pode passar"
} else {
    mensagem = "Pare"
}

semafaro = amarelo

if (semafaro == "verde") {
    mensagem = "Pode passar"
} else if (mensagem == "Vermelho") {
    mensagem = "Pare"
} else {
    mensagem = "Atenção"
}

username = "usuario123"
password = "123456"

if (username == "usuario123" && password == "123456") {
    console.log('Usuário autenticado')
} else {
    console.log('Usuário e/ou senha incorretos')
}


cpf = "123.456.978.02"
// Verifica se o tamanho da string(caracteres) é de acordo com o número informado.
if (cpf.length == 14) {
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}

idade = '16'
// Redirecionamento de página correta conforme idade do usuário
if (idade >= 18) {
    windown.location.href = "homePrincipal.html"
} else if (idade < 18 && idada >= 15) {
    windown.location.href = "homeJovem.html"
} else {
    window.location.href = "homeInfantil.html"
}

var peso = 26.3;
var status = "";
// Verificando a faixa de peso do paciente
if (peso < 20.7) {
    status = "Abaixo do peso";
} else if (peso >= 20.7 && peso < 26.4) {
    status = "Peso normal";
} else if (peso >= 26.4 && peso < 27.8) {
    status = "Pouco acima do peso";
} else if (peso >= 27.8 && peso < 31.1) {
    status = "Acima do peso";
} else {
    status = "Obeso";
}

