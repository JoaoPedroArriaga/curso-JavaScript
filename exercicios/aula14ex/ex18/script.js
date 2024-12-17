function gerarTabuada(){
    let num = document.getElementById("num");
    let tabuada = document.getElementById("tabuada");

    if(num.value.length == 0){
        alert("Por favor, digite um número!")
    }else{
        num = Number(num.value)
        tabuada.innerHTML = "";

        for(let index = 1; index <= 10; index++){
            let item = document.createElement("option");
            item.text = `${num} X ${index} = ${num*index}`
            item.value = `tab${index}`
            tabuada.appendChild(item)
        }
    }
}