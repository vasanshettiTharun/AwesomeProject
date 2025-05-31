import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const FavoriteBooks = sqliteTable('FavoriteBooks', {
  BookId: text('BookId').primaryKey(),
  Sequence: integer('Sequence').default('0'),
});