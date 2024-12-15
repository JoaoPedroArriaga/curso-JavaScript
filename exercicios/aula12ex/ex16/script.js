function verificar(){
    let data = new Date();
    let ano = data.getFullYear();

    let fano = document.getElementById("ano");
    let res = document.querySelector("div#res");

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert("[ERRO]Verifique os dados e tente novamente");
    }else{
        let fsex = document.getElementsByName('sexo');
        let idade = ano - Number(fano.value);
        let genero = '';
        let img = document.createElement('img')

        if(fsex[0].checked){
            genero = "Homem"
            if(idade>=0 && idade <10){
                //CRIANÇA
                img.setAttribute('src', 'imagens/muliro.png');
            } else if(idade < 21){
                //JOVEM
                img.setAttribute('src', 'imagens/jovem.png')
            } else if(idade<50){
                //ADULTO
                img.setAttribute('src', 'imagens/tiozin.png')
            } else{
                //IDOSO
                img.setAttribute('src', 'imagens/vei.png')
            }
        }else{
            genero = "Mulher"
            if(idade>=0 && idade <10){
                //CRIANÇA
                img.setAttribute('src', 'imagens/mulira.png')
            } else if(idade < 21){
                //JOVEM
                img.setAttribute('src', 'imagens/jova.png')
            } else if(idade<50){
                //ADULTO
                img.setAttribute('src', 'imagens/tiazinha.png')
            } else{
                //IDOSO
                img.setAttribute('src', 'imagens/veia.png')
            }
        }

        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} amos`;
        res.appendChild(img);
    }
}