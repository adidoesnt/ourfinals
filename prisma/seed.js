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

  const aditya = await prisma.user.create({
    data: {
      ...adityaInfo,
      tutor: { create: {} },
    },
  });

  const ansel = await prisma.user.create({
    data: {
      ...anselInfo,
      student: { create: {} },
    },
  });

  const galen = await prisma.user.create({
    data: {
      ...galenInfo,
      student: { create: {} },
    },
  });

  // Create test modules
  const ac5001Info = testModules[0];
  const ac5002Info = testModules[1];

  const ac5001 = await prisma.module.create({ data: ac5001Info });
  const ac5002 = await prisma.module.create({ data: ac5002Info });

  // Create test assignments that are linked to the modules above
  const ass1Info = testAssignments[0];
  const ass2Info = testAssignments[1];

  const ass1 = await prisma.assignment.create({
    data: {
      assignmentTitle: "Test",
      assignmentDescription: "Test",
      tutor: {
        connect: { userId: aditya.id },
      },
      student: {
        connect: { userId: ansel.id },
      },
      module: {
        connect: {
          code: ac5001.code,
        },
      },
    },
  });
  const ass2 = await prisma.assignment.create({
    data: {
      ...ass2Info,
      tutor: {
        connect: { userId: aditya.id },
      },
      student: {
        connect: { userId: galen.id },
      },
      module: {
        connect: {
          code: ac5002.code,
        },
      },
    },
  });

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
