
import { Router } from 'express'
import { controller } from '../controllers/controller.js';


const router = Router()


// EXPENSE 
router.post('/create', controller.expenseCtrl.createExpense)
router.post('/read/all', controller.expenseCtrl.getAllExpense)
router.get('/read/:id', controller.expenseCtrl.getExpenseById)
router.put('/update/:id', controller.expenseCtrl.updateExpense)
router.delete('/delete/:id', controller.expenseCtrl.deleteExpense)

export default router
