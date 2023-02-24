function contar() {
    let ini = document.getElementById('txtI')
    let fim = document.getElementById('txtF')
    let passos = document.getElementById('txtP')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        res.innerHTML = 'Não pode contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if (p <=0 ){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1

        }

        if (i <f ){
            // Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{23E9}`
            }
        } else{
            // Contagem regressiva
            for(let c = i; c >=f; c -= p){
                res.innerHTML += `${c} \u{23E9}`
            }
        }
        res.innerHTML += `\u{2716}`
    }
}
    
