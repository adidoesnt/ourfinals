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
    // does this method intend to update the student who submitted the assignment, or add
    // the assignment to the student's record? if it's the latter, would simply adding 
    // the assignment to the backend with the linked fields not take care of this?
    // if it's the former, then I don't think we would have a scenario where we would 
    // change the student ID associated with the assignment
  }

  async addTutorAssignment() {
    // this.courseRepository
    // does this method intend to update the tutor teaching the assignment, or add
    // the assignment to the tutor's record? if it's the latter, would simply adding 
    // the assignment to the backend with the linked fields not take care of this?
  }
};
