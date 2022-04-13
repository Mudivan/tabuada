function tabuada() {
    //Definições de Variaiveis 
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    //Condicionais para validação de dados
    if (num.value.length == 0) {
        alert('Por Favor, digite um número')
    } else {
        //Variavel que converte a entrada do usuário em uma varibvel do tipo Number
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        //Laço para a geração da Tabuada
        while (c <= 10) {
            //Variavel que cria as options dentro do select
            let item = document.createElement('option')
            //Calculo e resultado das variaves com place Holder
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }













}
