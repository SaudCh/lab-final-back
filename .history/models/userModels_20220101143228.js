import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    studentName: String,
    registrationNumber: String,
    gender: String,
    prefrences: [{ type: String }],
    image: String
});

const userModel = mongoose.model('hostelapplications', userSchema);

export default userModel;