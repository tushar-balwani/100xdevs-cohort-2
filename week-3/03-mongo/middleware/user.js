const { userValidation, User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;

  // schema validation
  if (!userValidation({ username, password })) {
    return res.status(400).json({ error: "Error: Validation Failed" });
  }

  // check user already exist
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(403).json({ error: "Invalid Credentials" });
  }

  req.body.user = user;
  next();
}

module.exports = userMiddleware;
