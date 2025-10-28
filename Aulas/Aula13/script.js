let meuArray = [11, 15, 18, 14, 12, 13]
let somaPares = 0 // variável para armazenar a soma 
for(let i = 0 ; i <= 5 ; i++){ // Aqui estamos avaliando o índice(que começa em zero), por isso vamos contar até 5 
if(meuArray[i] % 2 === 0){ // Se os números do meu array(meuArray[i]) dentro da operação resto da divisão (%2) tiverem resultado igual(===) a zero, então eles são pares 
   somaPares += meuArray[i] // soma recebe soma + os números do meu array, ou seja 0 + soma dos números pares 
 } }
console.log("A soma dos números pares é", somaPares)


// For Of 

const numeros = [100, 7, 4, 8, 10, 3, 20, 777, 2000]

for(let numero of numeros){
    console.log("O número é:", numero)
}

//Exercícios for of

const palavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"]
let mensagem = ""
for(let palavra of palavras){
mensagem+=palavra + " "
} console.log(mensagem)

// Exercício 3 
let listaNumeros = [11, 15, 18, 14, 12, 13]
let somaPares1 = 0 // variável que foi atribuido valor zero para caracterizar como valor Number 
for(let listaNumero of listaNumeros){ // pegar o índice da lista
    if(listaNumero % 2 === 0){ // se o número tiver resto da divisão igual a 0 é par, então soma
        somaPares1+=listaNumero // operação que significa variável de soma recebe a soma dos números pares
    }
}
console.log("A soma dos números pares é", somaPares1)

// Exercício 4

let arrayPalavras = ["paralelepipido", "insconstitucionalicimamente", "arroz", "batata"]
let palavrasMaisLongas = " "
let maiorPalavra = ""
for(let arrayPalavra of arrayPalavras){
 if(arrayPalavra.length > maiorPalavra)
 palavrasMaisLongas = arrayPalavra
}
console.log("A maior palavra é", maiorPalavra)