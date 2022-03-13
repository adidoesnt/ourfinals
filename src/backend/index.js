import PrismaCourseRepository from "./courseRepository";
import PrismaUserRepository from "./userRepository";
import UserService from "./userService";

const prismaUserRepository = new PrismaUserRepository();
const prismaCourseRepository = new PrismaCourseRepository();

const userService = new UserService({
  prismaUserRepository,
  prismaCourseRepository,
});

export default userService;
