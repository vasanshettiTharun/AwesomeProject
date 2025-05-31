import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const Tafseer = sqliteTable('Tafseer', {
  Id: text('Id').primaryKey(),
  Name: text('Name').notNull(),
  AuthorId: text('AuthorId'),
  TranslatorId: text('TranslatorId'),
  LanguageId: text('LanguageId'),
});