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
let numero
let soma
while(numero!==0){
    numero = Number(prompt("Digite um número"))
    soma += numero
}
console.log(`O resultado é: ${soma}`)*/


//do 
/*let C = 1
do{
    console.log("O valor de C é:", C)
    C++
}while(C <= 6)


for(let i = 0 ; i<=9 ; i++){
    console.log("O valor de i é:", i)
}*/

/*let meuArray = [10, 4, 7, 8, 200, 77]
for(let i=0 ; i<6 ; i++){
    console.log(meuArray[i])
}*/


let array = [11, 15, 18, 14, 12, 13]
let maiorNumero = 0
for(let i=0 ; i<6; i++){
    if(array[i] > maiorNumero){
        maiorNumero = array[i]
    }
} console.log("O maior número é:", maiorNumero)
    
