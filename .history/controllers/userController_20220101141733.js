import UserSchema from '../models/userModels.js'

export const addStudent = async (req, res, next) => {
    const { studentName, registrationNumber } = req.body
    console.log(req.body)
    const newStudent = new UserSchema({
        studentName: studentName,
        registrationNumber: registrationNumber
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

export const updateStudent = async (req, res, next) => {
    const { studentName, registrationNumber, sid } = req.body
    try {
        await UserSchema.findByIdAndUpdate(sid, {
            studentName: studentName,
            registrationNumber: registrationNumber
        })
    } catch (error) {
        console.log(error)
    }
    res.json({ message: 'Student updated' })
}

export const deleteStudent = async (req, res, next) => {

    try {
        await UserSchema.findByIdAndDelete(req.params.id)
    } catch (error) {
        console.log(error)
    }
    res.json({ message: "user deleted" })
}