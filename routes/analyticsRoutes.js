
import { Router } from 'express'
import { controller } from '../controllers/controller.js'


const router = Router()


// ANALYTICS

// GET | Daily Expense List 
router.get('/daily-expense', controller.analyticsCtrl.getDailyExpenseCtrl)

// GET | Top 10 Expense List 
router.get('/top-10-expense', controller.analyticsCtrl.getTop10ExpenseCtrl)

// Get  | Current Expense Weekly From Saturday to Friday
router.get('/current-week-expense', controller.analyticsCtrl.getCurrentWeekExpenseCtrl)

// Get | Current Month Expense
router.get('/current-month-expense', controller.analyticsCtrl.getCurrentMonthExpenseCtrl)

// GET | Current Year Expense
router.get('/current-year-expense', controller.analyticsCtrl.getCurrentyearExpenseCtrl)

// GET | Last 20 Expense
router.get('/last-20-expense', controller.analyticsCtrl.getLast20ExpenseCtrl)

// GET | GET Category Wise Expense
router.get('/credit-debit-expense', controller.analyticsCtrl.getAllCreditAndDebitCtrl)

// GET | GET Category Wise Expense
router.get('/expense-type-wise', controller.analyticsCtrl.getAllDataExpTypeWiseCtrl)




export default router
