import UserSchema from '../models/userModels.js'

export const addStudent = async (req, res, next) => {
    const { studentName, registrationNumber, gender, prefrences } = req.body
    // console.log(req.body)
    const newStudent = new UserSchema({
        studentName: studentName,
        registrationNumber: registrationNumber,
        gender: gender,
        prefrences: prefrences,
        image: req.file.path

    })
    try {
        await newStudent.save()
    } catch (err) {
        console.log(err)
    }

    res.json({ message: "New student Added" });
}

export const fetchStudent = async (req, res, next) => {
    let students

    try {
        students = await UserSchema.find()
    } catch (err) {
        console.log(err)
    }

    res.json({ students })
}

export const fetchStudentById = async (req, res, next) => {
    let student
    const id = req.params.id
    console.log(id)
    try {
        student = await UserSchema.findById(id)
    } catch (err) {
        console.log(err)
    }

    res.json({ student })
}

export const deleteStudent = async (req, res, next) => {

    const id = req.params.id
    try {
        await UserSchema.findByIdAndDelete(id)
    } catch (error) {
        console.log(error)
    }
    res.json({ message: "user deleted" })
}