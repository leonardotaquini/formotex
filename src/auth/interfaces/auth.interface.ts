import { Request } from "express";


export interface LoginAuth {
    email: string;
    password: string;
}

export interface RegisterAuth {
    email: string;
    password: string;
    name: string;
    lastname: string;   
}

export interface RegisterUserAuth extends Request{
    body: RegisterAuth;
}