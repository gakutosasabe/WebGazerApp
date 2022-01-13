var gaze_x = 0;
var gaze_y = 0;
var str = "";
const date1 = new Date();

webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    var xprediction = data.x;
    var yprediction = data.y;
    console.log("time = " + elapsedTime);
    gaze_x = data.x;
    gaze_y = data.y;

    str = str + "\n" + "x=" + gaze_x + " y=" + gaze_y;

    console.log("x =" + data.x);
    console.log("y = "+ data.y);
    //webgazer.params.showGazeDot = true;
}).begin();

function buttonClick(){
    let ary = str.split(''); // 配列形式に変換（後述のBlobで全要素出力）
    let blob = new Blob(ary,{type:"text/plan"}); // テキスト形式でBlob定義
    let link = document.createElement('a'); // HTMLのaタグを作成
    link.href = URL.createObjectURL(blob); // aタグのhref属性を作成
    link.download = 'GazeLog.txt'; // aタグのdownload属性を作成
    link.click(); // 定義したaタグをクリック（実行）
  }
