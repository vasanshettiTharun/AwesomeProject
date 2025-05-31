import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const AayatRecording = sqliteTable('AayatRecording', {
  Id: text('Id').primaryKey(),
  RecorderId: text('RecorderId'),
});