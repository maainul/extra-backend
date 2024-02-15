
import { createExpense } from './createExpenseCtrl.js';
import { updateExpense } from './updateExpenseCtrl.js';
import { getAllExpense } from './getAllExpense.js';
import { getExpenseById } from './getExpenseyIdCtrl.js';
import { deleteExpense } from './deleteExpenseCtrl.js';

export const expenseCtrl = {
    createExpense,
    updateExpense,
    getAllExpense,
    getExpenseById,
    deleteExpense
}
