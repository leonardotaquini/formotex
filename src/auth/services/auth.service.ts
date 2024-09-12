import prisma from "../../config/prisma";
import { LoginAuth, RegisterAuth } from "../interfaces/auth.interface";
import jwtService from "../../config/jwt";
import { comparePassword, hashPassword } from "../../utils/hash.password";

class AuthService {
  async login(userReq: LoginAuth) {
    const user = await prisma.user.findUnique({
      where: {
        email: userReq.email,
      },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await comparePassword(userReq.password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }
    return jwtService.generateToken(user.id);
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
      throw new Error("Internal server error");
    }
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = jwtService.verifyToken(refreshToken);
      if (!payload) {
        throw new Error("Invalid token");
      }
      return jwtService.generateToken(payload.userId);
    } catch (error) {
      console.log(error);
      throw new Error("Internal server error");
    }
  }


}

export default new AuthService();
