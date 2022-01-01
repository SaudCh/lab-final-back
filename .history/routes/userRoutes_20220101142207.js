import express from "express";
import { addStudent, fetchStudent, updateStudent, deleteStudent } from "../controllers/userController.js";
import fileUpload from "../Middleware/fileUpload.js"

const router = express.Router()

router.post("/add", addStudent)
router.get("/get", fetchStudent)
router.patch("/update", fileUpload.single('image'), updateStudent)
router.delete("/delete/:id", deleteStudent)

export default router