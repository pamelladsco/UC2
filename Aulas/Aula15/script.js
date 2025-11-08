// Declração da função
/*function imprimirOlaMundo() {
    console.log("Olá Mundo")
} 

// Invocação da função 
imprimirOlaMundo()

// Exercício 1
function turmaTds(){
    console.log("Bem vinda turma 25-2N!")
}
turmaTds()

// Exercício 2
function imprimirValor(){
    let resultado = 2 + 4
    console.log("A soma é:", resultado)
}
imprimirValor()

// Exercício 3 
function dobroNumero(){
    let dobro = 5 * 2
    console.log("O dobro de 5 é:", dobro)
}
dobroNumero()

// Exercício 4 
function mensagem(nome){
    console.log("Olá", nome)
}
mensagem("Pamella") 
mensagem("Marcelo") 
mensagem("Maurício")

// Exercício 5
function soma1(num1, num2){
    let somar = num1 + num2
    console.log(somar)
}
somar(2,3)


// Escopo 
// Escopo Global
const a = 1
function imprimeVariavel(){
    const b = 2
    console.log("A variável a:", a)
    console.log("A variável b:", b)
}
//Invoca função 
imprimeVariavel()

//Aqui não será impressa a variável b pois ela foi criada no escopo LOCAL. 
console.log("A variável a:", a)
console.log("A variável b:", b)

// Retorno 
function calculaArea(altura, largura){
    let area = altura * largura
    return area 
}
let resultadoArea = calculaArea(2, 3)
console.log(resultadoArea)
console.log(calculaArea(2,3))

// Exercício Retorno 1
function imprimirNumeros(numero1, numero2){
let somaNumeros = numero1 + numero2
return somaNumeros
}
let resultadoNumeros = imprimirNumeros(5, 7)
console.log(resultadoNumeros)

// Exercício Retorno 2
let arrayNumeros = [7, 77, 777, 7777]
function divisaoArray(array){
    let novoArray = []
    novoArray.push(array[0] / 2)
    novoArray.push(array[array.length- 1] / 2)
    return novoArray
}
console.log(divisaoArray(arrayNumeros)) 

// Exercício Expressão de Função 
const imprimirNumeros = function(numero1, numero2){
    let somaNumeros = numero1 + numero2
    return somaNumeros
    }
    let resultadoNumeros = imprimirNumeros(5, 7)
    console.log(resultadoNumeros) 

// Exercício Arrow Function
const oDobro = () => {
    let resultadoDobro = 5 * 2
    console.log("O dobro será:", resultadoDobro)
}
oDobro() 

// Exercício Monstro
let determinaMonstro = (temPeleGelada, transformaComLuaCheia, brilhaAoSol, temSedeDeSangue) => {
    if(temPeleGelada && temSedeDeSangue && brilhaAoSol){
        return "Você é um vampiro"
    }
    else if (transformaComLuaCheia) {
    return "Você é um lobisomen"
    }
    else{
    return "Você é um humano"
    } 
}
let temPeleGelada = true
let transformaComLuaCheia = false
let brilhaAoSol = true
let temSedeDeSangue = true
console.log(determinaMonstro(temPeleGelada, transformaComLuaCheia, brilhaAoSol, temSedeDeSangue))

// Exercício de fixação 1
function minhaFuncao(variavel) {
    return variavel * 5
}
console.log(minhaFuncao(2)) // Aqui o número 2 é o parâmetro "variável", e o return será o resultado da multiplicação 2*5, que é 10
console.log(minhaFuncao(10)) // Aqui o número 10 é o parâmetro "variável", e o return será o resultado da multiplicação 10*5, que é 50 
// Se tirássemos o console.log, não iria exibir o resultado. 

// Exercício de fixação 2
let textoDoUsuario = prompt("Insira um texto") // Entrada da informação do usuário
    const outraFuncao = function(texto) { // Função com parâmetro "texto"
        return texto.toLowerCase().includes("cenoura") // retornar o parâmetro todo em minísculo e verificar se a palavra "cenoura" está no prompt que o usuário digitou. 
    }
    const resposta = outraFuncao(textoDoUsuario) // variável para receber o novo texto após utilizarmos tolowerCase e Includes. 
    console.log(resposta) // Aqui irá imprimir o texto do prompt com as funções que utilizamos para o texto.
    // Eu gosto de cenoura será true pois possui a palavra "cenoura".
    // CENOURA é bom pra vista será true, pois utilizamos toLowerCase
    // Cenouras crescem na terra será true, pois o includes reconhece a palavra mesmo estando no plural. 

    // Exercício de fixação 3 
    function mensagem(){
        return console.log("Eu sou Pamella, tenho 27 anos, moro em Esteio e sou estudante")    
    }
    mensagem()*/

    // Exercício de fixação 4 
    // A.
    function numeros(num1, num2){
        const soma = num1 + num2
        return console.log(soma) 
    }
    numeros(7,7)

