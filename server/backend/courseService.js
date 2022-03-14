module.exports = class CourseService {
  constructor({ courseRepository }) {
    this.courseRepository = courseRepository;
  }

  async getAssignments() {
    return this.courseRepository.getAssignments();
  }
};
