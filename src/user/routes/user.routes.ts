import { Router } from "express";
import userController from "../controllers/user.controller";
import { authMiddleware, authAdminMiddleware } from '../../auth/middlewares/auth.middleware';

const router = Router();

router.get('/', authAdminMiddleware, userController.getUsers);
router.post('/', authAdminMiddleware, userController.createUser);
router.get('/:id', authAdminMiddleware, userController.getUserById);
router.patch('/:id', authMiddleware, userController.updateUser);
router.delete('/:id', authAdminMiddleware, userController.deleteUser);
router.patch('/role/:id', authAdminMiddleware, userController.changeRole);

export default router;