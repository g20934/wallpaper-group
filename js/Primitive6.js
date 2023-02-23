class Primitive6 extends Monyogun{
  constructor(motif, motifW, motifH){
    super(motif, motifW, motifH);
  }

  // 中心を原点として、60度ずつ回転
  p6(){
    super.controller(); // コントローラ表示
    for(let j = 0; j < height; j += (this.motifH * 4)){
      for(let i = 0; i < width - 150; i += (this.motifW * 2)){ 
        for(let k = 0; k < 6; k++){
          //中心を原点として、60度ずつ回転
          push();
          translate(i, j);
          translate(this.motifW, this.motifH);
          rotate(60*k);
          translate(-this.motifW, -this.motifH);
          image(this.motif, 0, 0);
          pop();
        }

        for(let k = 0; k < 6; k++){
          //中心を原点として、60度ずつ回転
          push();
          translate(i, j);
          translate(this.motifW*2, this.motifH*3);
          rotate(60*k);
          translate(-this.motifW, -this.motifH);
          image(this.motif, 0, 0);
          pop();
        }
      }
    }
  }

  // 中心を原点として、60度ずつ回転しつつ、線対称
  p6m(){
    super.controller(); // コントローラ表示

    for(let j = 0; j < height; j += (this.motifH * 4)){
      for(let i = 0; i < width - 150; i += (this.motifW * 2)){ 
        for(let k = 0; k < 6; k++){
          //中心を原点として、60度ずつ回転
          push();
          translate(i, j);
          translate(this.motifW, this.motifH);
          rotate(60*k);
          translate(-this.motifW, -this.motifH);
          image(this.motif, 0, 0);
          
          translate(0, this.motifH);
          super.mirrorX();
          pop();
        }

        for(let k = 0; k < 6; k++){
          //中心を原点として、60度ずつ回転
          push();
          translate(i, j);
          translate(this.motifW*2, this.motifH*3);
          rotate(60*k);
          translate(-this.motifW, -this.motifH);
          image(this.motif, 0, 0);
          
          translate(0, this.motifH);
          super.mirrorX();
          pop();
        }
      }
    }
  }
}
