import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    studentName: String,
    registrationNumber: String,
    gender: String,
    image: String,
    prefrences: [{ type: String }],
});

const userModel = mongoose.model('hostelapplications', userSchema);

export default userModel;