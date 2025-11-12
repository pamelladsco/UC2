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


function colega () {
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
colega()
        
// Exercício Personagem
//Finalizar  

const personagens = [
    {nome : "Sam", idade: 14, estilo: "Amorosa", jutsus: "Líder"}, 
    {nome: "Clover", idade: 14, estilo: "Fashionista", jutsus: "Lealdade"},
    {nome: "Alex", idade: 14, estilo: "Divertida", jutsus: "Esportiva"}
    ]       

