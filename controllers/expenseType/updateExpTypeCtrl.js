import { logger } from "../../middleware/logMiddleware.js";
import { serv } from "../../service/services.js";




export const updateExpTypeCtrl = async (req, res) => {
    try {
        const { id } = req.params
        const { name, icon } = req.body
        const updatedExpeTyps = await serv.expenseTypeService.updateExpenseTypeByIdServ({ id, name, icon })
        if (!updatedExpeTyps) {
            return res.status(500).send({
                success: true,
                message: "No Expnese Type Found"
            })
        }
        logger.info(`Expense Type data ==> \n ${updatedExpeTyps}`)
        return res.status(200).send({
            success: true,
            message: 'Expense Type updated successfully',
            data: updatedExpeTyps
        });
    } catch (error) {
        console.error('Error In update Expense Type API', error);
        const status = error.status || 500;

        return res.status(status).send({
            success: false,
            message: 'Error In update Expense Type API',
            error: error.message || error,
        });
    }
};