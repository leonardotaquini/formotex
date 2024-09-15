import { Request, Response } from "express";
import authService from "../services/auth.service";
import { RegisterUserAuth } from "../interfaces/auth.interface";


interface ErrorInterface {
    message: string;
}
class AuthController {

async login(req: Request, res: Response){
    try {
        const token = await authService.login(req.body);
        return res.json({token});
    } catch (error: ErrorInterface | any) {
        return res.status(500).json({ message: error.message });
    }

}

async register(req: RegisterUserAuth, res: Response){
    if (!req.body.email || !req.body.password || !req.body.name || !req.body.lastname) {
        return res.status(400).json({ message: "Please fill all fields" });
    }
    try {
        const token = await authService.register(req.body);
        return res.json({token});
    } catch (error: ErrorInterface | any)  {
        return res.status(500).json({ message: error.message });
    }
}

async refreshToken(req: Request, res: Response){
    try {
        const token = await authService.refreshToken(req.body.refreshToken);
        return res.json({token});
    } catch (error: ErrorInterface | any) {
        return res.status(500).json({ message: error.message });
    }
}



}

export default new AuthController();