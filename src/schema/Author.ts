import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const Author = sqliteTable('Author', {
  Id: text('Id').primaryKey(),
  Name: text('Name').notNull(),
});