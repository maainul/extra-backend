import { logger } from "../../middleware/logMiddleware.js";
import { serv } from './../../service/services.js';

// Get Current Month Expense
export const getCurrentMonthExpenseCtrl = async (req, res) => {
    try {
        const expThisMonth = await serv.analyticsService.getCurMonthExpService();
        logger.info(`Get Daily Expenses data ==> \n ${expThisMonth}`);
        return res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: expThisMonth
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