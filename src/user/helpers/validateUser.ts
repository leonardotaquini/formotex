import { UserDTO } from "../interfaces/user.interface";


export const validateUser = (user: UserDTO) => {
    if (!user.name || !user.lastname || !user.email || !user.password ) {
        return false;
    }
    return true;
}