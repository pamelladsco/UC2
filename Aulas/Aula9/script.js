const nome = " Pamella dos Santos Carraro de Oliveira "
const idade = 27

/*//Aspas duplas
const frase1 = "O meu nome é " + nome + " e minha idade é " + idade + " anos "
console.log(frase1)
console.log(typeof frase1)


//Aspas simples
const frase2 = 'O meu nome é ' + nome + ' e minha idade é ' + idade + ' anos '
console.log(frase2);
console.log(typeof frase2)

//Template
const frase3 = ` O meu nome é ${nome} e minha idade é ${idade}`
console.log(frase3);
console.log(typeof frase3) */

/*//Exercício Template 
const nome2 = prompt("Digite o seu nome:")
const cor = prompt("Digite sua cor favorita")
const frase4 = ` O seu nome é ${nome2} e sua cor favorita é ${cor} `
console.log(frase4)

//Exercício Concatenação 
const nome1 = prompt("Digite seu nome:")
const cor2 = prompt("Digite sua cor favorita:")
const frase5 = " O seu nome é " + nome1 + " e sua cor favorita é " + cor2
console.log(frase5)*/

//Propriedade Length
console.log(nome.length)


const fraseInicial = "OieEEeEE"
//Método toLowerCase()
const fraseMinuscula = fraseInicial.toLowerCase()
console.log(fraseInicial, fraseMinuscula)

//Método toUpperCase
const fraseMaiuscula = fraseInicial.toUpperCase()
console.log(fraseInicial, fraseMaiuscula)

//Método Trim
console.log(nome.trim())

//Método Includes
const fraseCenoura = "Hoje comi cenoura, adoro cenoura"
console.log(fraseCenoura.includes("cenoura"))

//Método raplaceAll
const novaFrase = fraseCenoura.replaceAll("cenoura", "batata")
console.log(novaFrase)

//Exercício 
const fraseUsuario = prompt("Digite uma frase:")
console.log(fraseUsuario.toUpperCase())
const novaFraseUsuario = fraseUsuario.replaceAll("o", "i")
console.log(novaFraseUsuario)
console.log("A frase tem", fraseUsuario.length , "caracteres")

//Exercício Arrays
const listaDeCompras = ["Abacate", "Banana", "Tomate"]

console.log(listaDeCompras[1])