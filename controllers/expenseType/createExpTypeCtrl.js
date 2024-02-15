import ExpenseTypeModel from "../../models/ExpenseType.js";
import validationLog from "../../utils/validationLog.js";
import MValidator from "../../validator/MValidator.js";
import { serv } from './../../service/services.js';

// Validation Rules
const validationRules = {
    name: {
        type: 'string',
        required: true,
        max: 50,
        min: 3,
        exists: [true, 'Expense Type with this name already exists']
    },
    icon: {
        type: 'string',
        required: true,
        min: 5
    },
}


export const createExpTypeCtrl = async (req, res) => {
    try {
        const { name, icon,userid } = req.body;
        // Validation
        const validationResult = await MValidator(req.body, validationRules, ExpenseTypeModel);
        // Validation log
        validationLog(validationResult)

        if (!validationResult.isValid) {
            return res.status(201).send({
                success: false,
                message: 'Validation Failed',
                errors: validationResult.errors
            });
        }

        // Save Data in Database
        const expenseType = await serv.expenseTypeService.createExpTypeServ({ name, icon,userid })
        console.log(`Expense Type Added Successfully :\n ${expenseType}`);

        return res.status(201).send({
            success: true,
            message: 'Expense Type Added Successfully',
            data: expenseType,
        });

    } catch (error) {
        console.error('Error In Create Expense Type:', error)
        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In Create Expense Type',
            error: error.message || error,
        });
    }
};
