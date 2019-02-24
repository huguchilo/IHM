class TextInput {
    constructor(x, y, sx, sy , texto) {
        this.x = x; //POSIÇÃO X
        this.y = y; //POSIÇÃO Y
        this.sx = sx; //LARGURA
        this.sy = sy;
        this.click = false;
        this.tam = 0;
        this.mem = texto;     
        this.phrase = texto;
        this.phraseSize = ((this.sx/2)^2 + (this.sy/2)^2)*0.09;
        this.hist = [];
        this.tamMax = 100;
        this.firstclick = false;

        this.display = function(){
            fill(0);  
            stroke(0);
            fill(250);
            rectMode(CENTER);
            rect(this.x,this.y,this.sx,this.sy,5);          
            fill(0);
            stroke(0);
            textStyle(NORMAL);
            textSize(this.phraseSize);           
            text(this.phrase,this.x,this.y+this.y*0.02);
        };

        this.check = function (mx,my){
            if (((((mx<=(this.x + this.sx/2)) && (mx>=(this.x-this.sx/2))) && (((my<(this.y+this.sy/2)) && 
            my>(this.y-this.sy/2))))))
            {   
                if(this.click == false){
                    if(this.firstclick==false){
                      this.phrase = "";
                      this.tam = 0;
                      this.firstclick=true;
                      this.phraseSize= ((this.sx/2)^2 + (this.sy/2)^2)*0.09
                    }
                    this.click=true;
                }               
            }
            else{
                if(this.phrase == ""){
                    this.rese();
                }
                this.click=false;
            }
        };
        
        this.word = function(k){            
            if(this.click){               
                this.hist[this.tam]=k;
                if(this.tam<this.tamMax){
                    this.tam = this.tam+1;
                }
                this.phrase = "";
            } 
            for(var i=0;i<this.tam;i++) {
                this.phrase= this.phrase + this.hist[i];
            }  
        };
        
        this.backs = function(){
            if(this.click){               
                this.hist[this.tam] = "";
                if(this.tam>0){
                    this.tam = this.tam-1;
                }
                this.phrase = "";
            }
            for(var i=0;i<this.tam;i++) {
                this.phrase= this.phrase + this.hist[i];
            }               
        };
        this.frase = function(){
            this.phrase = "";
            for(var i=0;i<this.tam;i++) {
                this.phrase= this.phrase + this.hist[i];
            } 
            return(this.phrase);
        };
        this.rese = function(){
            this.tam = 0;
            this.phrase = this.mem;
            this.click = false;
            this.firstclick = false;
        };
    }
}
