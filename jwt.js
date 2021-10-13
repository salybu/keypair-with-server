const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

module.exports = {
  // access token 발급
  sign: (user) => {
    // access token 에 들어갈 payload
    const payload = {
      id: user.userName,
    };

    return jwt.sign(payload, secret, {
      algorithm: "HS256", // 암호화 알고리즘
      expiresIn: 3600, // 유효기간
    });
  },
  verify: (token) => {
    let decoded = null;
    try {
      decoded = jwt.verify(token, secret);
      return {
        ok: true,
        userName: decoded.id,
      };
    } catch (err) {
      return {
        ok: false,
        message: err.message,
      };
    }
  },
};
