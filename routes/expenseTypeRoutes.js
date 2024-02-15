import { Router } from "express";
import { controller } from "../controllers/controller.js";
import { authMiddleware } from './../middleware/authMiddleware.js';

const router = Router()


// EXPENSE TYPE
router.post('/create', authMiddleware, controller.expenseTypeCtrl.createExpTypeCtrl)
router.get('/read/all', authMiddleware, controller.expenseTypeCtrl.getAllExpTypeCtrl)
router.get('/read/:id', authMiddleware, controller.expenseTypeCtrl.getExpTypeByIdCtrl)
router.put('/update/:id', authMiddleware, controller.expenseTypeCtrl.updateExpTypeCtrl)
router.delete('/delete/:id', authMiddleware, controller.expenseTypeCtrl.deleteExpenseTypeCtrl)

export default router