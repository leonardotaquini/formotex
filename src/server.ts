import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';
import { enviroments } from './config/enviroments';
import appRouter from './router/app.routes';
import userRouter from './user/routes/user.routes';
import authRouter from './auth/routes/auth.routes';
import equipmentRouter from './equipment/routes/equipment.route';
import { createAdmin } from './user/helpers/createAdmin';

class Server {
  private app: Application;
  private port: string | number;

  constructor() {
    this.app = express();
    this.port = enviroments.PORT;

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api', appRouter);
    this.app.use('/api/users', userRouter)
    this.app.use('/api/auth', authRouter);
    this.app.use('/api/equipments', equipmentRouter);    
  }

  private async createAdmin() {
    await createAdmin();
  }

  listen() {
    this.app.listen(this.port, () => {
      this.createAdmin();
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

export const server = new Server();
