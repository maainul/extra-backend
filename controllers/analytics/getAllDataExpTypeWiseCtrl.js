import { logger } from "../../middleware/logMiddleware.js";
import { serv } from "../../service/services.js";


export const getAllDataExpTypeWiseCtrl = async (req, res) => {
    try {
        const result = await serv.analyticsService.getExpTypeWiseService()
        logger.info(`Get Expense Type Wise Expense Data ===> ${result}`)
        return res.status(200).send({
            success: true,
            message: 'Get all expense type successfully',
            data: result
        })
    } catch (error) {
        logger.info(`Error in Get Expenes Type Wise Data`, error);
        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In Get Expense Type Wise Data',
            error: error.message || error
        })
    }
}
