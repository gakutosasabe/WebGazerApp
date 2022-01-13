const express = require('express');
const app = express();

var log4js = require('log4js');
var logger = log4js.getLogger();


app.use(express.static(__dirname + '/WebContents'));     // static:静的ファイル群のルートパスを指定

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

logger.level = 'all';
logger.debug("サンプル出力です");

app.listen(3000);