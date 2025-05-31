import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const section_fts = sqliteTable('section_fts', {
  Content: text('Content'),
  SectionId: text('SectionId'),
  BookId: text('BookId'),
});