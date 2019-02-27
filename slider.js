class Slider {
    constructor(screen, x, y, sx, sy , texto, max, min, corfundo, corslider) {
        this.screen = screen;
        this.x = x; //POSIÇÃO X
        this.y = y; //POSIÇÃO Y
        this.sx = sx; //LARGURA
        this.sy = sy;
        this.texto = texto;
        this.max = max;
        this.min = min;
        this.corfundo = corfundo;
        this.corslider = corslider;
        this.texsize = this.sx-this.sx*0.95; // TAMANHO DA LETRA
        this.val = 0;
        this.xs = this.x-(this.sx/2);
        this.click;

        this.display = function (screenAtual){
            if(this.screen==screenAtual){
                rectMode(CENTER);
                textSize(this.texsize);
                fill(corfundo);
                //rect(this.x,this.y,this.sx,this.sy,8);
                fill(0);
                rect(this.x,this.y,this.sx-this.sx*0.05,this.sy/8,8);
                fill(corslider);
                rect(this.xs,this.y,this.sx/10,this.sy+this.sy*0.1,5)
                fill(0);
                text(nf(this.val,1,2),this.x, this.y+this.sy-this.sy*0.20);
                text(this.texto,this.x, this.y-this.sy+this.sy*0.26);
            }
        };
        this.value = function(screenAtual){
            if(this.screen==screenAtual){
                if(((((mouseX<=(this.x + this.sx/2)) && (mouseX>=(this.x-this.sx/2))) && (((mouseY<(this.y+this.sy/2)) && 
                mouseY>(this.y-this.sy/2)))))){
                    this.xs = mouseX;
                    this.click=true;
                }
                if((mouseX<(this.x-this.sx/2)) && this.click){
                    this.xs = this.x-this.sx/2;
                }else if((mouseX>(this.x+this.sx/2)) && this.click){
                    this.xs = this.x+this.sx/2;
                }
                this.val = map(this.xs,(this.x-this.sx/2),(this.x+this.sx/2),this.min,this.max);
            }
        };  
    }
}