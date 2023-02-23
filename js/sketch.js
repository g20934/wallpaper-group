// G20934 Mio Ojima
let motifP; // 長方形のモチーフ画像
let motifCM; // ひし形のモチーフ画像(cm用)
let motifCMM; // ひし形のモチーフ画像(cmm用)
let motifP3; // 120度回転して六角形を作成する用のモチーフ画像
let motifP4; // 正方形のモチーフ画像
let motifP6; // 60度回転して六角形を作成する用のモチーフ画像

let primitive; // 長方形の繰り返し方クラス
let centeredM; // ひし形の繰り返し方クラス(cm)
let centeredMM; // ひし形の繰り返し方クラス(cmm)
let p3; // 120度回転で作成した六角形の繰り返し方クラス
let p4; // 正方形の繰り返し方クラス(p4, p4g)
let p6; // 60度回転で作成した六角形の繰り返し方クラス


function preload(){
  // モチーフの画像を読み込む
  motifP = loadImage("picture/motifP.png");
  motifCM = loadImage("picture/motifCM.png");
  motifCMM = loadImage("picture/motifCMM.png");
  motifP3 = loadImage("picture/motifP3.png");
  motifP4 = loadImage("picture/motifP4.png");
  motifP6 = loadImage("picture/motifP6.png");

}

function setup(){
  createCanvas(500, 400); // 500*400のキャンバス作る
  primitive = new Primitive(motifP, motifP.width, motifP.height); // 長方形の文様群クラスをインスタンス化
  primitive.controller(); // どのパターンで模様を描くか選べるコントローラーを描く

  // 文様群クラスをインスタンス化
  centeredM = new CenteredM(motifCM, motifCM.width, motifCM.height); // ひし形の文様群クラス(cm)
  centeredMM = new CenteredMM(motifCMM, motifCMM.width, motifCMM.height); // ひし形の文様群クラス(cmm)
  p3 = new Primitive3(motifP3, motifP3.width, motifP3.height); // 120度回転で作成した六角形の文様群クラス
  p4 = new Primitive4(motifP4, motifP4.width, motifP4.height); // 正方形の文様群クラス
  p6 = new Primitive6(motifP6, motifP6.width, motifP6.height); // 60度回転で作成した六角形の文様群クラス

  // 角度の指定方法を弧度法から度数法にする
  angleMode(DEGREES);
}

function draw(){
}

// クリックした位置によって、モチーフの繰り返し方を変える
function mousePressed(){
  if(400 <= mouseX && mouseX <= 500){
    clear();
    if(0 * 23 < mouseY && mouseY < 1 * 23){
      primitive.p1();
    }else if(1 * 23 < mouseY && mouseY < 2 * 23){
      primitive.pm();
    }else if(2 * 23 < mouseY && mouseY < 3 * 23){
      primitive.pg();
    }else if(3 * 23 < mouseY && mouseY < 4 * 23){
      primitive.p2();
    }else if(4 * 23 < mouseY && mouseY < 5 * 23){
      primitive.pmm();
    }else if(5 * 23 < mouseY && mouseY < 6 * 23){
      primitive.pmg();
    }else if(6 * 23 < mouseY && mouseY < 7 * 23){
      primitive.pgg(); // 実装できていない
    }else if(7 * 23 < mouseY && mouseY < 8 * 23){
      centeredM.cm();
    }else if(8 * 23 < mouseY && mouseY < 9 * 23){
      centeredMM.cmm();
    }else if(9 * 23 < mouseY && mouseY < 10 * 23){
      p3.p3();
    }else if(10 * 23 < mouseY && mouseY < 11 * 23){
      p3.p31m(); // 実装できていない
    }else if(11 * 23 < mouseY && mouseY < 12 * 23){
      p3.p3m1(); // 実装できていない
    }else if(12 * 23 < mouseY && mouseY < 13 * 23){
      p4.p4();
    }else if(13 * 23 < mouseY && mouseY < 14 * 23){
      p4.p4m();
    }else if(14 * 23 < mouseY && mouseY < 15 * 23){
      p4.p4g();
    }else if(15 * 23 < mouseY && mouseY < 16 * 23){
      p6.p6();
    }else if(16 * 23 < mouseY && mouseY < 17 * 23){
      p6.p6m();
    }
  }
}