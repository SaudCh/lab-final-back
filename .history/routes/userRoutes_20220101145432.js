import express from "express";
import { addStudent, fetchStudent, deleteStudent, fetchStudentById } from "../controllers/userController.js";
import fileUpload from "../Middleware/fileUpload.js"

const router = express.Router()

router.post("/add", fileUpload.single('image'), addStudent)
router.get("/get", fetchStudent)
router.get("/get/:id", fetchStudentById)
router.delete("/delete/:id", deleteStudent)

export default router