import { serv } from '../../service/services.js';
import ExpenseModel from '../../models/Expense.js';
import MValidator from './../../validator/MValidator.js';
import { logger } from '../../middleware/logMiddleware.js';
import validationLog from './../../utils/validationLog.js';


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

export const createExpense = async (req, res) => {
    try {
        const { amount, date, description, category, expenseType, userid } = req.body
        logger.info(`Request data ==> \n ${JSON.stringify(req.body)}`)
        const validationResut = await MValidator(req.body, validationRules, ExpenseModel)
        validationLog(validationResut)
        if (!validationResut.isValid) {
            return res.status(201).send({
                success: false,
                message: 'Validation Failed',
                errors: validationResut.errors
            })
        }
        const inputObj = {
            amount,
            date,
            description,
            category,
            expenseType,
            userid
        }
        const expense = await serv.expensesService.createExpenseServ(inputObj)
        logger.info(`Expense Type Added Successfully :\n ${JSON.stringify(expense)}`)
        return res.status(201).send({
            success: true,
            message: 'Expense Added Successfully',
            data: expense
        })

    } catch (error) {
        console.error('Error In Create Expense API:', error)
        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In Create Expense API',
            error: error.message || error,
        })
    }
}
