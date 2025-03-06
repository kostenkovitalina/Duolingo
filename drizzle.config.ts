import 'dotenv/config';
import { defineConfig } from "drizzle-kit";


export default defineConfig({
    dialect: "postgresql",
    schema: "./db/schema.ts",
    dbCredentials: {
        host: "ep-withered-silence-a81229dy.eastus2.azure.neon.tech",
        port: 5432,
        user: "lingo_owner",
        password: "yh7mUS3gMfTi",
        database: "lingo",
        ssl: true,
    },
});
