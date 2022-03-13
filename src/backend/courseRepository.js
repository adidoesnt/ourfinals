import { PrismaClient } from "@prisma/client";

export default class PrismaCourseRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async createAssignment() {
    // Create the assignment and link it appropriately to the student and tutor
  }

  async updateAssignment() {}

  async deleteAssignment() {}
}
