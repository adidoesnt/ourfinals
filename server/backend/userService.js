module.exports = class UserService {
  constructor({ userRepository, courseRepository }) {
    this.userRepository = userRepository;
    this.courseRepository = courseRepository;
  }

  async createUser({ id, name, year, faculty, nusnetId }) {
    return this.userRepository.createUser({id, name, year, faculty, nusnetId });
  }

  async deleteUser({ id }) {
    return this.userRepository.deleteUser({ id });
  }

  async getUser({ id }) {
    return this.userRepository.getUser({ id });
  }

  async updateProfile({ id, name, year, faculty, nusnetId }) {
    const userInfo = this.userRepository.getUser(id);
    this.userRepository.updateProfile({
      ...userInfo,
      name,
      year,
      faculty,
      nusnetId
    });
  }

  async addStudentAssignment() {
    // this.courseRepository
  }

  async addTutorAssignment() {
    // this.courseRepository
  }
};
