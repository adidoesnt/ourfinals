const { PrismaClient } = require("@prisma/client");

module.exports = class PrismaCourseRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAssignments() {
    // Return all assignments
    return this.prisma.assignment.findMany();
  }

  async getAssignment() {
    // returns a single assignment
    return this.prisma.assignment.findUnique({ where: { id } });
  }

  async createAssignment({ id, title, description, tutorId, studentId, moduleCode }) {
    // Create the assignment and link it appropriately to the student and tutor
    await this.prisma.assignment.create({
      data: {id, title, description, tutorId, studentId, moduleCode },
    });
  }

  async updateAssignment({ id, title, description, tutorId, studentId, moduleCode }) {
    // Find an assignment by ID and update the relevant details
    await this.prisma.assignment.update({
      where: { id },
      data: { title, description, tutorId, studentId, moduleCode },
    });
  }

  async deleteAssignment({ id }) {
    // Find an assignment by ID and delete it
    await this.prisma.assignment.delete({ where: { id } });
  }
};
