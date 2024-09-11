import prisma from "../../config/prisma";
import { LoginAuth, RegisterAuth } from "../interfaces/auth.interface";
import jwtService from "../../config/jwt";
import { hashPassword } from "../../utils/hash.password";

class AuthService {
  async login( userReq: LoginAuth ) {
    // const user = await prisma.user.findUnique({
    // where: {
    //     email,
    // },
    // });

    // if (!user) {
    // throw new Error('Invalid credentials');
    // }

    // const isPasswordValid = await bcrypt.compare(password, user.password);

    // if (!isPasswordValid) {
    //   throw new Error('Invalid credentials');
    // }

    // return user;
    return;
  }

  async register(userReq: RegisterAuth) {
    try {
        userReq.password = await hashPassword(userReq.password);
        const newUser = await prisma.user.create({
          data: userReq,
        });
        const token = jwtService.generateToken(newUser.id);
        return token;
    } catch (error) {
        console.log(error);
        throw new Error('Internal server error');
    }
  }

  async refreshToken(refreshToken: string) {
    try {
          console.log('asd');
    } catch (error) {
        console.log(error);
        throw new Error('Internal server error');
        
    }
  }

  async logout(refreshToken: string) {
    return;
  }
}

export default new AuthService();