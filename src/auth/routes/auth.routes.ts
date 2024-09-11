import { Router } from 'express';
import authController from '../controllers/auth.controller';
const router = Router();

// router.post('/login', authController.login );
router.post('/register', authController.register );
// router.post('/refresh-token', authController.refreshToken );
// router.get('/logout', authController.logout );

export default router;