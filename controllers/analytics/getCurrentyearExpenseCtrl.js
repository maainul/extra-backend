import { logger } from "../../middleware/logMiddleware.js";
import { serv } from './../../service/services.js';

// Get Current Year Expense
export const getCurrentyearExpenseCtrl = async (req, res) => {
    try {

        const curYearExp = await serv.analyticsService.getCurYearExp(-1)
        logger.info(`Get Daily Expenses data ==> \n ${curYearExp}`);

        return res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: curYearExp
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