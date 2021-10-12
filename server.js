// express 모듈 불러오기
const express = require("express");

// express 객체 생성
const app = express();

// 기본 포트를 app 객체에 설정
const port = process.env.PORT || 5000;
app.listen(port);

// file 읽어오기
const fs = require("fs");
let db = fs.readFileSync("db.json", "utf-8");

// 미들웨어 함수를 특정 경로에 등록
// app.use('/api/data', function(req, res) {
//     res.json({ greeting: 'Hello World' });
// });

app.get("/users", function (req, res) {
  const DB = JSON.parse(db).users;
  res.json(DB);
});

console.log(`server running at http ${port}`);
