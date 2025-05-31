import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const page_fts = sqliteTable('page_fts', {
  Content: text('Content'),
  PageId: text('PageId'),
  BookId: text('BookId'),
});