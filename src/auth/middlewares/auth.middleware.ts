import { Response, Request, NextFunction } from "express";
import jwtService from "../../config/jwt";
import prisma from "../../config/prisma";

export const authMiddleware = ( req: Request, res: Response, next: NextFunction ) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const payload = jwtService.verifyToken(token);
  if (!payload) {
    return res.status(401).json({ message: "Invalid token" });
  }
  const userIdParam = req.params?.id;
  const { userId } = payload;
  
  if (userIdParam && userIdParam !== userId) {
    return res.status(403).json({ message: "Forbidden" });
  }


  prisma.user
    .findUnique({
      where: {
        id: userId,
      },
    })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      next();
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    });
};

export const authAdminMiddleware = ( req: Request, res: Response, next: NextFunction ) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const payload = jwtService.verifyToken(token);

  if (!payload) {
    return res.status(401).json({ message: "Invalid token" });
  }
  const { userId } = payload;

  prisma.user
    .findUnique({
      where: {
        id: userId,
      },
    })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
        if (user.role !== "ADMIN") {
         return res.status(403).json({ message: "Forbidden" });
        }
        next();
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    });
};
