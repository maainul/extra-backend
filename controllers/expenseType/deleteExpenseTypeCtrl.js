import { logger } from "../../middleware/logMiddleware.js";
import { serv } from "../../service/services.js";




export const deleteExpenseTypeCtrl = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(500).send({
                success: false,
                message: "Please Provide Expense Type ID"
            })
        }

        const expTyps = await serv.expenseTypeService.getExpenseTypeByIdServ({ id })
        if (!expTyps) {
            return res.status(500).send({
                success: true,
                message: "No Expense Tye Found with this id "
            })
        }

        await serv.expenseTypeService.deleteExpenseTypeServ({ id })
        logger.info(`Expense Type Deleted`)
        return res.status(200).send({
            success: true,
            message: 'Expense Type updated successfully',
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