const mongoose = require("mongoose");
const z = require("zod");

// Connect to MongoDB
// TODO: remove before commit
mongoose.connect("SOMETHING");

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageLink: { type: String, required: true },
});

function userValidation(data) {
  const schema = z.object({
    username: z.string(),
    password: z.string(),
  });
  const validate = schema.safeParse(data);
  return validate.success;
}

function courseValidation(data) {
  const schema = z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    imageLink: z.string(),
  });
  const validate = schema.safeParse(data);
  return validate.success;
}

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
  userValidation,
  courseValidation,
};
