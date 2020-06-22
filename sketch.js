let imagemCenario;
let imagemPersonagem;
let imagemGato;
let cenario;
let personagem;
let somDoJogo;
let matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];

let matrizGato = [
  [0, 0],
  [0, 0],
  [100, 0],
  [100, 0],
  [200, 0],
  [200, 0],
  [300, 0],
  [300, 0],
  [400, 0],
  [400, 0],
  [500, 0],
  [500, 0],
];

function preload() {
  imagemCenario = loadImage('./imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('./imagens/personagem/correndo.png');
  imagemGato = loadImage('./imagens/personagem/cat.png');
  somDoJogo = loadSound('./sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(
    imagemPersonagem,
    matrizPersonagem,
    220,
    270,
    0.5,
    100
  );
  companhia = new Personagem(imagemGato, matrizGato, 100, 100, 1, 0);
  frameRate(36);
  somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  companhia.exibe();
}
