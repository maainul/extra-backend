import { logger } from "../../middleware/logMiddleware.js"
import { serv } from "../../service/services.js"


// GET ALL expenses with Custom Parameters
export const getAllExpense = async (req, res) => {
    try {
        logger.info('Get All expense Controller Called')
        const { frequency, userid, firstDate, secondDate, categoryFilter, expenseTypeFilter } = req.body
        const inputObject = { frequency, userid, firstDate, secondDate, categoryFilter, expenseTypeFilter }
        const expenses = await serv.expensesService.getAllExpenseService(inputObject)
        res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: expenses
        })
    } catch (error) {
        console.error('Error In Get Expense API:', error)
        const status = error.status || 500

        return res.status(status).send({
            success: false,
            message: 'Error In get all expense',
            error: error.message || error,
        })
    }
}
