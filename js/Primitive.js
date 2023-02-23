// 長方形
class Primitive extends Monyogun{
  constructor(motif, motifW, motifH){
    super(motif, motifW, motifH);
  }

  // モチーフ画像を平行移動(x軸方向はモチーフ画像の幅、y軸方向はモチーフ画像の幅の2倍分離れて平行移動)
  p1(){
    super.controller(); // コントローラ表示
    for(let j = 0; j < height; j += (this.motifH * 2)){
      for(let i = 0; i < width - 150; i += this.motifW){
        image(this.motif, i, j);
      }
    }
  }

  // モチーフ画像をx軸方向に線対称(鏡映)
  pm(){
    super.controller(); // コントローラ表示
    for(let j = 0; j < height; j += (this.motifH * 2)){
      for(let i = 0; i < width - 150; i += this.motifW){
        // 元の画像
        image(this.motif, i, j);

        // x軸方向に線対称(鏡映)
        push();
        translate(i, j); // 平行移動
        super.mirrorX(); // 線対称
        pop()
      }
    }
  }

  //  x軸方向にすべり鏡映
  pg(){
    super.controller(); // コントローラ表示

    for(let j = 0; j < height; j += (this.motifH * 2)){
      for(let i = 0; i < width - 150; i += (this.motifW * 2)){
        // 元の画像
        image(this.motif, i, j);

        // x軸方向にすべり鏡映(平行移動してから線対称)
        push();
        translate(this.motifW, 0); // 画像の横幅分右に平行移動
        translate(i, j); // 平行移動
        super.mirrorX(); // 線対称
        pop();
      }
    }
  }

  // 180度回転
  p2(){
    super.controller(); // コントローラ表示

    for(let j = 0; j < height; j += (this.motifH * 2)){
      for(let i = 0; i < width - 150; i += this.motifW){
        // 元の画像
        image(this.motif, i, j);

        // 180度回転させた画像
        push();
        translate(i, j); // 平行移動
        translate(this.motifW, this.motifH); // 画像の縦横分移動した場所で回転するイメージ
        rotate(180); // 180度回転
        image(this.motif, 0, 0);
        pop();
      }
    }
  }

  // 2方向(x方向, y方向)鏡映する
  pmm(){
    super.controller(); // コントローラ表示

    for(let j = 0; j < height; j += (this.motifH * 2)){
      for(let i = 0; i < width - 150; i += (this.motifW * 2)){ // 見づらいため, x軸方向の間隔を2倍に
        // 元の画像
        image(this.motif, i, j);
        

        // x軸方向に鏡映
        push();
        translate(i, j); // 平行移動
        super.mirrorX(); // 線対称
        pop();

        // y軸方向に鏡映
        push();
        translate(i, j); // 平行移動
        super.mirrorY(); // 線対称
        pop();

        // x, y軸方向に鏡映
        push();
        translate(i, j); // 平行移動
        super.mirrorXY();
        pop();
      }
    }
  }

  // x軸方向に線対称(鏡映), y軸方向にすべり鏡映
  pmg(){
    super.controller(); // コントローラ表示

    for(let j = 0; j < height; j += (this.motifH * 2)){
      for(let i = 0; i < width - 150; i += (this.motifW * 2)){
        // 元の画像
        image(this.motif, i, j);

        // x軸方向に鏡映
        push();
        translate(i, j); // 平行移動
        super.mirrorX(); // 線対称
        pop();

        // y軸方向にすべり鏡映(平行移動してから線対称)
        push();
        translate(0, this.motifH); // 画像の縦幅分下に平行移動
        translate(i, j); // 平行移動
        super.mirrorY(); // 線対称(上)
        super.mirrorX(); // 線対称(下)
        pop();
      }
    }
  }

  //
  pgg(){
    super.controller(); // コントローラ表
  }
}