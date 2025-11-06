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
oDobro() */

// Exercício Monstro
let determinaMonstro = (temPeleGelada, transformaComLuaCheia, brilhaAoSol, temSedeDeSangue) => {
    if(temPeleGelada && temSedeDeSangue || brilhaAoSol){
        return "Você é um vampiro"
    }
    else if (transformaComLuaCheia) {
    return "Você é um lobisomen"
    }
    else{
    return "Você é um humano"
    } 
}
console.log(determinaMonstro(true, false, false, true))
determinaMonstro()