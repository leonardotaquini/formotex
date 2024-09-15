
enum Roles {
    ADMIN = 'ADMIN',
    USER = 'USER'
}

export const validateRol = (role: string) => {
    if (role !== Roles.ADMIN && role !== Roles.USER) {
        return false;
    }
    return true;
}