import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const Festival = sqliteTable('Festival', {
  Id: text('Id').primaryKey(),
  Month: integer('Month'),
  Day: integer('Day'),
  Type: integer('Type').default('1'),
  Name: text('Name').notNull(),
  LanguageId: text('LanguageId'),
});