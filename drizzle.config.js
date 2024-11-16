import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url: 'postgresql://Mentrorat_owner:3gSzPvG7Krfe@ep-hidden-leaf-a1yymkoe.ap-southeast-1.aws.neon.tech/Mentrorat?sslmode=require'
  }
});
