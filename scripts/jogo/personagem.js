class Personagem extends Animacao {
  constructor(
    matriz,
    imagem,
    x,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite
  ) {
    super(
      matriz,
      imagem,
      x,
      variacaoY,
      largura,
      altura,
      larguraSprite,
      alturaSprite
    );

    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.alturaDoPulo = -40;
    this.pulos = 0;
    this.gravidade = 3;
    this.invencivel = false;
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  ficarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 2000);
  }

  estaColidindo(inimigo) {
    if (this.invencivel) return false;
    const precisao = 0.65;
    noFill();
    rect(this.x, this.y, this.largura * precisao, this.altura * precisao);
    rect(
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );

    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );

    return colisao;
  }
}
