/*
    Crie uma aplicação capaz de identificar a faixa etária com base na idade informada pelo
    usuário. Considere os seguintes critérios:
    Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”.
    Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”.
    Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”.
    Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”.
    Fique à vontade para utilizar qualquer uma das funções aprendidas para exibição de dados
    para o usuário.
*/

var age = 60

if (age >= 0 && age < 15) {
    console.log('Criança')
} else if (age >= 15 && age < 30) {
    console.log('Jovem')
} else if (age >= 30 && age < 60) {
    console.log('Adulto')
} else {
    console.log('Idoso')
}