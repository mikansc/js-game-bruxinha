function setup() {
  createCanvas(windowWidth, windowHeight);
  somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  telaInicial = new TelaInicial();
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
  jogo.setup();
  cenas = {
    jogo,
    telaInicial,
  };
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
