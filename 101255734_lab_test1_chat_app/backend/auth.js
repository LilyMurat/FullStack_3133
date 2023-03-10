const jwt = require("jwt-then");

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw "Forbidden!!";
    const token = req.headers.authorization.split(" ")[1];
    const payload = await jwt.verify(token, "0okm9ijn8uhby");
    req.payload = payload;
    next();
  } catch (err) {
    res.status(401).json({
      message: "Forbidden ! ! !",
    });
  }
};
