
class Button {
    constructor(x, y, sx, sy ,format, texto, trava, textcol) {
        this.x = x; //POSIÇÃO X
        this.y = y; //POSIÇÃO Y
        this.sx = sx; //LARGURA
        this.sy = sy; //ALTURA
        this.format = format; // 0 = REDONDO 1 = QUADRADO
        this.texto = texto; // TEXTO DO BOTÃO
        this.trava = trava; // 0 = SEM TRAVA 1 = COM TRAVA    
        this.textcol = textcol; // COR DO TEXTO = color(xxx);
        this.texsize = this.sy-this.sy*0.88; // TAMANHO DA LETRA
        this.on = color(245);
        this.off = color(245);
        this.click = false;
        this.d;
        this.texts = splitTokens(this.texto, '/');
        this.deslocamento=0.4;

        this.display = function () {
            imageMode(CENTER);
            rectMode(CENTER);

            if(this.click){
                fill(this.on);
                textSize(this.texsize);
                textStyle(BOLD);
            } else{
                fill(this.off);
                textSize(this.texsize-1);
                textStyle(BOLD);               
            }
            if (this.format==1){                                    
                rect(this.x, this.y, this.sx, this.sy, 10);
                if(this.click){tint(0,255,0)}else{tint(200,0,0)};               
                image(imgs[0],this.x,this.y,this.sx,this.sy);
            } else{
                ellipse(this.x, this.y, this.sx, this.sy);
                if(this.click){tint(0,255,0)}else{tint(200,0,0)};               
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
         
        };
    
        this.check = function ( mx, my, c) {
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
        };
        this.state = function() {
            return(this.click);
        }
    }
}
