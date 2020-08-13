function validaFormulario() {
    if (document.getElementById("nomeUser").value != "" && document.getElementById("emailUser").value != "" && document.getElementById("telUser").value != "") {
        alert("Prontinho, você receberá as novidades por email")
    } else {
        alert("Mana, falta preencher dados!")
    }
}

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

$('.carousel').carousel({
    interval: 2000
  })

  $('.collapse').collapse()

  
  