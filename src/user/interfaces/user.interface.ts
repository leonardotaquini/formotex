

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
    role: Role;
}


type Role = 'ADMIN' | 'USER';

