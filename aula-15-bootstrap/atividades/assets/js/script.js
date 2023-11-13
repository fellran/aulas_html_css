 // addVentListen = adicionar um "ouvidor" de eventos
 const botao = document.querySelector("#botaotema")
 botao.addEventListener('click', modo)

function modo(){
    // document = html
    //querySelector selecionar o que voçe quiser
    let body = document.querySelector("body")
    let temaAtualClaro = document.querySelector("#temaAtualClaro")
    let temaAtualEscuro = document.querySelector("#temaAtualEscuro")
    

    if(botao.checked){
        //setAtribute(atributo, valor)
        body.setAttribute("data-bs-theme", "dark")
        temaAtualClaro.style.display="none"
        temaAtualEscuro.style.display="block"
    }else{
        body.setAttribute("data-bs-theme", "light")
        temaAtualClaro.style.display="block"
        temaAtualEscuro.style.display="none"
    }
}