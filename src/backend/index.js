import PrismaUserRepository from "./userRepository";
import UserService from "./userService";

const prismaUserRepository = new PrismaUserRepository();
const userService = new UserService(prismaUserRepository);

export default userService;
