import bcrypt from "bcryptjs";
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    roles: {
        type: [String], // array of roles
        enum: ['Frontend', 'Backend', 'DevOps', 'Fullstack', 'AI', 'QA', 'Other'], // optional enum
        default: [],
    },
    experience: String,
    pinnedQuestions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
}, {
  timestamps: true
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next();
    }
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    const isPasswordCorrect = await bcrypt.compare(enteredPassword, this.password);
    return isPasswordCorrect;
};

const User = mongoose.model("User", userSchema);

export default User;
