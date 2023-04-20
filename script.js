let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variaveis da raquete 
let xRaquete = 25;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//variaveis do oponente

let xRaqueteOponente = 565;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let hit = false;

// placar do jogo 

let pontos= 0;
let pontosOponente = 0;

function setup(){
    createCanvas(600, 400);
}
function draw(){
    background(0);
    mostraBolinha();
    movimentaBolinha();
    colisaoBorda();
    raqueteJogador(xRaquete,yRaquete);
    movimentoDaRaquete();
    //colisaoRaquete();
    colisaoRaqueteBiblioteca(xRaquete,yRaquete);
    RaqueteOponente(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    colisaoRaqueteBiblioteca(xRaqueteOponente,yRaqueteOponente);
    placar();
    marcaPonto();
}
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}
  
function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function colisaoBorda(){
    if(xBolinha + raio > width || xBolinha - raio < 0){
       velocidadeXBolinha *= (-1);
       }
    if(yBolinha + raio > height || yBolinha - raio < 0){
      velocidadeYBolinha *= (-1);
    }
}

function raqueteJogador(x,y){
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

function RaqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente, comprimentoRaquete, alturaRaquete);
}

function movimentoDaRaquete(){
  if(keyIsDown(87)){
    yRaquete -= 10;
  }
  if(keyIsDown(83)){
    yRaquete += 10;
  }
}

function colisaoRaquete(){
  if(xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function colisaoRaqueteBiblioteca(x,y){
   hit = collideRectCircle(x,y,comprimentoRaquete,alturaRaquete,xBolinha,yBolinha,raio);
   if (hit){
    velocidadeXBolinha *= -1;
   }
}


function movimentaRaqueteOponente(){
  if(keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10;
  }
}

function placar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,0,0));
  rect(278,10,40,20);
  fill(255);
  text(pontos,298,26);
  fill(color(255,0,0));
  rect(321,10,40,20);
  fill(255);
  text(pontosOponente,341,26);
}

function marcaPonto(){
  if(xBolinha > 590){
    pontos++;
  }
  if(xBolinha < 10){
    pontosOponente++;
  }
}