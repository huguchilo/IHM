
var buttons = [];
var buttonState = []; 
var sliders = [];
var text_inputs = [];
var joysticks = [];
var t = [];
var screen = 0;
var login = ["matheus.fischer","admin","c"];
var senha = ["selgron@2019"   ,"admin","c"];
var imgs = [];


function preload(){
  imgs[0] = loadImage("images/button1.png");
}


function setup() {
  createCanvas(1580, 860);
  var j=0;
  var itens=4;
  // CRIAÇÃO DE OBJETOS PARA TELA 1
  //text_inputs.push(new TextInput(x, y, sx, sy , texto) );
  text_inputs.push(new TextInput(width/2-50,height/3-30,400,50,"login:"));
  text_inputs.push(new TextInput(width/2-50,height/3+30,400,50,"senha:"));

  //buttons.push(new Button(x, y, sx, sy ,format, texto, trava, textcol));
  buttons.push(new Button(width/2+210,height/3, 100, 100, 1,"LOGIN", 0, color(0)));

  //sliders.push(new Slider(x, y, sx, sy , texto, max, min, corfundo, corslider));
  
  var i0 = j;
  var f0 = i0+itens;
  for (var i=i0;i<f0;i++){
    if(i==j){t[i]=text_inputs.length;}
    j++;
    if(i==j){t[i]=buttons.length;}
    j++;
    if(i==j){t[i]=sliders.length;}
    j++;
    if(i==j){t[i]=joysticks.length;}
    j=i0;
  }
  j=f0;
  
  // CRIAÇÃO DE OBJETOS PARA TELA 2
  //text_inputs.push(new TextInput(x, y, sx, sy , texto) ); 
  //buttons.push(new Button(x, y, sx, sy ,format, texto, trava, textcol));
  buttons.push(new Button(100,height/10, 150, 150, 1,"On/Off", 1, color(0)));
  buttons.push(new Button(width-100,height/10, 80, 80, 1,"Exit", 0, color(0)));
  //sliders.push(new Slider(x, y, sx, sy , texto, max, min, corfundo, corslider));
  sliders.push(new Slider(150,300,200,50,"Temperatura",300,0, color(200,100,10),color(10,100,200)));
  joysticks.push(new Joystick(100, 600, 100, 100, "ola",  color(250), color(200)));


  var i1=j;
  var f1=i1+itens;
  for (var i=i1;i<f1;i++){
    if(i==j){t[i]=text_inputs.length;}
    j++;
    if(i==j){t[i]=buttons.length;}
    j++;
    if(i==j){t[i]=sliders.length;}
    j++;
    if(i==j){t[i]=joysticks.length;}
    j=i1;;
  }
}
function draw() {
  background(255);
  switch(screen){
    case 0:
      textSize(40);
      text("Realize seu login para continuar",width/2,150);
      for(var i=0;i<t[0];i++){
        text_inputs[i].display();
      }   
      for(var i=0;i<t[1];i++){
        buttons[i].display();
        buttons[i].check(mouseX, mouseY, false);
      }
      for(var i=0;i<t[2];i++){
        sliders[i].display();
      }
      for(var i=0;i<t[3];i++){
        joysticks[i].display();
      }
      if(buttons[0].state() == true){
        var log = text_inputs[0].frase();
        var sen = text_inputs[1].frase();
        for (var i=0;i<login.length;i++){
          if(log==login[i]){
            if(sen==senha[i]){
              text_inputs[0].rese();
              text_inputs[1].rese();
              screen = 1;   
            }
          }
        }
      }
    break;

    case 1:
      for(var i=t[0];i<t[4];i++){
        text_inputs[i].display();
      }   
      for(var i=t[1];i<t[5];i++){
        buttons[i].display();
        buttons[i].check(mouseX, mouseY, false);
      }
      for(var i=t[2];i<t[6];i++){
        sliders[i].display();
      }
      for(var i=t[3];i<t[7];i++){
        joysticks[i].display();
      }
      if(buttons[2].state() == true){
        screen = 0;
      }
    break;
  }
}

function mouseClicked(){
  for(var i=0;i<buttons.length;i++){
      buttons[i].check(mouseX, mouseY, true);
  }
  for(var i=0;i<text_inputs.length;i++){
    text_inputs[i].check(mouseX, mouseY);
  }
}
function mouseDragged(){
  var k = true;
  if(mouseIsPressed){
    for(var i=0;i<sliders.length;i++){
      sliders[i].value();
    }
    for(var i=0;i<joysticks.length;i++){
      joysticks[i].check(k);
    }
  }
}
function mouseReleased(){
  var k = false;
  for(var i=0;i<sliders.length;i++){
    sliders[i].click = false;
  }
  for(var i=0;i<joysticks.length;i++){
    joysticks[i].check(k);
  }
}

function keyTyped() {
  var keyIndex = -1;
  //if (key <= 'a' && key >= 'z')
  if((key <= 'A' && key >= 'Z') || (key <= 'a' && key >= 'z'))  {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex == -1) {   
    // It's a letter key, fill a rectangle
    for(var i=0;i<text_inputs.length;i++){
      if(text_inputs[i].click == true){
        text_inputs[i].word(key);
      }
    }
  }
}

function keyPressed(){
  if (keyCode == BACKSPACE) {
    for(var i=0;i<text_inputs.length;i++){
      if(text_inputs[i].click == true){     
        text_inputs[i].backs();
      }
    }
  }
  if (keyCode == TAB) {
    for(var i=0;i<text_inputs.length;i++){      
      if(text_inputs[i].click == true){     
        text_inputs[i+1].click = true;
        text_inputs[i].click = false;
      }
    }
  }
} 
