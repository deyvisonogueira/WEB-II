function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes();
    //var hora = 9  //<- Testar qualquer horário
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `São ${hora} horas e ${min} minutos, bora acordar!`
        img.src = 'images/morning.gif'
        document.body.style.backgroundImage = "url('images/morningBG.png')"
    } else if (hora >=12 && hora < 18){
        msg.innerHTML = `São ${hora} horas e ${min} minutos, curtindo sua tarde?`
        img.src = 'images/afternoon.gif'
        document.body.style.backgroundImage = "url('images/afternoonBG.jpeg')"
    } else {
        msg.innerHTML = `São ${hora} horas e ${min} minutos, bora dormir?`
        img.src = 'images/night.gif'
        document.body.style.backgroundImage = "url('images/nightBG.png')"
    }
}

