import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const Tarjama = sqliteTable('Tarjama', {
  Id: text('Id').primaryKey(),
  Name: text('Name').notNull(),
  AuthorId: text('AuthorId'),
  TranslatorId: text('TranslatorId'),
  LanguageId: text('LanguageId'),
});