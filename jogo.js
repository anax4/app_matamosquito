let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 5;

///let criaMosquitoTempo = 1500;

alert(window.location.href);

//pega a altura e a largura do browser
function ajustaTamanhoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;

  console.log(largura, altura);
}

ajustaTamanhoJogo();

let cronom = setInterval(function () {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criarmosca);
    window.location.href = 'win.html';
  } else {
    document.getElementById('cronometro').innerHTML = tempo;
  }
}, 1000);

function posicaoRond() {
  //REMOVE O MOSQUITO ANTERIOR
  if (document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove();

    //alterar a vida
    //loop de repeticao
    if (vidas > 3) {
      window.location.href = 'game_over.html';
    }
    document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';

    vidas++;
  }
  //DEFINIÇÃO DAS POSIÇÕES RANDOMICAS
  let posicaoX = Math.floor(Math.random() * largura) - 90;
  let posicaoY = Math.floor(Math.random() * altura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  //Criar o elemento HTML
  var mosquito = document.createElement('img');
  mosquito.src = './imagens/mosca.png';
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();

  mosquito.style.left = posicaoX + 'px';
  mosquito.style.top = posicaoY + 'px';
  mosquito.style.position = 'absolute';
  mosquito.id = 'mosquito';
  mosquito.onclick = function () {
    this.remove();
  };

  //Adiciona o elemento dentro do corpo da página
  document.body.appendChild(mosquito);
}
posicaoRond();
function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return 'mosquito1';
    case 1:
      return 'mosquito2';
    case 2:
      return 'mosquito3';
  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return 'ladoA';
    case 1:
      return 'laboB';
  }
}
