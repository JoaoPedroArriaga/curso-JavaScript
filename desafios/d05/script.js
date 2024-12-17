function getDistancia(){
    let dis = [];
    dis[0] = parseFloat(prompt("Digite uma distância em metros (m)"));

    converter(dis);
}

function converter(dis){
    dis[1] = dis[0]/1000
    dis[2] = dis[0]/100
    dis[3] = dis[0]/10
    dis[4] = dis[0]*10
    dis[5] = dis[0]*100
    dis[6] = dis[0]*1000

    showDistancia(dis)
}

function showDistancia(dis){
    let msg = document.getElementById("msg");

    msg.innerHTML = `<h2>A distância de ${dis[0].toLocaleString("pt-BR")} metros, corresponde a...</h2>`
    msg.innerHTML += `<p>${dis[1].toLocaleString("pt-BR")} quilômetros(Km)</p>`
    msg.innerHTML += `<p>${dis[2].toLocaleString("pt-BR")} hectômetros(Hm)</p>`
    msg.innerHTML += `<p>${dis[3].toLocaleString("pt-BR")} decâmetros(Dam)</p>`
    msg.innerHTML += `<p>${dis[4].toLocaleString("pt-BR")} decímetros(dm)</p>`
    msg.innerHTML += `<p>${dis[5].toLocaleString("pt-BR")} centímetros(cm)</p>`
    msg.innerHTML += `<p>${dis[6].toLocaleString("pt-BR")} milímetros(mm)</p>`
}