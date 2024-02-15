import { Router } from 'express'
import userRouter from './userRoutes.js'
import authRouter from './authRoutes.js'
import expenseRouter from './expensesRoutes.js'
import analyticsRouter from './analyticsRoutes.js'
import expenseTypeRouter from './expenseTypeRoutes.js'
import { adminMiddleware, authMiddleware } from './../middleware/authMiddleware.js';


const router = Router()

// EXPENSE 
router.use('/expense', expenseRouter)
// EXPENSE TYPE
router.use('/expense-type', expenseTypeRouter)
// USER
router.use('/user', userRouter)
// AUTH
router.use('/auth', authRouter)
// ANALYTICS
router.use('/analytics', analyticsRouter)


// PROTECTED ROUTES (USER) : (PRIVATE ROUTE CONFIRM)
router.get('/auth/user-auth', authMiddleware, (req, res) => {
    res.status(200).send({ ok: true })
})


// PROTECTED ADMIN ROUTES : (PRIVATE ROUTE CONFIRM)
router.get('/auth/admin-auth', authMiddleware, adminMiddleware, (req, res) => {
    res.status(200).send({ ok: true })
})


export default router
