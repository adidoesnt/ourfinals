const { PrismaClient } = require("@prisma/client");

module.exports = class PrismaCourseRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAssignments() {
    // Return all assignments
    return this.prisma.assignment.findMany();
  }

  async createAssignment() {
    // Create the assignment and link it appropriately to the student and tutor
  }

  async updateAssignment() {}

  async deleteAssignment() {}
};
