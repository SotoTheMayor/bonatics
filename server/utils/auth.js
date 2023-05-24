const jwt = require("jsonwebtoken");

const secret = "plantsRcool";
const expiration = "24h";

module.exports = {
  authMiddleware: function ({ req }) {
    // send token via req.body.token or the following 
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }
    // verify token and get user data
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("invalid token");
    }

    return req;
  },

  signToken: function ({ userName, email, _id }) {
    const payload = { userName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
