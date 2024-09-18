import jwt from 'jsonwebtoken';
import { enviroments } from './enviroments';

interface JwtPayload {
  userId: string;
  role: string;
  name: string;
  lastname: string;
}

class JwtService {
  private readonly secret: string;
  private readonly expiresIn: string;

  constructor() {
    this.secret = enviroments.JWT_SECRET
    this.expiresIn = '1h';
  }

  generateToken( userId: string, role: string, name:string, lastname:string): string {
    return jwt.sign({ userId, role, name, lastname }, this.secret, {
      expiresIn: this.expiresIn,
    });
  }

  verifyToken(token: string): JwtPayload | null {
    try {
      return jwt.verify(token, this.secret) as JwtPayload;
    } catch (error) {
      return null;
    }
  }
}



export default new JwtService();
