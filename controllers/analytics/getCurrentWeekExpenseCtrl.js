import { logger } from "../../middleware/logMiddleware.js";
import { dateUtils } from "../../utils/dateUtils.js";


// Get Current Expense Weekly From Saturday to Friday
export const getCurrentWeekExpenseCtrl = async (req, res) => {
    try {
        const dateRange = dateUtils.getCurrentWeeKRange()
        const curWeekexp = await serv.analyticsService.getCurrentWeekExpService(dateRange.startWeekTimestamp, dateRange.endWeekTimestamp)
        logger.info(`Get Daily Expenses data ==> \n ${curWeekexp}`);
        return res.status(200).send({
            success: true,
            message: 'Get all expense successfully',
            data: {
                startWeek: dateRange.startWeek,
                endWeek: dateRange.endWeek,
                startWeekTimestamp: dateRange.startWeekTimestamp,
                endWeekTimestamp: dateRange.startWeekTimestamp,
                expenses: curWeekexp
            }
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
