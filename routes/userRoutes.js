
import { Router } from 'express'
import { controller } from '../controllers/controller.js'


const router = Router()

// USER
router.put('/update/:id', controller.userCtrl.updateUserCtrl)
router.get('/list', controller.userCtrl.listUserCtrl)
router.get('/info', controller.userCtrl.getUserInfoCtrl)

// USER SUBSCRIPTION
router.post('/subscribe', controller.userCtrl.subscribeUserCtrl)
router.post('/verify', controller.userCtrl.verifyUserCtrl)
router.post('/unsubscribe', controller.userCtrl.unSubscribeUserCtrl)




export default router
