const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const userData = [
  { email: "jon@email.com", name: "Jon Smith" },
  { email: "tom@email.com", name: "Tom Tim" },
];

async function main() {
  console.log("Seeding database ...");
  for (const userInfo of userData) {
    const user = await prisma.user.create({
      data: userInfo,
    });
    console.log(`Created new user with ID ${user.id}`);
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
