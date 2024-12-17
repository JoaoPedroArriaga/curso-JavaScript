function contar(){
    let inicio = document.getElementById("inicio");
    let fim = document.getElementById("fim");
    let passo = document.getElementById("passo");

    let msg = document.getElementById("msg");

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("[ERRO] Faltam dados");
        msg.innerHTML = "Impossivel contar"; 
    }else{
        inicio = Number(inicio.value);
        fim = Number(fim.value);
        passo = Number(passo.value);

        if(passo <= 0){
            alert("[ERRO] Passo inválido, considerando 1");
            passo = 1;
        }

        msg.innerHTML = "Contando: <br>"
        if(inicio < fim){
            for(let index = inicio; index <= fim; index += passo){  // contagem crescente
                msg.innerHTML += `${index}\u{1F449}`;
            }
        }else{
            for(let index = inicio; index >= fim; index -= passo){ // contagem decrescente
                msg.innerHTML += `${index}\u{1F449}`;
            } 
        }
        
        msg.innerHTML += `\u{1F3C1}`;
    }
}