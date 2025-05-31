import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const Taxonomy = sqliteTable('Taxonomy', {
  Type: text('Type').notNull(),
  Value: text('Value').notNull(),
});