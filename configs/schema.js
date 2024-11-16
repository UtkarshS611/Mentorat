import {
    serial,
    pgTable,
    varchar
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: serial().primaryKey(),
    name: varchar().notNull(),
    email: varchar().notNull(),
});
