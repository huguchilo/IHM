
class Joystick {
    constructor(x, y, sx, sy, texto, cor1, cor2) {
        this.x = x; //POSIÇÃO X
        this.y = y; //POSIÇÃO Y
        this.sx = sx; //LARGURA
        this.sy = sy; //ALTURA
        this.size = this.sx-this.sx*0.4;
        this.t = texto;
        this.cor1 = cor1;
        this.cor2 = cor2;
        this.tx=x;
        this.ty=y;
        this.d;
        this.pmx;
        this.pmy;
        

        this.display = function(){         
            stroke(0);
            fill(this.cor1);
            rectMode(CENTER);
            rect(this.x,this.y,this.sx,this.sy,((((this.sx^2)+(this.sy^2)))^(1/2))/50);
            stroke(0);       
            fill(this.cor2);
            strokeWeight(10)
            line(this.tx,this.ty,this.x+this.sx/2.5,this.ty);
            line(this.tx,this.ty,this.x-this.sx/2.5,this.ty);
            line(this.tx,this.ty,this.tx,this.y+this.sy/2.5);
            line(this.tx,this.ty,this.tx,this.y-this.sy/2.5);
            strokeWeight(1)
            if(this.click==true){
                if (this.d<this.sx/2){
                    this.pmx=this.tx;
                    this.pmy=this.ty;
                    this.tx=mouseX;
                    this.ty=mouseY;
                }else{
                    this.tx=this.pmx;
                    this.ty=this.pmy;
                }
                
                
            }
            ellipse(this.tx,this.ty,this.size,this.size);
        };

        this.check = function(t){
            this.d = dist(mouseX ,mouseY ,this.x,this.y);
            if ((this.d < this.sx/2) && t){   
                this.click=true;
                
            }
            else if (t==false){
                this.tx=this.x;
                this.ty=this.y;
                this.click=false;
            }
        };
    }
}