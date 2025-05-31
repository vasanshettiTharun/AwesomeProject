import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const Category = sqliteTable('Category', {
  Id: text('Id').primaryKey(),
  Name: text('Name').notNull(),
});