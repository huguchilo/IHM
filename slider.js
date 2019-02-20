class Slider {
    constructor(x, y, sx, sy , texto, max, min, corfundo, corslider) {
        this.x = x; //POSIÇÃO X
        this.y = y; //POSIÇÃO Y
        this.sx = sx; //LARGURA
        this.sy = sy;
        this.texto = texto;
        this.max = max;
        this.min = min;
        this.corfundo = corfundo;
        this.corslider = corslider;
        this.val = 0;
        this.xs = this.x-(this.sx/2);


        this.display = function (){
            rectMode(CENTER);
            fill(corfundo);
            rect(this.x,this.y,this.sx,this.sy,8);
            fill(0);
            rect(this.x,this.y,this.sx-10,this.sy/8,8);
            fill(corslider);
            rect(this.xs,this.y,this.sx/10,this.sy+this.sy*0.1,5)
            fill(0);
            text(nf(this.val,1,1),this.x, this.y+this.sy-this.sy*0.3)
        };



        this.value = function(){
            if(((((mouseX<=(this.x + this.sx/2)) && (mouseX>=(this.x-this.sx/2))) && (((mouseY<(this.y+this.sy/2)) && 
            mouseY>(this.y-this.sy/2)))))){
                this.xs = mouseX;
            }
            if(mouseX<(this.x-this.sx/2)){
                this.xs = this.x-this.sx/2;
            }
            if(mouseX>(this.x+this.sx/2)){
                this.xs = this.x+this.sx/2;
            }
            this.val = map(this.xs,(this.x-this.sx/2),(this.x+this.sx/2),this.min,this.max);
            //return(this.val);
        };
    }
}