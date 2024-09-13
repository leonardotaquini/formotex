import prisma from '../../config/prisma';
import { hashPassword } from '../../utils/hash.password';
import { UserDTO } from '../interfaces/user.interface';

class UserService {
  async getUsers() {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      console.log(error);
      throw new Error('Internal server error');
    }
  }

  async createUser(user: UserDTO) {
    try {
      const newUser = await prisma.user.create({ data: user });
      return newUser;
    } catch (error) {
      console.log(error);
      throw new Error('Internal server error');
    }
  }

  async getUserById(id:string) {
    try {
      const user = await prisma.user.findUnique({ where: { id } });
      if (!user) throw new Error('User not found');
      return user;
    } catch (error) {
      console.log(error);
      throw new Error('Internal server error');
    }
  }

  async updateUser(id: string, user: UserDTO) {
    try {
      const existUser = await this.getUserById(id);
      if (!existUser) throw new Error('User not found');
      const { password } = existUser;
      if ( password ) {
        user.password = await hashPassword(user.password);
      }
      const updatedUser = await prisma.user.update({ where: { id: existUser.id }, data: user });
      return updatedUser;
    } catch (error) {
      console.log(error);
      throw new Error('Internal server error');
    }
  }

  async deleteUser(id:string) {
    try {
      const existUser = await this.getUserById(id);
      if (!existUser) throw new Error('User not found');
      const userDeleted = await prisma.user.delete({ where: { id } });
      return userDeleted;
    } catch (error) {
      console.log(error);
      throw new Error('Internal server error');
    }
  }
}

export default new UserService();