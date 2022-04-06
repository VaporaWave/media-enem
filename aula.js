
document.querySelector('#botao')
    .addEventListener('click', clicada, false)

function clicada(){
    let nat = document.querySelector('#natu').value
    let hum = document.querySelector('#huma').value
    let cod = document.querySelector('#codi').value
    let mat = document.querySelector('#mate').value
    let red = document.querySelector('#reda').value
    
    document.querySelector('#botao').innerHTML = vai(nat, hum, cod, mat, red);
    
};


function vai(nat, hum, cod, mat, red){
    var tes = 10
    var conteudo = parseInt(nat,tes) + parseInt(hum,tes) + parseInt(cod,tes) + parseInt(mat,tes) + parseInt(red,tes)
    var media = 2230
    if(conteudo >= media){
        document.querySelector('.st-botao').classList.add('st-botao-aprovado')
        document.querySelector('.st-botao').classList.remove('st-botao-reprovado')
        document.querySelector('.formulario').classList.add('aprovado')
        document.querySelector('.titulo').classList.add('titulo_aprovado')
        document.querySelector('.formulario').classList.remove('reprovado')
        document.querySelector('.titulo').innerHTML = ('Aprovado(a)')
        return conteudo/5
    }
     
    else{
        document.querySelector('.st-botao').classList.add('st-botao-reprovado')
        document.querySelector('.st-botao').classList.remove('st-botao-aprovado')
        document.querySelector('.formulario').classList.add('reprovado')
        document.querySelector('.titulo').classList.add('titulo_reprovado')
        document.querySelector('.formulario').classList.remove('aprovado')
        document.querySelector('.titulo').classList.remove('titulo_aprovado')
        document.querySelector('.titulo').innerHTML = ('Reprovado(a)')
        return conteudo/5 
        
    }
}