import jwt from 'jsonwebtoken';
import { enviroments } from './enviroments';

interface JwtPayload {
  userId: string;
}

class JwtService {
  private readonly secret: string;
  private readonly expiresIn: string;

  constructor() {
    this.secret = enviroments.JWT_SECRET
    this.expiresIn = '1h';
  }

  generateToken(userId: string): string {
    return jwt.sign({ userId }, this.secret, {
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
