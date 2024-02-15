import ExpenseModel from "../../models/Expense.js";


export const getExpenseById = async (req, res) => {
    try {
        const { Id } = req.params

        const expense = await ExpenseModel.findById(Id)
        if (!expense) {
            return res.status(404).send({
                success: false,
                message: ' Expense not found',
                data: expense
            })
        }

        logger.info(`Expenses data By Id==> \n ${expense}`);

        return res.status(200).send({
            success: true,
            message: 'Expense Found',
            data: expense
        })
    } catch (error) {
        console.error('Error In Get Expense', error)
        const status = error.status || 500

        return res.status(status).send({
            success: false,
            message: 'Error In Get Expense',
            error: error.message || error,
        })
    }
}
