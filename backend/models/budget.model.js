const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minLength: 5,
            maxLength: 50
        },
        description: {
            type: String,
            required: true
        },
        cost: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true,
    });

    const Budget = mongoose.model('Budget', budgetSchema);

    module.exports = Budget;