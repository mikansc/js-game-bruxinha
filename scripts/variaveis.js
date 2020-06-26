let jogo;
let telaInicial;
let cenas;
let cenaAtual = 'jogo';
let vida;
let fita;

let botaoGerenciador;

let imagemCenario;
let imagemTelaInicial;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemGameOver;
let imagemVida;

let fonteTelaInicial;

let cenario;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;

let somDoJogo;
let somDoPulo;

const inimigos = [];

const matrizPersonagem = [
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

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 100],
  [104, 100],
  [208, 100],
  [312, 100],
  [0, 200],
  [104, 200],
  [208, 200],
  [312, 200],
  [0, 300],
  [104, 300],
  [208, 300],
  [312, 300],
  [0, 404],
  [104, 404],
  [208, 404],
  [312, 404],
  [0, 504],
  [104, 504],
  [208, 504],
  [312, 504],
  [0, 604],
  [104, 604],
  [208, 604],
  [312, 604],
];

const matrizInimigoGrande = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];

const matrizInimigoVoador = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];
