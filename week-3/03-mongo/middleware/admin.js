const { Admin, userValidation } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;

  // schema validation
  if (!userValidation({ username, password })) {
    return res.status(400).json({ error: "Error: Validation Failed" });
  }

  // check user already exist
  const admin = await Admin.findOne({ username });
  if (!admin) {
    return res.status(403).json({ error: "Invalid Credentials" });
  }

  req.body.admin = admin;
  next();
}

module.exports = adminMiddleware;
