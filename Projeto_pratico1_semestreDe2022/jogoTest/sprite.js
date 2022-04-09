function Sprite(x, y, largura, altura){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xcanvas, ycanvas) {
        ctx.drawImage( img, this.x, this.y, this.largura, this.altura, xcanvas, ycanvas, this.largura, this.altura);
    }
}

var bg = new Sprite(30, 10, 600, 600),
spriteboneco = new Sprite(120, 730, 60, 60),

perdeu = new Sprite( 1110, 600, 140,185),
jogar = new Sprite(720, 490, 120, 90),
novo = new Sprite(860, 560, 154, 54),
spriteRecord = new Sprite(1066, 490, 170,54),
spriteChao = new Sprite(660, 295, 600, 400);