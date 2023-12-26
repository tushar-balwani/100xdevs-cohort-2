const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, userValidation, courseValidation } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  data = { username, password };

  // schema validation
  if (!userValidation(data)) {
    return res.status(400).json({ error: "Error: Validation Failed" });
  }

  // check user already exist
  const isExist = await Admin.findOne({ username });
  if (isExist) {
    return res.status(400).json({ error: "Error: User already exist" });
  }

  // create user
  try {
    Admin.create(data);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }

  return res.status(201).json({ message: "Admin created successfully" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const { username, password } = req.header;

  const payload = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
  };

  if (!courseValidation(payload)) {
    return res.status(400).json({ error: "Error: Validation Failed" });
  }

  try {
    const course = await Course.create(payload);

    return res.status(201).json({
      message: "Course created successfully",
      courseId: course?._id,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      error: err,
    });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  try {
    const courses = await Course.find();
    return res.status(200).json({ data: courses });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: err });
  }
});

module.exports = router;
