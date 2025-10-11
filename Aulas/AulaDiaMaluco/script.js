
 /*notaAcessorio = prompt("Insira a nota de 1 a 10 para os acessórios:")
let notaCores = prompt("Insira a nota de 1 a 10 para as cores:")
let notaBrilho = prompt("Insira a nota de 1 a 10 para o brilho:")

let calculoPontuacao = (notaAcessorio*5) + (notaCores*3) + (notaBrilho*10)

let metaPontuacao = 80
let resultado = calculoPontuacao>=metaPontuacao
console.log("Você atingiu a pontuação?", resultado)

if (resultado === true) {console.log("Parabéns, você atingiu a meta")}
else console.log("Infelizmente você não atingiu a meta, faltou", metaPontuacao-calculoPontuacao, "pontos")*/


let descricaoLook = prompt("Descreva seu look:")
let corLook = prompt("Digite a cor principal do look:")
console.log(descricaoLook, corLook)

let temTamanhoAdequado = (descricaoLook.length)>=20

descricaoLook = descricaoLook.toLowerCase()
let palavrasChave = descricaoLook.indexOf("listras")
let palavraChave2 = descricaoLook.indexOf("brilho")

