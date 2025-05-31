import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const Section = sqliteTable('Section', {
  Id: text('Id').primaryKey(),
  Name: text('Name').notNull(),
  ParentId: text('ParentId'),
  PageId: text('PageId'),
  BookId: text('BookId'),
});