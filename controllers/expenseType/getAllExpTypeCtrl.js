import { serv } from './../../service/services.js';

export const getAllExpTypeCtrl = async (req, res) => {
    try {
        const expeTyps = await serv.expenseTypeService.getAllExpTypeServ({ req })
        return res.status(200).send({
            success: true,
            expTypeCount : expeTyps.totalExpTyps,
            message: 'Get all expense Type successfully',
            numOfPage: expeTyps.numOfPage,
            data: expeTyps.expTyps
        });
    } catch (error) {
        console.error('Error In Get Expense Type API:', error);
        const status = error.status || 500;

        return res.status(status).send({
            success: false,
            message: 'Error In get all expense Type',
            error: error.message || error,
        });
    }
};

