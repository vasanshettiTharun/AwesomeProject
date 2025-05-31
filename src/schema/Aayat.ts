import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const Aayat = sqliteTable('Aayat', {
  Id: integer('Id'),
  Content: text('Content'),
  FifteenLinePageNum: integer('FifteenLinePageNum'),
  Num: integer('Num'),
  ParaId: integer('ParaId'),
  SurahId: integer('SurahId'),
  ManzilNo: integer('ManzilNo'),
  IsBookMark: text('IsBookMark').default('0'),
});