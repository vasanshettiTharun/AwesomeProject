import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const GlobalLanguage = sqliteTable('GlobalLanguage', {
  Id: integer('Id').primaryKey(),
  languageName: text('languageName'),
  isSelected: text('isSelected').default('FALSE'),
});