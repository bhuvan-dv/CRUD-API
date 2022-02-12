const { Schema, model } = require("mongoose");
const StudentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    std_id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      reuired: true,
    },
    courses: {
      type: [""],
      required: true,
      default: ["javafullstack","MERN stack"],
    },
  },
  { timestamps: true }
);
module.exports = model("student", StudentSchema);
