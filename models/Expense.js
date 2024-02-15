import mongoose from "mongoose";


const expenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, 'Amount is required'],
        index: true
    },

    date_sl: {
        type: Number,
    },

    date: {
        type: Date,
        required: [true, 'Date is required']
    },

    description: {
        type: String,
    },

    category: {
        type: String,
        enum: ['credit', 'debit'],
        required: true
    },

    expenseType: {
        type: String,
        require: true
    },

    userid: {
        type: String,
        require: true
    }

}, { timestamps: true })

export default mongoose.model('Expense', expenseSchema)
