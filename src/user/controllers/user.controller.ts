import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  

  async getUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getUsers();
      res.status(200).json(users);
      
    } catch (error) {
      res.status(500).json({ message: error})
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const newUser = await UserService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error})
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error})
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedUser = await UserService.updateUser(id, req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error})
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userDeleted = await UserService.deleteUser(id);
      res.status(200).json({ message: 'User deleted successfully', userDeleted });
    } catch (error) {
      res.status(500).json({ message: error})
    }
  }
}

export default new UserController();
