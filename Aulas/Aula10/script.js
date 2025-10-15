let condicao1 = true
let condicao2 = false
let condicao3 = false

if(condicao1){
    // como o valor da condição é true, o código do bloco é executado
    console.log("Entrei no if 1")
}

if(condicao2){
    console.log("Entrei no if 2")
}


let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))
let condicaonumeros = (numero1==numero2)
if(condicaonumeros){
console.log("Executou o if")    
console.log("Acertou, os números são iguais")
}// poderia ser feito também diretamente dentro do if, sem a variável "condicaonumeros"
else    
console.log("Executou o else")
console.log("Os números são diferentes")


if(condicao1){
    console.log("Entrou no if 1")
}
else if(condicao2){
    console.log("Entrou no eslse if 1")
}
else if(condicao3){
    console.log("Entrou no else if 2")
}
else
console.log("Entrou no else")


let num1 = Number(prompt("Digite o primeiro número:"))
let num2 = Number(prompt("Digite o segundo número:"))

let resultado1 = (num1===num2)
let resultado2 = (num1>num2)
let resultado3 = (num1<num2)


 if(resultado1){
    console.log("O primeiro número é igual ao segundo")
 }
 else if (resultado2){
    console.log("O primeiro número é maior que o segundo")
 }
 else (resultado3)
    console.log("O primeiro número é menor que o segundo")

//Exemplo Switch Case
    let paisOrigem = prompt("Digite o seu país de origem:")
    
    switch(paisOrigem){
        case 'Brasil':
            console.log("Nacionalidade brasileira")
            console.log("Entrou no case 1")
            break
        case 'EUA':
            console.log("Nacionalidade Americana")
            console.log("Entrou no case 2")
            break
        case 'India':
            console.log("Nacionalidade Indiano")
            console.log("Entrou no case 3")
            break
        default:
            console.log("Nacionalidade não encontrada")   
            break
}   


let pokemon = prompt("Digite o Pokemon escolhido:")
 
switch(pokemon){
    case "Bulbasaur":
        console.log("Planta e Veneno")
        break
    case "Charmander":
        console.log("Fogo")
        break
    case "Squirtle":        
         console.log("Água")
         break
     default:
        console.log("Pokemon não encontrado")

}
