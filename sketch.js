/*
 * @name Array of Objects
 * @description Create a Jitter class, instantiate an array of objects
 * and move them around the screen.
 */
var buttons = []; // array of Jitter objects
var sliders = [];

var but_names = ['EXPLODIU/EXPLODIR',
                "PRODUZINDO/PRODUÇÃO",
                "CONFIGURAÇÃO",
                "RESET",
                "PLAY",
                "QUALIDADE DA COR"];

var img;
function preload(){
  img = loadImage("images/button1.png");
}

function setup() {
  createCanvas(1600, 900);
  // Create objects
  buttons.push(new Button( width/2,       height/2-200, 300, 300, 1, but_names[0], 1, color(0)));
  buttons.push(new Button( 1*115+75,       75, 100, 100, 0, but_names[1], 1, color(0)));
  buttons.push(new Button( 2*115+75,       75, 100, 100, 0, but_names[2], 0, color(0)));
  sliders.push(new Slider(300,300,400,50,"Temperatura",300,0, color(200,100,10),color(10,100,200)));
}
function draw() {
  background(255);
  for(var i=0;i<sliders.length;i++){
    sliders[i].display();
  }
  for(var i=0;i<buttons.length;i++){
    buttons[i].display();
    buttons[i].check(mouseX, mouseY, false);
  }
  if(buttons[0].state() == true){
    text("KABUM", width/2, height/2);
  }
  if(buttons[1].state() == true){
    text("bye bye", width/2-300, height/2);
  }
}
function mouseClicked(){
  for(var i=0;i<buttons.length;i++){
      buttons[i].check(mouseX, mouseY, true);
  }
}
function mouseDragged(){
  if(mouseIsPressed){
    for(var i=0;i<sliders.length;i++){
      sliders[i].value();
    }
  }
}
