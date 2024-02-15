
import { Router } from 'express'
import { controller } from './../controllers/controller.js';
import { authMiddleware } from './../middleware/authMiddleware.js';


const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - username
 *        - email
 *        - password
 *      properties:
 *        id:
 *          type: string
 *          description: The Auto-generated id of user collection
 *          example : DHSASDHJDJHVAJDSVJAVSD
 *        username:
 *          type: string
 *          description: User name
 *        email:
 *          type: string
 *          description: user email address
 *        password:
 *          type: string
 *          description: user password should be greater then 6 character
 *      example:
 *        id: GDHJGD788BJBJ
 *        username: John
 *        email: johndoes@gmail.com
 *        password: test@123
 */

/**
 *  @swagger
 *  tags:
 *    name: Auth
 *    description: authentication apis
 */

/**
 * @swagger
 * /api/v1/auth/signup:
 *    post:
 *      summary: register new user
 *      tags: [Auth]
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *      responses:
 *        201:
 *          description: user created successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *        500:
 *          description: internal serevr error
 */

// REGISTER || POST
router.post('/signup', controller.authCtrl.signupCtrl)

/**
 * @swagger
 * /api/v1/auth/signin:
 *  post:
 *    summary: signin page
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *        description: signin successfull
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      500:
 *        description: something went wrong
 */
router.post('/signin', controller.authCtrl.signinCtrl)
router.get('/get-current-user', authMiddleware, controller.authCtrl.currentUserCtrl)




export default router
