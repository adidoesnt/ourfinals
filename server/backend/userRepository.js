const { PrismaClient } = require("@prisma/client");

module.exports =class PrismaUserRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser({ name, year, faculty, nusnetId }) {
    await this.prisma.user.create({
      data: { name, year, faculty, nusnetId },
    });
  }

  async getUser(id) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async updateUser({ id, name, year, faculty, nusnetId }) {
    await this.prisma.user.update({
      where: { id },
      data: { name, year, faculty, nusnetId },
    });
  }

  async deleteUser({ id }) {
    await this.prisma.user.delete({ where: { id } });
  }
}
