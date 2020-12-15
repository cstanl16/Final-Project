const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minLength: 1,
            maxLength: 50
        },
        
        password: {
            type: String,
            required: true,
            trim: true,
            minLength: 1,
            maxLength: 255
        },
    },
    {
        timestamps: true,
    });

    const User = mongoose.model('User', userSchema);

    module.exports = User;