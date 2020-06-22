class Personagem {
  constructor(imagem, matriz, largura, altura, escala = 1, posInicial = 0) {
    this.imagem = imagem;
    this.posInicial = posInicial;
    this.matriz = matriz;
    this.largura = largura;
    this.altura = altura;
    this.escala = escala;
    this.frameAtual = 0;
  }

  exibe() {
    image(
      this.imagem,
      this.posInicial,
      height - this.altura * this.escala,
      this.largura * this.escala,
      this.altura * this.escala,
      this.matriz[this.frameAtual][0],
      this.matriz[this.frameAtual][1],
      this.largura,
      this.altura
    );
    this.anima();
  }

  anima() {
    this.frameAtual++;
    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}
