// Instância de um objeto Date
var data = new Date()

// Recuperar a data do exato momento de execução de código
document.write(data.getDate())
document.write('<br>')

// Recuperar a o mês do exato momento de execução de código
document.write(data.getMonth() + 1)
document.write('<br>')

// Recuperar a o ano do exato momento de execução de código
document.write(data.getFullYear())
document.write('<br>')

// Transformando a informação de data em forma de string
document.write(data.toString())
document.write('<br>')

// Adicionar dias
document.write(data.toString(data.setDate(data.getDate() + 3)))
document.write('<br>')

// Remover dias
document.write(data.toString(data.setDate(data.getDate() - 10)))
document.write('<br>')

//Adicionar mes
data.setMonth(data.getMonth() + 1)
document.write(data.toString())
document.write('<br>')

//Removendo mes
data.setMonth(data.getMonth() - 4)
document.write(data.toString())
document.write('<br>')

//Adicionar ano
data.setFullYear(data.getFullYear() + 2)
document.write(data.toString())
document.write('<br>')

//Remover ano
data.setFullYear(data.getFullYear() - 4)
document.write(data.toString())
document.write('<br>')

/* 
    Criar obejto date com data e tempo específico
    Year, Month, Day, Hours, Minutes, Seconds, Milliseconds 
*/
var data2 = new Date(2017, 6, 14, 6, 27, 2, 1)
document.write(data2.toString())
document.write('<br>')

var data3 = new Date(2017, 7, 15, 7, 28, 3, 2)
document.write(data3.toString())
document.write('<br>')

// Encontrar a quantidade de milissegundos entre data 1 e data 2
document.write(data2.getTime() - data3.getTime())
document.write('<br>')

// Retornando o valor absoluto do valor:
var milissegundos_entre_datas = Math.abs(data2.getTime() - data3.getTime())
document.write(milissegundos_entre_datas)
document.write('<br>')

/* 
1 dia tem 24 horas.
Cada hora tem 60 minutos.
Cada minutos tem 60 segundos.
Cada segundo tem 1000 milissegundos
Quantos milissegundos existem em um dia ?
*/

var milissegundos_por_dia = 1 * 60 * 60 * 24 * 1000
document.write(milissegundos_por_dia)
document.write('<br>')

/* 
    Diferênça entre milissegundos entre datas cm base no valor fictício informado acima 
    e milissegundos por dia e retornando o valor de forma de número inteiro
 */
document.write(Math.ceil(milissegundos_entre_datas / milissegundos_por_dia))