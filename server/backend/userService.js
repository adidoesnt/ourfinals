module.exports = class UserService {
  constructor({ userRepository, courseRepository }) {
    this.userRepository = userRepository;
    this.courseRepository = courseRepository;
  }

  async createUser({ name, year, faculty, nusnetId }) {
    return this.userRepository.createUser({ name, year, faculty, nusnetId });
  }

  async updateProfile({ id, name, year, faculty }) {
    const userInfo = this.userRepository.getUser(id);
    this.userRepository.updateProfile({
      ...userInfo,
      name,
      year,
      faculty,
    });
  }

  async addStudentAssignment() {
    // this.courseRepository
  }

  async addTutorAssignment() {
    // this.courseRepository
  }
};
