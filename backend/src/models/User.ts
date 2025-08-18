import mongoose, { Schema } from 'mongoose';
import { UserAccount } from '../types/index';

const UserAccountSchema = new Schema<UserAccount>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    profileImage: {
        type: String,
        default: ""
    }
});

const User = mongoose.model("User", UserAccountSchema);
export default User;