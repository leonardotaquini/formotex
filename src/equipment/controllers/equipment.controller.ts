import equipmentService from "../services/equipment.service";
import { Request, Response } from 'express';

interface Error {
    message: string;
}

class EquipmentController {
  async getEquipment(req: Request, res: Response): Promise<void> {
    try {
      const equipment = await equipmentService.getEquipment();
      res.status(200).json(equipment);
    } catch (error: Error | any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getEquipmentById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const equipment = await equipmentService.getEquipmentById(id);
      res.status(200).json(equipment);
    } catch (error: Error | any) {
      res.status(500).json({ message: error.message });
    }
  }

  async createEquipment(req: Request, res: Response): Promise<void> {
    try {
      const equipment = req.body;
      const newEquipment = await equipmentService.createEquipment(equipment);
      res.status(201).json(newEquipment);
    } catch (error: Error | any) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateEquipment(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const equipment = req.body;
      const updatedEquipment = await equipmentService.updateEquipment(id, equipment);
      res.status(200).json(updatedEquipment);
    } catch (error: Error | any) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteEquipment(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const deletedEquipment = await equipmentService.deleteEquipment(id);
      res.status(200).json(deletedEquipment);
    } catch (error: Error | any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new EquipmentController();