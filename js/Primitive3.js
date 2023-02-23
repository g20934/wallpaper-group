class Primitive3 extends Monyogun{
  constructor(motif, motifW, motifH){
    super(motif, motifW, motifH);
  }

  p3(){
    super.controller(); // コントローラ表示
    image(this.motif, 0, 0);
    
    for(let j = 0; j < height; j += (this.motifH * 4)){
      for(let i = 0; i < width - 150; i += (this.motifW * 2)){ 
        for(let k = 0; k < 3; k++){
          //中心を原点として、120度ずつ回転
          push();
          translate(i, j);
          translate(this.motifW/2, this.motifH); // 平行四辺形の横幅は三角形の2倍なので、六角形の中心に原点を置くには、平行四辺形の横幅の1/2
          rotate(120*k);
          translate(-this.motifW/2, -this.motifH);
          image(this.motif, 0, 0);
          pop();
        }

        
        for(let k = 0; k < 3; k++){
          //中心を原点として、120度ずつ回転
          push();
          translate(i, j);
          translate(this.motifW, this.motifH*3);
          rotate(120*k);
          translate(-this.motifW/2, -this.motifH);
          image(this.motif, 0, 0);
          pop();
        }
      }
    }
  }

  p31m(){
    super.controller(); // コントローラ表示
    /*
    for(let j = 0; j < height; j += (this.motifH * 2)){
      for(let i = 0; i < width - 200; i += (this.motifW * 2)){ 
        for(let k = 0; k < 4; k++){
          //中心を原点として、90度ずつ回転
          push();
          translate(i, j);
          translate(this.motifW, this.motifH);
          rotate(90*k);
          translate(-this.motifW, -this.motifH);
          image(this.motif, 0, 0);

          // x軸方向に線対称
          translate(this.motifW, this.motifH);
          scale(cos(60), -sin(60));
          image(this.motif, 0, 0);
          pop();
        }
      }
    }*/
  }

  p3m1(){
    super.controller(); // コントローラ表示
  }

}