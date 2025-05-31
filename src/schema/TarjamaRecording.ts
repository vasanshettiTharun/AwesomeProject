import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const TarjamaRecording = sqliteTable('TarjamaRecording', {
  Id: text('Id').primaryKey(),
  TarjamaId: text('TarjamaId'),
  RecorderId: text('RecorderId'),
});