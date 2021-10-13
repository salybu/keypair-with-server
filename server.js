// express 모듈 불러오기
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const jwt = require("./jwt");

// express 객체 생성
const app = express();

// 기본 포트를 app 객체에 설정
const port = process.env.PORT || 5000;
app.listen(port);

// file 읽어오기
const fs = require("fs");
let db = fs.readFileSync("db.json", "utf-8");

app.use(bodyParser.json());

app.post("/user/login", function (req, res) {
  const login = req.body;
  const DB = JSON.parse(db).users;

  let loginSuccess = false;
  DB.forEach((user) => {
    if (login.userName == user.userName && login.password == user.password) {
      loginSuccess = true;
      return false;
    }
  });

  if (loginSuccess) {
    const accessToken = jwt.sign(login);

    res.status(200).send({
      tokenType: "Bearer",
      expiresIn: 3600,
      accessToken,
    });
  } else {
    res.status(400).send({
      message: "Invalid username/password supplied",
    });
  }
});

app.get("/users", function (req, res) {
  const DB = JSON.parse(db).users;
  res.json(DB);
});

console.log(`server running at http ${port}`);
