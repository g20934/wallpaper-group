// ひし形(三角形2つ)
class CenteredMM extends Monyogun{
  constructor(motif, motifW, motifH){
    super(motif, motifW, motifH);
  }

  // モチーフ画像を2方向(x方向, y方向)鏡映する
  cmm(){
    super.controller(); // コントローラ表示

    noFill();
    stroke(255, 0, 0); // 赤色

    for(let j = 0; j < height; j += (this.motifH * 2)){
      for(let i = 0; i < width - 150; i += (this.motifW * 2)){ // 見づらいため, x軸方向の間隔を2倍に
        
        // 元の画像
        image(this.motif, i, j);
        // triangle(, this.motifH, this.motifW, 0, this.motifW, this.motifH);

        // x軸方向に鏡映
        push();
        translate(i, this.motifH+j); // 平行移動
        super.mirrorX(); // 線対称
        // triangle(0, this.motifH, this.motifW, 0, this.motifW, this.motifH);
        pop();

        // y軸方向に鏡映
        push();
        translate(this.motifW/2+i, j); // 平行移動
        super.mirrorY(); // 線対称
        // triangle(0, this.motifH, this.motifW, 0, this.motifW, this.motifH);
        pop();

        // x, y軸方向に鏡映
        push();
        translate(this.motifW/2+i, this.motifH+j); // 平行移動
        super.mirrorXY();
        // triangle(0, this.motifH, this.motifW, 0, this.motifW, this.motifH);
        pop();
      }
    }
  }
}