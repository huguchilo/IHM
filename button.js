
class Button {
    constructor(screen, x, y, sx, sy ,format, texto, trava, textcol) {
        this.screen = screen;
        this.x = x; //POSIÇÃO X
        this.y = y; //POSIÇÃO Y
        this.sx = sx; //LARGURA
        this.sy = sy; //ALTURA
        this.format = format; // 0 = REDONDO 1 = QUADRADO
        this.texto = texto; // TEXTO DO BOTÃO
        this.trava = trava; // 0 = SEM TRAVA 1 = COM TRAVA    
        this.textcol = textcol; // COR DO TEXTO = color(xxx);
        this.texsize = this.sy-this.sy*0.88; // TAMANHO DA LETRA
        this.on = color(0,240,0);
        this.off = color(240,0,0);
        this.click = false;
        this.d;
        this.texts = splitTokens(this.texto, '/');
        this.deslocamento=0.4;

        this.display = function (screenAtual) {
            if(this.screen==screenAtual){
                imageMode(CENTER);
                rectMode(CENTER);
                if(this.click){
                    fill(240);
                    textSize(this.texsize);
                    textStyle(BOLD);
                } else{
                    fill(240);
                    textSize(this.texsize-1);
                    textStyle(BOLD);               
                }
                if (this.format==1){                                    
                    rect(this.x, this.y, this.sx, this.sy, 10);
                    if(this.click){tint(this.on)}else{tint(this.off)};               
                    image(imgs[0],this.x,this.y,this.sx,this.sy);
                } else{
                    ellipse(this.x, this.y, this.sx, this.sy);
                    if(this.click){tint(this.on)}else{tint(this.off)};               
                    image(imgs[0],this.x,this.y,this.sx,this.sy);
                    fill(this.textcol);
                }
                fill(this.textcol);
                textAlign(CENTER, CENTER);

                if(this.texts[0] == this.texto){text(this.texto, this.x, this.y+this.sy-this.sy*this.deslocamento); }
                else if(this.click){
                    text(this.texts[0], this.x, this.y+this.sy-this.sy*this.deslocamento);
                }      
                else {
                    text(this.texts[1], this.x, this.y+this.sy-this.sy*this.deslocamento);
                }
            }   
        };
    
        this.check = function ( mx, my, c, screenAtual) {
            if(this.screen==screenAtual){
                if(this.trava==0 && !c){
                    this.d = dist(mx ,my ,this.x,this.y);
                    if (((this.format==1 && ((((mx<=(this.x + this.sx/2)) && (mx>=(this.x-this.sx/2))) && (((my<(this.y+this.sy/2)) && 
                    my>(this.y-this.sy/2)))))) || (this.format==0 && ((this.d < this.sx/2)))) && mouseIsPressed)
                    {
                        this.click=true;
                        this.um = false;
                    } else{
                        this.click=false;
                    }
                } else if(this.trava==1 && c){
                    this.d = dist(mx ,my ,this.x,this.y);
                    if ((this.format==1 && ((((mx<=(this.x + this.sx/2)) && (mx>=(this.x-this.sx/2))) && (((my<(this.y+this.sy/2)) && 
                    my>(this.y-this.sy/2)))))) || (this.format==0 && ((this.d < this.sx/2))))
                    {   
                        this.um = false;
                        this.click=!this.click;
                    }
                }
            }
        };
        this.state = function() {
            return(this.click);
        }
    }
}
