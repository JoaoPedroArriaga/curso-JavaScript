let num = [];
let valor = document.getElementById("num")
let lista = document.getElementById("lista")
let msg = document.getElementById("msg");

function adicionar(){
    valor = document.getElementById("num")
    lista = document.getElementById("lista")

    if(isAllFalse(valor, num) != 0){
        switch(isAllFalse(valor, num)){
            case 1:
                alert("[ERRO] Por favor digite um valor")
                break;
            case 2:
                alert("[ERRO] Por favor digite um valor menor que 100")
                break;
            case 3:
                alert("[ERRO] Por favor digite um valor maior que 0")
                break;
            case 4:
                alert("[ERRO] O valor já existe na lista")
                break;
            default:
                alert("ERRO INESPERADO!")
                break;
        }
    }else{
        msg.innerHTML = "";
        let item = document.createElement("option")
        num.push(Number(valor.value));
        item.text = `Valor ${valor.value} adicionado.`;
        item.value = `item${num.indexOf(valor.value)}`;
        lista.appendChild(item);
    }
}

function finalizar(){
    if(lista.length == 0){
        alert("Por favor, informe valores antes de finalizar")
    }else{
        msg = document.getElementById("msg");

        msg.innerHTML = `<p>Ao todo, temos ${num.length} números cadastrados</p>`;
        msg.innerHTML += `<p>O maior valor informado foi ${maxNum(num)}</p>`;
        msg.innerHTML += `<p>O menor valor informado foi ${minNum(num)}</p>`;
        msg.innerHTML += `<p>Somando todos os valores, temos ${soma(num)}</p>`;
        msg.innerHTML += `<p>A média dos valores digitados é ${media(num)}</p>`;
    }
}

function isAllFalse(valor, num){
    if(valueEmpty(valor) == true){
        return 1;
    }else if(valueOverflow(valor) == true){
        return 2;
    }else if(valueUnderflow(valor) == true){
        return 3;
    }else if(valueExists(valor, num) == true){
        return 4;
    }else{
        return 0;
    }
}

function valueEmpty(valor){
    if(valor.value.length == 0){
        return true;
    } else{
        return false;
    }
}

function valueOverflow(valor){
    if(valor.value > 100){
        return true;
    } else{
        return false;
    }
}

function valueUnderflow(valor){
    if(valor.value < 1){
        return true;
    } else{
        return false;
    }
}

function valueExists(valor, num){
    if(num.indexOf(Number(valor.value)) != -1){
        return true;
    }else{
        return false;
    }
}

function maxNum(num){
    let max = num[0];
    for(let pos in num){
        if(max < num[pos]){
            max = num[pos];
        }
    }

    return max;
}

function minNum(num){
    let min = num[0];
    for(let pos in num){
        if(min > num[pos]){
            min = num[pos];
        }
    }

    return min;
}

function soma(num){
    let soma = 0;
    for(let pos in num){
        soma = soma + num[pos]
    }

    return soma;
}

function media(num){
    return (soma(num)/num.length).toFixed(2)
}