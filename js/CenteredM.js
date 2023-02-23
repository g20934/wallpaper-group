// ひし形(三角形2つ)
class CenteredM extends Monyogun{
  constructor(motif, motifW, motifH){
    super(motif, motifW, motifH);
  }

  // モチーフ画像をy軸方向に線対称(鏡映)
  cm(){
    super.controller(); // コントローラ表示

    for(let j = 0; j < height - 50; j += this.motifH){
      for(let i = 0; i < width - 200; i += (this.motifW *2)){
        // 元の画像
        image(this.motif, i, j);
        
        // noFill();
        // stroke(255, 0, 0); // 赤色
        // triangle(i, this.motifH/2+j, this.motifW+i, j, this.motifW+i, this.motifH+j);

        // x軸方向に線対称(鏡映)
        push();
        translate(i+23, j); // 平行移動(x軸方向が重なって表示されてしまうため, 23px平行移動した)
        super.mirrorY(); // 線対称
        // triangle(i, this.motifH/2+j, i+this.motifW, j, i+this.motifW, j+this.motifH);
        pop();

        // 平行移動した先の左側の画像
        image(this.motif, i+this.motifW, j+this.motifH/2);
        // triangle(this.motifW+i, this.motifH+j, 2*this.motifW+i, this.motifH/2+j, 2*this.motifW+i, this.motifH*1.5+j);

        // 平行移動した先の左側の画像を, x軸方向に線対称し, 右側の画像を表示
        push();
        translate(i+this.motifW+23,  j+this.motifH/2); // 平行移動(x軸方向が重なって表示されてしまうため, 13px平行移動した)
        super.mirrorY(); // 線対称
        // triangle(i, this.motifH/2+j, this.motifW+i, j, this.motifW+i, this.motifH+j);
        pop();
      }
    }
  }
}