import "dotenv/config";
import { defineConfig } from "prisma/config";

// Prisma CLI migrations must use Neon's direct (non-pooled) connection.
// Application runtime continues to use DATABASE_URL (pooled) via PrismaPg.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "npx tsx prisma/seed.ts",
  },
  datasource: {
    url: process.env["DIRECT_URL"] ?? process.env["DATABASE_URL"],
  },
});
