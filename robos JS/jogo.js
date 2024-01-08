let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }
    setTimeout(function(){
    personagem.classList.remove('animar')
    }, 500)
}


var testarColisao = setInterval( function(){

    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )
    var DireitaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('direita')
    )
    if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 130){
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('tu é muito ruim caralho')
        
    }
}, 10)