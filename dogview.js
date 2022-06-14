

// btnDogview
const btnDogviewRosa = document.querySelector(".dogviewRosa")
const btnDogviewBranco = document.querySelector(".dogviewBranco")
const btnDogviewAmarelo = document.querySelector(".dogviewAmarelo")
const btnDogviewLilas = document.querySelector(".dogviewLilas")

const btnDogviewVerde = document.querySelector(".dogviewVerde")
const btnDogviewAzul = document.querySelector(".dogviewAzul")
const btnDogviewCinza = document.querySelector(".dogviewCinza")

// btnAcessorio
const btnOculosGatinhoRosa = document.querySelector(".oculosRosa")
const btnOculosGatinhoBranco = document.querySelector(".oculosBranco")
const btnOculosGatinhoAmarelo = document.querySelector(".oculosAmarelo")
const btnOculosGatinhoLilas = document.querySelector(".oculosLilas")

const btnOculosGatinhoVerde = document.querySelector(".oculosVerde")
const btnOculosGatinhoAzul = document.querySelector(".oculosAzul")
const btnOculosGatinhoCinza = document.querySelector(".oculosCinza")



let corDogView = "cor rosa"

btnDogviewRosa.addEventListener("click", () => {
    let cor = "/img/dogview/dogviewRosa.png"
    corDogView = "cor rosa"
    mudarCorDogview(cor)
})
btnDogviewBranco.addEventListener("click", () => {
    corDogView = "cor branca"
    let cor = "/img/dogview/dogviewBranco.png"
    mudarCorDogview(cor)
})
btnDogviewAmarelo.addEventListener("click", () => {
    corDogView = "cor amarela"
    let cor = "/img/dogview/dogviewAmarelo.png"
    mudarCorDogview(cor)
})
btnDogviewLilas.addEventListener("click", () => {
    corDogView = "cor lilás"
    let cor = "/img/dogview/dogviewLilas.png"
    mudarCorDogview(cor)
})

/*
btnDogviewVerde.addEventListener("click", () => {
    let cor = "/img/dogview/dogviewVerde.png"
    mudarCorDogview(cor)
})
btnDogviewAzul.addEventListener("click", () => {
    let cor = "/img/dogview/dogviewAzul.png"
    mudarCorDogview(cor)
})

btnDogviewCinza.addEventListener("click", () => {
    let cor = "/img/dogview/dogviewCinza.png"
    mudarCorDogview(cor)
})
*/

let corImage = ""
let oculosCor = "oculos na cor rosa"

btnOculosGatinhoRosa.addEventListener("click", () => {
    cor = "/img/oculos/oculosGatinhoRosa.png"
    oculosCor = "oculos na cor rosa"
    mudarCorOculos(cor)
})
btnOculosGatinhoBranco.addEventListener("click", () => {
    cor = "/img/oculos/oculosGatinhoBranco.png"
    mudarCorOculos(cor)
    oculosCor = "oculos na cor Branca"
})
btnOculosGatinhoAmarelo.addEventListener("click", () => {
    cor = "/img/oculos/oculosGatinhoAmarelo.png"
    oculosCor = "oculos na cor Amarela"
    mudarCorOculos(cor)
})
btnOculosGatinhoLilas.addEventListener("click", () => {
    cor = "/img/oculos/oculosGatinhoLilas.png"
    oculosCor = "oculos na cor Lilás"
    mudarCorOculos(cor)
})

/*
btnOculosGatinhoVerde.addEventListener("click", () => {
    let cor = "/img/oculos/oculosGatinhoVerde.png"
    mudarCorOculos(cor)
})
btnOculosGatinhoAzul.addEventListener("click", () => {
    let cor = "/img/oculos/oculosGatinhoAzul.png"
    mudarCorOculos(cor)
})

btnOculosGatinhoCinza.addEventListener("click", () => {
    let cor = "/img/oculos/oculosGatinhoCinza.png"
    mudarCorOculos(cor)
})
*/



function mudarCorDogview(cor){
    document.querySelector(".dogview").src = cor
}


function mudarCorOculos(cor){
    document.querySelector(".oculos").src = cor
}
function enviar(){

    window.location.href=`https://wa.me/5551997297524?text=Olá+gostaria+de+encomendar+um+DogView+na+${corDogView}+com+o+${oculosCor}%21`

}




