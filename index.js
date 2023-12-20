function mudouTamanho() {
    if (window.innerWidth >= 529) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu(){
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

document.addEventListener('scroll', function () {
    var altura = window.innerHeight;
    var distancia = document.querySelector('#projetos').getBoundingClientRect().top;

    if (distancia <= altura * 0.6) {
      document.querySelector('#projetos').classList.add('mostrar');
    }
  });