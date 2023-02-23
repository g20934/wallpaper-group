// 正方形
class Primitive4 extends Monyogun{
  constructor(motif, motifW, motifH){
    super(motif, motifW, motifH);
  }

  p4(){
    super.controller(); // コントローラ表示

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
          pop();
        }
      }
    }
  }

  p4m(){
    super.controller(); // コントローラ表示

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
          translate(0, this.motifH);
          super.mirrorX();
          pop();
        }
      }
    }
  }

  // 90度回転
  /*
  p4(){
    super.controller(); // コントローラ表示

    for(let j = 0; j < height; j += (this.motifH * 2)){
      for(let i = 0; i < width - 200; i += (this.motifW * 2)){ 

      // 元の画像
      image(this.motif, i, j);

      // 90, 180, 270度回転させた画像
      push();
      translate(i, j); // 平行移動
      translate(this.motifW*2, 0); // 画像の横幅2倍分移動した場所で回転するイメージ
      rotate(90); // 90度回転
      image(this.motif, 0, 0);
      pop();

      push();
      translate(i, j); // 平行移動
      translate(this.motifW*2, this.motifH*2);
      rotate(180); // 180度回転
      image(this.motif, 0, 0);
      pop();

      push();
      translate(i, j); // 平行移動
      translate(0, this.motifH*2);
      rotate(270); // 270度回転
      image(this.motif, 0, 0);
      pop();

      }
    }
  }*/

  
  // 正方形を90度, 180度, 270度回転した後、すべり鏡映 
  p4g(){
    super.controller(); // コントローラ表示

    for(let j = 0; j < height; j += (this.motifH * 4)){
      for(let i = 0; i < width - 200; i += (this.motifW * 4)){ 
        // 元の画像&斜め方向に平行移動した画像
        push();
        translate(i, j); // 平行移動
        image(this.motif, 0, 0);
        translate(this.motifW*2, this.motifH*2); // 画像の横幅分*2右に, 縦幅分*2下に平行移動
        image(this.motif, 0, 0);
        pop();
        // x軸方向にすべり鏡映(横方向)
        push();
        translate(i, j); // 平行移動
        translate(this.motifW * 2, this.motifH); // 画像の横幅分*2右に, 縦幅分下に平行移動
        super.mirrorX(); // 線対称
        pop();
        // x軸方向にすべり鏡映(縦方向)
        push();
        translate(i, j); // 平行移動
        translate(0, this.motifH*3);
        super.mirrorX(); // 線対称
        pop();

        // 90度回転させた画像&斜め方向に平行移動した画像
        push();
        translate(i, j); // 平行移動
        translate(this.motifW*2, 0); // 画像の横幅2倍分移動した場所で回転するイメージ
        rotate(90); // 90度回転
        image(this.motif, 0, 0);

        translate(this.motifW*2, this.motifH*2); // 画像の横幅分*2右に, 縦幅分*2下に平行移動
        image(this.motif, 0, 0);
        pop();
        // x軸方向にすべり鏡映(横方向)
        push();
        translate(i, j); // 平行移動
        translate(this.motifW * 3, 0); // 画像の横幅分*3右に平行移動
        rotate(90); // 90度回転
        super.mirrorX(); // 線対称
        pop();
        // x軸方向にすべり鏡映(縦方向)
        push();
        translate(i, j); // 平行移動
        translate(this.motifW, this.motifH*2);
        rotate(90); // 90度回転
        super.mirrorX(); // 線対称
        pop();

        // 180度回転させた画像&斜め方向に平行移動した画像
        push();
        translate(i, j); // 平行移動
        translate(this.motifW*2, this.motifH*2);
        rotate(180); // 180度回転
        image(this.motif, 0, 0);

        translate(this.motifW*2, this.motifH*2); // 画像の横幅分*2右に, 縦幅分*2下に平行移動
        image(this.motif, 0, 0);
        pop();
        // x軸方向にすべり鏡映(横方向)
        push();
        translate(this.motifW*4, this.motifH); // 画像の横幅分*3右に平行移動
        translate(i, j); // 平行移動
        rotate(180); // 180度回転
        super.mirrorX(); // 線対称
        pop();
        // x軸方向にすべり鏡映(縦方向)
        push();
        translate(i, j); // 平行移動
        translate(this.motifW*2, this.motifH*3);
        rotate(180); // 180度回転
        super.mirrorX(); // 線対称
        pop();

        
        // 270度回転させた画像&斜め方向に平行移動した画像
        push();
        translate(i, j); // 平行移動
        translate(0, this.motifH*2);
        rotate(270); // 270度回転
        image(this.motif, 0, 0);

        translate(this.motifW*2, this.motifH*2); // 画像の横幅分*2右に, 縦幅分*2下に平行移動
        image(this.motif, 0, 0);
        pop();
        // x軸方向にすべり鏡映(横方向)
        push();
        translate(this.motifW*3, this.motifH*2); // 画像の横幅分*3右に平行移動
        translate(i, j); // 平行移動
        rotate(270); // 270度回転
        super.mirrorX(); // 線対称
        pop();
        // x軸方向にすべり鏡映(縦方向)
        push();
        translate(this.motifW*1, this.motifH*4); // 画像の横幅分*3右に平行移動
        translate(i, j); // 平行移動
        rotate(270); // 270度回転
        super.mirrorX(); // 線対称
        pop();


      }
    }
  }
}