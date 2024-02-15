import { logger } from "../../middleware/logMiddleware.js";
import ExpenseModel from "../../models/Expense.js";

export const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        await ExpenseModel.findByIdAndDelete(id);
        return res.status(200).send({
            success: true,
            message: 'Your Expense has been successfully Deleted',
        });
    } catch (error) {
        logger.error('Error In Delete Expense API:', error);
        const status = error.status || 500;
        return res.status(status).send({
            success: false,
            message: 'Error In Delete Expense API',
            error: error.message || error,
        });
    }
};
