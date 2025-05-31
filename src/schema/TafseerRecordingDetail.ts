import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const TafseerRecordingDetail = sqliteTable('TafseerRecordingDetail', {
  Id: text('Id').primaryKey(),
  AayatId: text('AayatId'),
  TafseerDetailId: text('TafseerDetailId'),
  TafseerRecordingId: text('TafseerRecordingId'),
  URL: text('URL'),
});