import { Request, Response } from "express";
import authService from "../services/auth.service";

class AuthController {

async login(req: Request, res: Response){

}

async register(req: Request, res: Response){
    try {
        const user = await authService.register(req.body);
        return res.json(user);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' });
    }
}

async refreshToken(req: Request, res: Response){}

async logout(req: Request, res: Response){}
  
}

export default new AuthController();