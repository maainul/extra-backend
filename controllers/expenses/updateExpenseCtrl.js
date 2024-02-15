import { logger } from '../../middleware/logMiddleware.js';
import ExpenseModel from '../../models/Expense.js';
import validationLog from '../../utils/validationLog.js';
import MValidator from '../../validator/MValidator.js';


// validation Rules
const validationRules = {
    amount: {
        type: 'number',
        required: [true, 'Amount is required'],
    },
    date: {
        type: 'string',
        required: [true, 'Date is required']
    },
    description: {
        type: 'string',
    },
    category: {
        type: 'string',
        enum: ['credit', 'debit'],
        required: true
    },
    expenseType: {
        type: 'string',
        ref: 'ExpenseType',
        required: true,
    },
}

export const updateExpense = async (req, res) => {
    try {
        const { id } = req.params.id
        const { amount, date, description, category, expenseType } = req.body
        logger.info(`Request data ==> \n ${JSON.stringify(req.body, null, 2)}`);

        const expense = await ExpenseModel.findById(id)
        logger.info(`Get expense By Id : \n ${expense}`)
        if (!expense) {
            return res.status(404).send({
                success: false,
                message: 'Expense not found',
            });
        }
        // Update req.body with existing data
        req.body = {
            amount: amount || expense?.amount,
            date: date || expense?.date,
            description: description || expense?.description,
            category: category || expense?.category,
            expenseType: expenseType || expense?.expense
        }

        const validationResult = await MValidator(req, validationRules, ExpenseModel)
        validationLog(validationResult)

        if (!validationResult.isValid) {
            return res.status(400).send({
                success: false,
                message: 'Validation Failed',
                errors: validationResult.errors

            })
        }

        const updatedExp = await ExpenseModel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        logger.info(`Expense updated successfully :\n ${updatedExp}`)

        return res.status(200).send({
            success: true,
            message: 'Your Expense has been updated',
            data: updatedExp
        })

    } catch (error) {
        console.error('Error In Update Expense API:', error)
        const status = error.status || 500

        return res.status(status).send({
            success: false,
            message: 'Error In Update Expense API',
            error: error.message || error,
        })
    }
}
