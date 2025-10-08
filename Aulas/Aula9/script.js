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

/*//Propriedade Length
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

console.log(listaDeCompras[1])*/

//Exercício para ver o item referente ao Indice 
const listaDeRaças = ["Linguicinha", "Chow-Chow", "Fila", "SRD", "Sharpei"]
const numeroUsuário = Number(prompt("Insira um número de 0 a 4"))
console.log("A raça correspondente ao número é", listaDeRaças[numeroUsuário])// SDR vai retornar 3 pois o indíce incia em 0.

//Método Includes
const listaDeSeries = ["A batalha dos 100", "Bom dia Verônica", "How I Met Your Mother", "Irmão do Jorel"]
console.log(listaDeSeries.includes("Irmão do Jorel"), listaDeSeries.includes("Vikings"))

//Método push
const numeros = [1, 2, 3]
numeros.push(4)
console.log(numeros)

numeros.push(5, 6, 7)
console.log(numeros)


//Método pop
const meusPeixes= ["Palhaço", "Mandarim", "Esturjão"]
meusPeixes.pop()
console.log(meusPeixes)
meusPeixes.pop()

//Método Splice
const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
letras.splice(1,1)
console.log(letras)

//Exercício 

const listaNumerosArrey = [1, 2, 3, 4, 5, 6]
console.log(listaNumerosArrey.length)
listaNumerosArrey.push(7)
listaNumerosArrey.splice(3,2)//splice é o número do índice e quantos numeros vc quer tirar depois 
console.log(listaNumerosArrey)
console.log(listaNumerosArrey.length)

//Exercícios de fixação
let array 
console.log('a.', array)// Irá imprimir que a array é indefinida

array = null
console.log('b.', array)// Irá imprimir que a array não tem valor

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c.', array.length)//Aqui adicionamos valor na variável e irá imprimir o tamanho da array (11)

let i = 0
console.log('d.', array[i])//Aqui irá imprimir a array e o número correspondente indíce i, que é 3.

array[i+1] = 19
console.log('e.', array)//Irá imprimir a nova array, substituindo o 4 por 19.

const valor = array[i+6]
console.log('f.', valor)//Vai imprimir 9 

