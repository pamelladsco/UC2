const interruptor1 = true
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
console.log(soma)// para aparecer o valor da soma precisamos transformar as variáveis em Number












