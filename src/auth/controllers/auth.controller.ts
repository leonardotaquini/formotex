import { Request, Response } from "express";
import authService from "../services/auth.service";

class AuthController {

async login(req: Request, res: Response){
    try {
        const token = await authService.login(req.body);
        return res.json({token});
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' });
    }

}

async register(req: Request, res: Response){
    try {
        const token = await authService.register(req.body);
        return res.json({token});
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' });
    }
}

async refreshToken(req: Request, res: Response){
    try {
        const token = await authService.refreshToken(req.body.refreshToken);
        return res.json({token});
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' });
    }
}



}

export default new AuthController();