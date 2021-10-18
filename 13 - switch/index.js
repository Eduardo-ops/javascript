autenticado = true

switch (autenticado) {
    case true:
        console.log('Usuário autenticado')
        break
    case false:
        console.log('Usuário não autenticado')
        break
}

cargo = 'gerente'
salario = 2000

switch (cargo) {
    case 'gerente':
        salario *= 15
        break
    case 'supervisor':
        salario *= 10
        break
    case 'coordenador':
        salario *= 5
        break
    default:
        salario *= 1
}

console.log("Salário do cargo informado:" + salario)