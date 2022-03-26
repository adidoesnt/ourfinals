module.exports = class CourseService {
  constructor({ courseRepository }) {
    this.courseRepository = courseRepository;
  }

  async getAssignments() {
    return this.courseRepository.getAssignments();
  }

  async deleteCurrentAssignment({ id }) {
    return this.courseRepository.deleteAssignment({ id });
  }

  async getCurrentAssignment({ id }) {
    return this.courseRepository.getAssignment({ id });
  }

  async updateCurrentAssignment({ id, title, description, tutorId, studentId, moduleCode }) {
    return this.courseRepository.updateAssignment({ id, title, description, tutorId, studentId, moduleCode });
  }

  async addNewAssignment({ id, title, description, tutorId, studentId, moduleCode }) {
    return this.courseRepository.createAssignment({ id, title, description, tutorId, studentId, moduleCode });
  }
};
