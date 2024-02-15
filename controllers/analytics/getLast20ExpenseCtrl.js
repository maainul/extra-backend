import { serv } from './../../service/services.js';

// Get Top 20 Expenses 
export const getLast20ExpenseCtrl = async (req, res) => {
    try {
        const top10Expenses = await serv.analyticsService.getLastExpService(-1, 20)
        return res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: top10Expenses
        })
    } catch (error) {
        console.error('Error In Get Expense API', error);
        const status = error.status || 500;
        return res.status(status).send({
            success: false,
            message: 'Error In Get Expense API',
            error: error.message || error,
        });
    }
}
