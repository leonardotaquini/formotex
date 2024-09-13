import { Router } from 'express';
import equipmentController from '../controllers/equipment.controller';
import { authAdminMiddleware } from '../../auth/middlewares/auth.middleware';

const router = Router();

router.get('/', authAdminMiddleware, equipmentController.getEquipment);
router.get('/:id', authAdminMiddleware, equipmentController.getEquipmentById);
router.post('/', authAdminMiddleware, equipmentController.createEquipment);
router.patch('/:id', authAdminMiddleware, equipmentController.updateEquipment);
router.delete('/:id', authAdminMiddleware, equipmentController.deleteEquipment);

export default router;