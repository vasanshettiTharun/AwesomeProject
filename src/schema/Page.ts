import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const Page = sqliteTable('Page', {
  Id: text('Id').primaryKey(),
  BookId: text('BookId'),
  PageNo: text('PageNo'),
  Sequence: integer('Sequence'),
  Content: text('Content'),
  ContentWithHtml: text('ContentWithHtml'),
  Type: integer('Type'),
  Format: integer('Format'),
  FontType: integer('FontType'),
  RenderType: integer('RenderType'),
  BookMark: text('BookMark').default('0'),
});