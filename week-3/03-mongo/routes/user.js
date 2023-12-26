const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, userValidation, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  data = { username, password };

  // schema validation
  if (!userValidation(data)) {
    return res.status(400).json({ error: "Error: Validation Failed" });
  }

  // check user already exist
  const isExist = await User.findOne({ username });
  if (isExist) {
    return res.status(400).json({ error: "Error: User already exist" });
  }

  // create user
  try {
    User.create(data);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }

  res.status(201).json({
    message: "User created successfully",
  });
});

router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    return res.status(200).json({ data: courses });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: err });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const { courseId } = req.params;
  const { user } = req.body;

  if (!mongoose.Types.ObjectId.isValid(courseId))
    return res.status(400).json({ message: "Invalid course id" });

  // find course
  const course = await Course.findById(courseId);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  try {
    await User.findByIdAndUpdate(user?._id, {
      $push: { courses: course?._id },
    });
    return res.status(201).json({ message: "Course purchased successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  try {
    const id = req.body.user._id;
    const user = await User.findById(id).populate("courses");
    return res.json(user.courses);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
