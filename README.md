# OURFinals

An on-demand peer tutoring platform by students, for students.

## Database

The `prisma/` folder contains:

- `migrations/`: Past database migrations (all these files are generated).
- `schema.prisma`: The database schema. Install the [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma) vscode extension before editing, and run `Format Document` (or option-shift-F) to format it
- `seed.js`: Seed/initial data for local development. Currently only contains two example users.

### PostgreSQL setup guide

(Some of these steps are specific to MacOS)

1. Install the PostgressApp and `psql` CLI from [postgresapp.com](https://postgresapp.com/).

2. Create a database. First enter Postgres by typing `psql` in the terminal, then run `CREATE DATABASE ourfinals;`

3. Verify that the database has been created via PostgressApp.

4. **(I have already done this, but I'm keeping it here for reference)**

   Create the file `prisma/seed.js` and add some seed data. ([Seed DB docs](https://www.prisma.io/docs/guides/database/seed-database))

   Add this section to `package.json`:

   ```json
   {
      ...,
      "prisma": {
          "seed": "node prisma/seed.js"
      },
   }
   ```

5. Make a migration.

   **This only needs to be done when the schema is changed. I have already made the first migration (`first_migration`).**

   To make a migration, run

   ```bash
   npx prisma migrate dev --name migrationname
   ```

   There is no need put the data in the migration name as it's already included in the resulting migration folder name.

   Additionally, if the local database hasn't been created, this command should create it.

   This will also run the seeding script (made in the previous step).

6. To reset the database, run `npm db:reset`. This will drop the DB (or perform a soft reset), create the DB again, apply all migrations, then run the seed script ([Reset command docs](https://www.prisma.io/docs/concepts/components/prisma-migrate#reset-the-development-database)).
