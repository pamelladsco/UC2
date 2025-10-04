/*const interruptor1 = true
const interruptor2 = true

const resultado = interruptor1 && interruptor2

const resultado = interruptor1 
console.log(resultado)


const a = true 
const b = false
const c = true 

const resultado1 = a && b
const resultado2 = b && c
const resultado3 = a && c
const resultado4 = a && b && c 
console.log(resultado1)//false
console.log(resultado2)//false
console.log(resultado3)//true
console.log(resultado4)//false 

const resultado1 = a || b
const resultado2 = b || c
const resultado3 = a || c
const resultado4 = a || b || c
console.log(resultado1, resultado2, resultado3, resultado4) 

let nome = prompt("Qual o seu nome?")
let anoNascimento = prompt("Qual o seu ano de nascimento?")
let anoAtual = prompt("O nosso ano atual é:")

console.log("Seu nome é:", nome)
console.log("Sua idade é:", anoAtual-anoNascimento)
console.log("É maior de idade:", anoAtual-anoNascimento>=18)
console.log("Em 2050 você terá:",(anoAtual-anoNascimento) + (2050 - anoAtual), "anos") 

//Execício de fixação 
const boll1 = true 
const boll2 = false 
const boll3 = !boll2 

let resultado = boll1 && boll2 // aqui é o resultado "a"
console.log("a.", resultado) // aqui irá imprimir true 

resultado = bool1 && bool2 && bool3 // aqui queremos saber o resultado "b"
console.log("b.", resultado) // aqui irá imprimir false 

resultado = !resultado && (bool1 || bool2) // aqui queremos saber o resultado "c"
console.log("c.", resultado) // aqui irá imprimir true 

console.log("d. ", typeof resultado) // aqui irá imprimir o tipo da variável resultado

let primeiroNumero = prompt("Digite um número")
let segundoNumero = prompt("Digite outronúmero")

const soma = primeiroNumero + segundoNumero
console.log(soma)// para aparecer o valor da soma precisamos transformar as variáveis em Number */


/*let idade = prompt("Qual a sua idade?")
let idadeAmigo = prompt("Qual o nome da sua melhor amiga?")
let resultado = 22 == 25
console.log("Sua idade é maior ou menor do que da sua melhor amiga?", resultado)
console.log("A diferença de idade é:", idadeAmigo-idade)*/


/*let numero1 = prompt("Insira um número par:")
let restoDaDivisao = numero1 % 2
console.log("Esse é o resto da divisão:", restoDaDivisao)
// se o usuário inserir um número impar, o resultado será maior que 0. Sendo par, sempre será 0.*/

/*let idadeAnos = prompt("Qual sua idade em anos?")
console.log(idadeAnos * 12)//idade meses
console.log(idadeAnos * 365)//idade dias
console.log(idadeAnos * 24)//idade horas
//utilizado operadores aritiméticos para realizar os cálculos, lembrar sempre de que para números usaremos funções.*/


/*let primeiroNumero = prompt("Digite o primeiro número:")
let segundoNumero = prompt("Digite o segundo número:")
let primeiroNumeroN = Number(primeiroNumero)
let segundoNumeroN = Number(segundoNumero)
let restoDaDivisao = primeiroNumeroN % segundoNumeroN
let restoDaDivisao1 = segundoNumeroN % primeiroNumeroN
console.log(primeiroNumeroN, segundoNumeroN)

console.log("O primeiro número é maior que o segundo?", primeiroNumeroN>segundoNumeroN)
console.log("O primeiro número é igual ao segundo?", primeiroNumero==segundoNumero)
console.log("O primeiro número é divisível pelo segundo número?", restoDaDivisao>=0)
console.log("O segundo número é divísivel pelo primeiro número?", restoDaDivisao1>=0)*/



// Desafio 
/*let fahrenheit = 77
let fahrenheitKelvin = (fahrenheit - 32) * (5/9) + 273.15
console.log("77ºF em Kelvin é:", fahrenheitKelvin)

let celsius = 80
let celsiusFahrenheit = (celsius)*(9/2)+32
console.log("80º em Fahrenheit é:", celsiusFahrenheit) 

let grausCelsius = 30
let celsiusFahrenheit1 = (grausCelsius)*(9/2)+32
let celsiusKelvin = (grausCelsius - 32) * (5/9) 
console.log("30C em Fahrenheit é:", celsiusFahrenheit)
console.log("30C em Kelvin é:", celsiusKelvin)*/


let grausCelsius = prompt("Insira a temperatura em Celsius:")
let grausCelsius1 = Number(grausCelsius)
let celsiusFahrenheit1 = (grausCelsius1)*(9/2)+32
let celsiusKelvin = (grausCelsius1 - 32) * (5/9) 
console.log("30C em Fahrenheit é:", celsiusFahrenheit1)
console.log("30C em Kelvin é:", celsiusKelvin)









