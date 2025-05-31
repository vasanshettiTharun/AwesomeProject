import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const SyncBookData = sqliteTable('SyncBookData', {
  BookId: text('BookId').primaryKey(),
});