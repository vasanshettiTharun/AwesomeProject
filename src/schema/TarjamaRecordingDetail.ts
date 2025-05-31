import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const TarjamaRecordingDetail = sqliteTable('TarjamaRecordingDetail', {
  Id: text('Id').primaryKey(),
  AayatId: text('AayatId'),
  TarjamaDetailId: text('TarjamaDetailId'),
  TarjamaRecordingId: text('TarjamaRecordingId'),
  URL: text('URL'),
});