function getTemp(){
    let temp = [0,1,2];
    temp[0] = parseFloat(prompt("Digite uma temperatura em °C (Celsius)"));

    converter(temp)
}

function converter(temp){
    temp[1] = temp[0] + 273.15;
    temp[2] =  1.8*temp[0] + 32;

    showTemp(temp)
}

function showTemp(temp){
    let msg = document.getElementById("msg");

    msg.innerHTML = `<h2>A temperatura de ${temp[0].toLocaleString("pt-BR")}°C, corresponde a...</h2>`;

    msg.innerHTML += `<p>${temp[1].toLocaleString("pt-BR")} K (Kelvin)</p>`;
    msg.innerHTML += `<p>${temp[2].toLocaleString("pt-BR")}°F (Fahrenheit)</p>`;
}