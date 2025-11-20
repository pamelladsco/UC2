
// Criada a variável em let (pois ao longo do código recebe alterações), armazenado o objeto link com as seguintes propriedades:
let link = {
    nome: "Link",
    hp: 100,
    rupees: 300,
    armaEquipada: "Master Sword",
    inventario: ["Bumerangue", "Bomba", "Escudo", "Hylian", "Arco"],
    historicoAcoes: []
}
console.log(link)

// Declaração através de const para guardar os valores fixos do dano das armas
const danoMasterSword = 70
const danoBomba = 50
const danoBumerangue = 30 


// Função atacar
function atacar(inimigoNome, multiplicarDano){
  const resultadoDano = danoMasterSword * multiplicarDano // criada variável para armazenar o resultado do dano 
link.historicoAcoes.push("Atacou " + inimigoNome + " causando " + resultadoDano + " de dano ") // Adicionando a mensagem ao histórico de ações
  console.log("Atacou", inimigoNome,  "causando", resultadoDano, "de dano") // imprimindo mensagem no console
}

atacar("Octorok", 1) // passando os parâmetros 
atacar("Boklobin", 1.5) // passando os parâmetros

// Função comprar 
function comprar(custo){
    if(link.rupees >= custo){
    link.rupees -= custo
        console.log(link.inventario.push("Poção de Vida"))
    }
    else{
    console.log("Link não tem Rupees suficientes!")
}
}
comprar(120)

// Função Curar, criada as variáveis tem poção e precisa curar para armazenar os valores que vou comparar utilizando o operador lógico &&
function curar(){
    const temPocao = link.inventario.includes("Poção de Vida")
    const precisaCurar = link.hp < 100
    if (temPocao && precisaCurar){
        const cura = 50
        const nvoHp = link.hp + cura
    }
    if (novoHp < 100){
       console.log(link.hp = 100)
    } else {
        console.log(link.hp = novoHp)
    }
    }
// Removendo a poção do inventário
    const removerPocao = link.inventario.pop("Poção de Vida")
    console.log(link.inventario) // imprimindo inventário atualizado 

// Registrar a ação no histórico
link.historicoAcoes.push("Usou poção de vida e recuperou o Hp em até" + link.hp)

// Verificando status do inventário
function verificarInventario(){
    for(i = 0; i < link.inventario.length ; i++){
    const item = link.inventario[i]
    console.log("Item encontrado no inventário:", link.inventario[1])

    if (item == "Bomba"){
        console.log("Cuidado! bomba encontrada!")
    } 
}
}
verificarInventario()

// Verificando o status das propriedades do objeto
function verificarStatus(){
    console.log("Nome:", link.nome)
    console.log("Status do hp:", link.hp)
    console.log("Status das Rupees:", link.rupees)
    console.log("Arma equipada:", link.armaEquipada)
    console.log("Status do histórico", link.historicoAcoes.join(" , "))
    console.log("Status do inventario:", link.inventario.join(" , "))
}
verificarStatus()

// Comparando com operador OR a condição para acesso 
function entrarCaverna(nivel){
  if(link.armaEquipada === "Master Sword" || nivel <= 5){
  console.log("Parabéns, acesso liberado!")
}
else{
    console.log("Infelizmente seu acesso foi negado")
}
}
entrarCaverna(8)
entrarCaverna(4)