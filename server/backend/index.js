const PrismaCourseRepository = require("./courseRepository");
const CourseService = require("./courseService");
const PrismaUserRepository = require("./userRepository");
const UserService = require("./userService");

const prismaUserRepository = new PrismaUserRepository();
const prismaCourseRepository = new PrismaCourseRepository();

const userService = new UserService({
  userRepository: prismaUserRepository,
  courseRepository: prismaCourseRepository,
});

const courseService = new CourseService({
  courseRepository: prismaCourseRepository,
});

module.exports = { userService, courseService };
