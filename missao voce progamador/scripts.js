


let chave = "6cbc1011a8ac51225a072fce0e785926"

function colocaNaTela(dados){
console.log(dados)
document.querySelector(".cidade").innerHTML = "tempo em " + dados.name
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°c"
document.querySelector(".descricao").innerHTML = dados.weather[0].description
document.querySelector(".clima").innerHTML = "umidade " + dados.main.humidity + "%"
document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"



}
 
async function buscarCidade(cidade){
   let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
   cidade + 
   "&appid=" + 
   chave + "&lang=pt_br" + 
   "&units=metric")
      .then(resposta => resposta.json())
      colocaNaTela(dados)
}


function cliqueiNoBotao(){
   let cidade = document.querySelector(".input-cidade").value


   buscarCidade(cidade)
}
