class Monyogun{
  constructor(motif, motifW, motifH){
    this.motif = motif;
    this.motifW = motifW; // モチーフ画像の横幅
    this.motifH = motifH; // モチーフ画像の縦幅
    this.monyogunName = ["p1", "pm", "pg", "p2", "pmm", "pmg", "pgg", "cm", "cmm", "p3", "p31m", "p3m1", "p4", "p4m", "p4g", "p6", "p6m"];
  }

  // どの方法で繰り返すか選択する場所を描く
  controller(){
    fill(255);
    stroke(0);
  
    for(let i = 0; i < 17; i++){
      rect(400, i * 23, 90, 23);
    }
  
    fill(0);
    textAlign(CENTER);
    textSize(15);
    for(let i = 0; i < 17; i++){
      text(this.monyogunName[i], 450, 15+23*i);
    }
  }

  // x軸方向に線対称して画像を描く
  mirrorX(){
    translate(0, this.motifH);
    scale(1, -1);
    image(this.motif, 0, 0);
  }

  // y軸方向に線対称して画像を描く
  mirrorY(){
    translate(this.motifW*1.5, 0);
    scale(-1, 1);
    image(this.motif, 0, 0);
  }

  // x, y軸方向に線対称して画像を描く
  mirrorXY(){
    translate(this.motifW*1.5, this.motifH);
    scale(-1, -1);
    image(this.motif, 0, 0);

  }
}