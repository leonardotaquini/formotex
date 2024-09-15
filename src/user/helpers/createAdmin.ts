import userService from "../services/user.service";

export const createAdmin = async () => {
  try {
    const user = await userService.createAdmin();
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};
