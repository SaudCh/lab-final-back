import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    studentName: String,
    registrationNumber: String
});

const userModel = mongoose.model('hostelapplications', userSchema);

export default userModel;