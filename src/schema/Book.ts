import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const Book = sqliteTable('Book', {
  Id: text('Id').primaryKey(),
  LanguageId: text('LanguageId'),
  Name: text('Name').notNull(),
  ParentId: text('ParentId'),
  AuthorId: text('AuthorId'),
  CategoryId: text('CategoryId'),
  Downloaded: text('Downloaded').default('FALSE'),
  LastSyncDate: text('LastSyncDate').default("''"),
  Status: integer('Status'),
  Sequence: integer('Sequence'),
  ConitnousScrolling: text('ConitnousScrolling').default('FALSE'),
});