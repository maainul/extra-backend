import { logger } from "../../middleware/logMiddleware.js";
import { serv } from './../../service/services.js';


// GET Categorywise Expenses
export const getAllCreditAndDebitCtrl = async (req, res) => {
    try {
        const catExp = await serv.analyticsService.getCatWiseExpService()
        logger.info(`Get Categorywise Expenses data ==> \n ${catExp}`);

        return res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: catExp
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
