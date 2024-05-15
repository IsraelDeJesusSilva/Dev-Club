let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarNaTela(dados) {
    console.log(dados)


    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icone").src = src="https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}




async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then(resposta => resposta.json())
    colocarNaTela(dados)
}

function cliqueiNoBotao(cidade) {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}
// Variável -> Pedacinho de memoria que guardamos o que quisermos//
// Um trecho de código, que só executa, quando eu chamo//
/*
Clica no Botão
    ->chama a função cliqueiNoBotao()
    ->Vai no input e pega o que está la dentro
    -> Passar a cidade para o servidor





*/
