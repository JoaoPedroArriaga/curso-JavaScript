let cot_dol = parseFloat(prompt("Antes de mais nada. Quanto está a cotação do dolar agora?"));

function getValor(){
    let val_real = parseFloat(prompt("Quantos R$ você tem na carteira?"));

    calcValorDolar(val_real);
}

function calcValorDolar(val_real){
    let val_dol = val_real/cot_dol; 

    showResultado(val_real, val_dol)
}

function showResultado(val_real, val_dol){
    let msg = document.getElementById("msg");

    msg.innerHTML = 
    `<h2>
        O valor de ${val_real.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} em dolar com cotação ${cot_dol.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} é igual a ${val_dol.toLocaleString("pt-BR", {style: "currency", currency: "USD"})}
    </h2>`;
}