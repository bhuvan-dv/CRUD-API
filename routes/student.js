const { Router } = require("express");
const {
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  createStudent,
} = require("../controllers/student");
const router = Router();

router.route("").post(createStudent).get(getAllStudents);
router.route("/:id").get(getStudent);
router.route("/:id").put(updateStudent);
router.route("/:id").delete(deleteStudent);
module.exports = router;
