var buttons = []; 
var sliders = [];
var text_inputs = [];
var joysticks = [];
var users = [];
var itens=4;
var imgs = [];
var token = true;
var screen;
var msg = "";
var tabo = false;



function preload(){
  imgs[0] = loadImage("images/button1.png");
}

function setup() {
  createCanvas(1580, 860);
  users.push(new User("a", "a", "Matheus", "Fischer", 24, "Ass. Projeto", "admin"));
  users.push(new User("gerente", "1234", "Carlos", "Bieging", 53, "Coord. de Pesquisa", "operador"));
  createScreens();
  screen=2;
}
function draw() {
  background(255);
  switch(screen){
    case 0:
      loadScreen();    
      if(buttons[0].state() == true){
      }
      if(buttons[1].state() == true){
        entrar();
      }
    break;
    case 1:
      loadScreen();
      if(buttons[3].state() == true){
        trocaTela("login");
      }
    break;
    case 2:
      loadScreen();
      if(buttons[4].state() == true){
        cadastrar();
      }
      if(buttons[5].state() == true){
        trocaTela("login");
      }
    break;
  } 
}
function entrar(){
  var text1 = text_inputs[0].frase(screen);
  var text2 = text_inputs[1].frase(screen);
  for(var i=0;i<users.length;i++){
    if(users[i].check(text1,text2)){
      if(users[i].acesso == "admin"){
        trocaTela("adm");
      }else{
        trocaTela("operador");
      }
    }
  }
}

function cadastrar(){
  var text1 = [];
  for(var i=0;i<7;i++){
    text1[i] = text_inputs[i+2].frase(screen);
  } 
  if(token){
    if(verifUsuario(text1[0],text1[2],text1[3],text1[4])){  
      users.push(new User(text1[0], text1[1], text1[2], text1[3], text1[4], text1[5], text1[6]));
      for(var i=2; i<9;i++){
        text_inputs[i].rese();
      }
    }
    token = false; 
  }

}
function verifUsuario(id,nome,sobrenome,idade){
  var ok = 0;
  for(var i=0;i<users.length;i++){
    if((users[i].check(id,nome,sobrenome,idade))==true){
      ok++;
    }
  }
  if(ok==0){
    return(true);
  }else{
    return(false);
  }
}

function createScreens(){
  //text_inputs.push(new TextInput(screen,x, y, sx, sy , texto) );
  //buttons.push(new Button(screen,x, y, sx, sy ,format, texto, trava, textcol));
  //sliders.push(new Slider(screen,x, y, sx, sy , texto, max, min, corfundo, corslider));
  //joysticks.push(new Joystick(screen, x, y, sx, sy, texto, cor1, cor2));
  // CRIAÇÃO DE OBJETOS PARA TELA 0 
  trocaTela("login"); 
  text_inputs.push(new TextInput(screen, width/2,height/2-30,400,50,"Login"));
  text_inputs.push(new TextInput(screen, width/2,height/2+30,400,50,"Senha"));
  buttons.push(new Button(screen, width/2+150,height/3, 100, 100, 1,"Administrador", 0, color(0)));
  buttons.push(new Button(screen, width/2+-150,height/3, 100, 100, 1,"Operador", 0, color(0)));
  // CRIAÇÃO DE OBJETOS PARA TELA 1
  trocaTela("operador");
  buttons.push(new Button(screen, 100,height/10, 150, 150, 1,"On/Off", 1, color(0)));
  buttons.push(new Button(screen, width-100,height/10, 80, 80, 1,"Exit", 0, color(0)));
  sliders.push(new Slider(screen, 150,300,200,50,"Temperatura",300,0, color(200,100,10),color(10,100,200)));
  joysticks.push(new Joystick(screen, 100, 600, 100, 100, "ola",  color(250), color(200))); 
  // CRIAÇÃO DE OBJETOS PARA TELA 2
  trocaTela("adm"); 
  text_inputs.push(new TextInput(screen, width/2-50,height/2-100,400,45,"Cadastre um login"));
  text_inputs.push(new TextInput(screen, width/2-50,height/2-50,400,45,"Cadastre uma senha"));
  text_inputs.push(new TextInput(screen, width/2-50,height/2,400,45,"Nome"));
  text_inputs.push(new TextInput(screen, width/2-50,height/2+50,400,45,"Sobrenome"));
  text_inputs.push(new TextInput(screen, width/2-50,height/2+100,400,45,"Idade"));
  text_inputs.push(new TextInput(screen, width/2-50,height/2+150,400,45,"Cargo"));
  text_inputs.push(new TextInput(screen, width/2-50,height/2+150,400,45,"Acesso"));
  buttons.push(new Button(screen, 100,height/10, 150, 150, 1,"Cadastro", 0, color(0)));
  buttons.push(new Button(screen, width-100,height/10, 80, 80, 1,"Exit", 0, color(0)));

  trocaTela("login");
}

function loadScreen(){
  for(var i=0;i<text_inputs.length;i++){text_inputs[i].display(screen);}    
  for(var i=0;i<buttons.length;i++){buttons[i].display(screen);buttons[i].check(mouseX, mouseY, false, screen);}
  for(var i=0;i<sliders.length;i++){sliders[i].display(screen);}
  for(var i=0;i<joysticks.length;i++){joysticks[i].display(screen);}    
}

function mouseClicked(){
  for(var i=0;i<text_inputs.length;i++){text_inputs[i].check(screen);}
  for(var i=0;i<buttons.length;i++){buttons[i].check(mouseX, mouseY, true, screen);}
}
function mouseDragged(){
  var k = true;
  if(mouseIsPressed){
    for(var i=0;i<sliders.length;i++){sliders[i].value(screen);}
    for(var i=0;i<joysticks.length;i++){joysticks[i].check(k,screen);}
  }
}
function mouseReleased(){
  var k = false;
  token = true;
  for(var i=0;i<sliders.length;i++){sliders[i].click = false;}
  for(var i=0;i<joysticks.length;i++){joysticks[i].check(k, screen);}
}
function keyTyped() {
  var keyIndex = -1;
  if((key <= 'A' && key >= 'Z') || (key <= 'a' && key >= 'z')){
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);}
  // It's a letter key, fill a rectangle
  if (keyIndex == -1) { 
    for(var i=0;i<text_inputs.length;i++){
      if(text_inputs[i].click == true){text_inputs[i].word(key,screen);}
    }
  }
}
function keyPressed(){
  if (keyCode == BACKSPACE) {
    for(var i=0;i<text_inputs.length;i++){
      if(text_inputs[i].click == true){text_inputs[i].backs(screen);}
    }
  }
  if (keyCode == TAB ) {
    for(var i=0;i<text_inputs.length;i++){   
      if (tabo == false){   
        if(text_inputs[i].click == true){text_inputs[i+1].click = true;text_inputs[i].click = false; tabo=true;}
      }
    }
  }
}
function keyReleased(){
  tabo=false;
}

function checkText(text1,text2){
  if(text2 instanceof Array){
    for (var i=0;i<text2.length;i++){
      if(text1==text2[i]){
          return(true);
  }}}
  else if (text1 == text2){
    return (true);
  }
  else{
    return (false);
  }} 

function trocaTela(tela){
  switch(tela){
    case "login":
    screen = 0;
    break;
    case "operador":
    text1 = "";
    text2 = "";
    text_inputs[0].rese();
    text_inputs[1].rese();
    screen = 1;
    break;
    case "adm":
    text1 = "";
    text2 = "";
    text_inputs[0].rese();
    text_inputs[1].rese();
    screen = 2;
    break;
  }
  return tela;
}

