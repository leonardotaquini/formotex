import { Request } from 'express';


export interface User {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserDTO {
    name: string;
    lastname: string;
    email: string;
    password: string;
}

export interface UserRequest<T> extends Request {
    body: T;
}


export type Role = 'ADMIN' | 'USER';


