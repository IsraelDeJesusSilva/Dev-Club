/*Variáveis
    É um espaço de memória que você
    reserva e pode guardar
    o que quiser lá dentro.

    3 Jeitos de criar uma variável
    -var / jeito antigo - NAO USE
    -let -> Você pode alter o valor depois
    -const -> Constante

*/

/*
    Funções
        É um trecho de código que só é executado,
        quando é chamado.
const abacate = "Oi, sou um abacate"
const pera = "Oi, sou uma pera"
const numero1 = 100
const numero2 = 200

function soma(){
    const somatoria = numero1 + numero2
    console.log(somatoria)



}

console.log(pera)
soma()
soma()
soma()

*/
const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
function mostrarForm(){
    form.style.left = "50%"
    form.style.trasnform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    

}

function esconderForm(){
    form.style.left = "-300px"
    form.style.trasnform = "translateX(0%)"
    mascara.style.visibility = "hidden"



}

























