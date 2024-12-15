function carregar(){
var msg = window.document.getElementById("msg");
var img = window.document.getElementById("imagem");
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas.`;

if(hora>=6 && hora<12){
    msg.innerHTML += "<p> <br>BOM DIA</p>"
    img.src = "imagens/manha.png";
    document.body.style.background = '#ffd980';
}else if(hora>=12 && hora<=18){
    msg.innerHTML += "<p> <br>BOA TARDE</p>"
    img.src = "imagens/tarde.png"
    document.body.style.background = '#e49365';
}else{
    msg.innerHTML += "<p> <br>BOA NOITE</p>"
    img.src = "imagens/noite.png"
    document.body.style.background = '#3f3b49';
}
}