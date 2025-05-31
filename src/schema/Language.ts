import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const Language = sqliteTable('Language', {
  Id: text('Id').primaryKey(),
  Name: text('Name').notNull(),
  NativeName: text('NativeName').notNull(),
});