import { logger } from "../../middleware/logMiddleware.js";
import { serv } from "../../service/services.js";




export const getExpTypeByIdCtrl = async (req, res) => {
    try {
        logger.info(`Controller : getExpTypeByIdCtrl :: Start Execution`)
        const { id } = req.params.id
        if (!id) {
            return res.status(404).send({
                success: false,
                message: "Please Provide ID"
            })
        }
        logger.info(`Expesne Type Id Get Successfully`)
        const expeTyp = await serv.expenseTypeService.getExpenseTypeByIdServ({ id })
        if (!expeTyp) {
            return res.status(404).send({
                success: false,
                message: 'No Expense Type Info Found with this id'
            })
        }

        logger.info(`Expense Type data ==> \n ${expeTyp}`)
        return res.status(200).send({
            success: true,
            message: 'Get expense Type By ID successfully',
            data: expeTyp
        });
    } catch (error) {
        console.error('Error In Get Expense Type API:', error);
        const status = error.status || 500;

        return res.status(status).send({
            success: false,
            message: 'Error In Get Expense Type API:',
            error: error.message || error,
        });
    }
};