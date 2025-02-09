import { Router } from "express";
const router = Router();

/** import all controllers */
import * as controller from '../controllers/appController.js';

import Auth, { localVariables } from '../middleware/auth.js';



/** POST Methods */
router.route('/register').post(controller.register); // register user

router.route('/authenticate').post(controller.verifyUser, (req, res) => res.end()); // authenticate user
router.route('/login').post(controller.verifyUser,controller.login); // login in app

/** GET Methods */
router.route('/user/:username').get(controller.getUser)

router.route('/createResetSession').get(controller.createResetSession) 


/** PUT Methods */
router.route('/updateuser').put(Auth, controller.updateUser); 




export default router;