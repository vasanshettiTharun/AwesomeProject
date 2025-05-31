import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const Para = sqliteTable('Para', {
  Id: integer('Id').primaryKey(),
  NameEng: text('NameEng'),
  NameUrdu: text('NameUrdu'),
  _15linePageNum: integer('_15linePageNum'),
});