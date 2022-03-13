const { PrismaClient } = require("@prisma/client");
const testUsers = require("../testData/testUsers.json");
const testAssignments = require("../testData/testAssignments.json");
const testModules = require("../testData/testModules.json");
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database ...");

  // Create test users
  const adityaInfo = testUsers[0];
  const anselInfo = testUsers[1];
  const galenInfo = testUsers[2];
  const robinInfo = testUsers[3];
  const arnavInfo = testUsers[4];
  const nikiInfo = testUsers[5];

  const aditya = prisma.user.create({
    data: {
      ...adityaInfo,
      tutor: { create: {} },
    },
  });
  
  const ansel = prisma.user.create({
    data: {
      ...anselInfo,
      tutor: { create: {} },
    },
  });

  // Create test modules
  const ac5001Info = testModules[0];
  const ac5002Info = testModules[1];

  prisma.module.create({ data: ac5001Info });
  prisma.module.create({ data: ac5002Info });

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
