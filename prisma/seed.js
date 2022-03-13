const { PrismaClient } = require("@prisma/client");
const testUsers = require("../testData/testUsers.json");
const testAssignments = require("../testData/testAssignments.json");
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database ...");

  // Create test users
  for (const userInfo of testUsers) {
    const user = await prisma.user.create({
      data: userInfo,
    });
    console.log(`Created new user with ID ${user.id}`);
  }

  // Create assignments
  for (const assignmentInfo of testAssignments) {
    const assignment = await prisma.assignment.create({
      data: assignmentInfo,
    });
    console.log(`Create new assignment with ID ${assignment.id}`);
  }

  console.log("Seeding complete!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
