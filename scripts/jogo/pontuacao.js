class Pontuacao {
  constructor() {
    this.pontos = 0;
  }

  exibe() {
    textAlign(RIGHT);
    fill('#FFF');
    textSize(50);
    text(parseInt(this.pontos), width - 50, 50);
  }

  adicionarPonto() {
    this.pontos = this.pontos + 0.08;
  }
}
