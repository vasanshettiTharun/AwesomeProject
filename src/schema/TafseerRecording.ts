import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const TafseerRecording = sqliteTable('TafseerRecording', {
  Id: text('Id').primaryKey(),
  TafseerId: text('TafseerId'),
  RecorderId: text('RecorderId'),
});