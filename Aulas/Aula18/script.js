// Poderia também ter utilizado o método SPREAD (...), para copiar as propriedades, alterando somente os valores, ficaria assim:

/* function novaColega (pessoa){
    const colega = {
        ...pessoa,
        comidasFavoritas : ["camarão", "massa com camarão", "camarão empanado"],
        melhorAmigo: {
            nome: "Renan",
            idade: 17
        }
        }
 console.log("O nome da pessoa é", pessoa.nome, "e suas comidas favoritas são:", pessoa.comidasFavoritas, " e seu melhor amigo se chama", pessoa.melhorAmigo.nome, "e ele tem", pessoa.melhorAmigo.idade, "anos")
    }
colega()*/


/*function colega () {
    const pessoa = {
        nome: "Liege",
        idade: 17,
        música: "Piseiro", 
        comidasFavoritas: ["camarão", "massa com camarão", "camarão empanado"],
        melhorAmigo: {
            nome: "Renan",
            idade: 17
        }
    }
    console.log("O nome da pessoa é", pessoa.nome, "e suas comidas favoritas são:", pessoa.comidasFavoritas, " e seu melhor amigo se chama", pessoa.melhorAmigo.nome, "e ele tem", pessoa.melhorAmigo.idade, "anos")
}
colega()*/
        
// Exercício Personagem

/*let personagens = [
    {nome : "Naruto", idade: 17, estilo: "Ninjutsu", jutsus: ["Rasengan", "Clone"]}, 
    {nome: "Sasuke", idade: 17, estilo: "Ninjutsu", jutsus: ["Bola de fogo", "Chidori"]},
    {nome: "Obito", idade: 30, estilo: "Ninjutsu", jutsus: ["Bola", "Kamui"]}
    ]       
function adicionarPersonagem(perso){
personagens.push(perso)
console.log("O personagem", perso.nome, "foi adicionado")
}
const personagem ={
    nome : "Lee",
    idade : 17,
    estilo : "Taijutsu",
    Jutsus : ["Lótus", "Furacão"]

}
adicionarPersonagem(personagem)

function buscarPersonagem(nomeBuscado){
    function personagem(perso){
        return perso.nome.toLowerCase() === nomeBuscado.toLowerCase()
    }
const personagemEncontrado = personagens.find(personagem)
if (personagemEncontrado){
    return personagemEncontrado;
} else {
    return "Personagem com nome", nomeBuscado, "não encontrado"
}
}
const resultadoBusca1 = buscarPersonagem("Sasuke");
console.log("Resultado da busca(Sasuke):", resultadoBusca1)

// Exercícios de fixação
// Interpretação de código
const filme = {
    nome : "O alto da compadecida",
    ano : 2000,
    elenco : [
        "Matheus Natchtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish"
    ], 
    transmissoesHoje : [
        {canal: "Telecine", horario: "21h"},
        {canal: "Canal Brasil", horario: "19h"},
        {canal: "Globo", horario: "14h"}
    ]
}
console.log(filme.elenco[0]) // Irá aparecer o valor que está na posição 1 no objeto elenco, ou seja "Matheus..."
console.log(filme.elenco[filme.elenco.length-1]) // Irá aparecer o último elemento da array filme e propriedade elenco, ou seja "virginia.."
console.log(filme.transmissoesHoje[2]) // Irá aparecer o último elemento da array do objeto transmissões hoje, ou seja: "Canal globo, horário 14h"

// Exercício de fixação 2 
const cachorro = {
    nome: "Juca",
    idade: 3,
    raca: "SDR"
}
const gato = {...cachorro, nome: "Juba"}
const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
console.log(cachorro) // Vai ser impresso o objeto cachorro com seus respectivos valores.
console.log(gato) // Vai ser impresso o novo objeto copiado, com as informações que foram alteradas no objeto cachorro, que irá mudar o nome para Juba. 
console.log(tartaruga)// Vai ser impresso o novo objeto copiado, onde irá trocar as letras "A" do nome Juba. Ficará "Jubo"
// A sintaxe dos 3 pontos copia as informações do objeto que estamos mencionando, sem alterar os valores. (caso desejassemos alterar os valores, poderíamos fazer manualmente). 

// Exercício de fixação 3
function minhaFuncao(objeto, propriedade){
    return objeto[propriedade]
}
const pessoa = {
    nome: "Caio",
    idade: 23,
    backender: false
}
console.log(minhaFuncao(pessoa, "Backender")) // Irá dar undefined pois "Backender" não foi definido como uma propriedade. Para passar para o parâmetro propriedade, a sintaxe correta seria pessoa.backender
console.log(minhaFuncao(pessoa, "altura")) // Irá dar undefined pois "altura" não foi definida em nenhum lugar, nem mesmo como propriedade. 

// Exercício de fixação 4
const eu = {
nome: "Pamella",
apelidos: ["Pam", "Cleide", "Pampica"]
}
function euNovo(objeto){
    console.log("Eu sou", objeto.nome, ",", "mas pode me chamar de", objeto.apelidos[0],",",objeto.apelidos[1], "e", objeto.apelidos[2])
}
euNovo(eu)// A partir do momento que passamos o objeto para para o parâmetro, podemos utilizar o nome do parâmetro para se referir o objeto. Esse o objetivo principal da função nesse caso! 
//no console.log, como os apelidos são uma array, precisamos buscar o índice de cada um dos valores, para que sejam impressos os valores separadamente. Nesse caso poderíamos pegar só um dos apelidos se quisessemos. */


