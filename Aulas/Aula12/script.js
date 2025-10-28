/*let i = 0 //começo

while(i<=9) { // Enquanto a condição, que no caso é o i for <=9 
  console.log("Loop:", i) // Executa console
  i++ // Incrementa o iterador 
}

console.log("Chegou ao final do código")*/


/*let estomago = 0 // começo 

while(estomago < 100){
    console.log("Quero comer mais coxinhas", estomago) 
    estomago = estomago + 10 // podemos simplificar colocando "estomago += 10", que é a mesma coisa. 
}
*/


/*//while 
let numero // variável que irá armazenar os números do usuário 
let soma // variável que iremos utilizar para a soma 
while(numero!==0){ // enquanto os números forem diferentes de zero, continuar executando a ação
    numero = Number(prompt("Digite um número")) // ação 
    soma += numero // soma "recebe" soma + números(que foram inseridos no prompt pelo usuário)
}
console.log(`O resultado é: ${soma}`)*/ //resultado 


//do 
/*let C = 1
do{
    console.log("O valor de C é:", C)
    C++
}while(C <= 6)

// For 
for(let i = 0 ; i<=9 ; i++){
    console.log("O valor de i é:", i)
}*/

/*let meuArray = [10, 4, 7, 8, 200, 77]
for(let i=0 ; i<6 ; i++){
    console.log(meuArray[i])
}*/


let array = [11, 15, 18, 14, 12, 13]
let maiorNumero = 0 
for(let i=0 ; i<6; i++){// i++ = i + 1
    if(array[i] > maiorNumero){
        maiorNumero = array[i]
    }
} console.log("O maior número é:", maiorNumero)


 // Exercício 2
 
 let meuArray = [11, 15, 18, 14, 12, 13]
 let somaPares = 0
 for(let i = 0 ; i < 5 ; i++)
 if(meuArray[i] % 2 === 0){
    somaPares += meuArray[i]
 }
console.log("A soma dos números pares é", somaPares)