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
const db = fs.readFileSync("db.json", "utf-8");

app.use(bodyParser.json());

app.post("/user/login", function (req, res) {
  try {
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
  } catch (e) {
    console.log(e);
  }
});

app.get("/user/:userName", function (req, res) {
  try {
    const userName = req.params.userName;
    const DB = JSON.parse(db).users;

    if (userName == null) {
      res.status(400).send({
        message: "Invalid username supplied",
      });
    } else {
      let selectedUser = null;
      DB.forEach((user) => {
        if (user.userName == userName) {
          delete user.password;
          selectedUser = user;
          return false;
        }
      });

      // null 일 때 확인
      if (!selectedUser) {
        res.status(404).send({
          message: "User not found",
        });
      } else {
        res.status(200).send(selectedUser);
      }
    }
  } catch (e) {
    console.log(e);
  }
});

console.log(`server running at http ${port}`);
