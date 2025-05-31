import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const Surah = sqliteTable('Surah', {
  Id: integer('Id').primaryKey(),
  NameUrdu: text('NameUrdu'),
  NameEng: text('NameEng'),
  _15linePageNum: integer('_15linePageNum'),
});