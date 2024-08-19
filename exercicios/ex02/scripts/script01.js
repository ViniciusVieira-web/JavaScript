function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || isNaN(fano.value) || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByClassName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 12){
                img.setAttribute('src','bebe-m.png');
            } else if (idade < 22){
                img.setAttribute('src','jovem-m.png');
            } else if (idade < 55){
                img.setAttribute('src','adulto-m.png');
            } else {
                img.setAttribute('src','idoso-m.png');
            }
                
        } else if (fsex[1].checked){
            genero = 'Mulher';
            if (idade >= 0 && idade < 12){
                img.setAttribute('src','bebe-f.png');
            } else if (idade < 22){
                img.setAttribute('src', 'jovem-f.png');
            } else if (idade < 55){
                img.setAttribute('src', 'adulto-f.png');
            } else{
                img.setAttribute('src', 'idoso-f.png');
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }


}
