import prisma from "../../config/prisma";
import { EquipmentRequest } from "../interfaces/equipment.interface";

class EquipmentService {

  async getEquipment() {
    try {
      const equipment = await prisma.equipment.findMany();
      return equipment;
    } catch (error) {
      throw error;
    }
  }

  async getEquipmentById(id: number) {
    try {
      const equipment = await prisma.equipment.findUnique({
        where: {
          id: id,
        },
      });
      if (!equipment) throw new Error("Equipment not found");
      return equipment ;
    } catch (error) {
      throw error;
    }
  }

  async createEquipment(equipment: EquipmentRequest) {
    try {
      const newEquipment = await prisma.equipment.create({
        data: equipment,
      });
      return newEquipment;
    } catch (error) {
      throw error;
    }
  }

  async updateEquipment(id: number, equipment: EquipmentRequest) {
    try {
      const updatedEquipment = await prisma.equipment.update({
        where: {
          id: id,
        },
        data: equipment,
      });
      return updatedEquipment;
    } catch (error) {
      throw error;
    }
  }

  async deleteEquipment(id: number) {
    try {
      const deletedEquipment = await prisma.equipment.delete({
        where: {
          id: id,
        },
      });
      return deletedEquipment;
    } catch (error) {
      throw error;
    }
  }
}

export default new EquipmentService();
