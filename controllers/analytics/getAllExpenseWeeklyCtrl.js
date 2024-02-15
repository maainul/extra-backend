import { logger } from "../../middleware/logMiddleware.js";


export const getAllExpenseWeeklyCtrl = async (req, res) => {
    try {
        const dateStr = dateUtils.dateToString(new Date())
        const dailyexp = await find({ date: dateStr })
        logger.info(`Get Daily Expenses data ==> \n ${dailyexp}`);

        return res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: dailyexp
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
