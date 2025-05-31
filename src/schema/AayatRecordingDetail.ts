import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const AayatRecordingDetail = sqliteTable('AayatRecordingDetail', {
  Id: text('Id').primaryKey(),
  AayatId: text('AayatId'),
  AayatRecordingId: text('AayatRecordingId'),
  URL: text('URL'),
});