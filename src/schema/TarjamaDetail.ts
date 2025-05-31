import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const TarjamaDetail = sqliteTable('TarjamaDetail', {
  Id: text('Id').primaryKey(),
  AayatId: text('AayatId'),
  TarjamaId: text('TarjamaId'),
  Sequence: integer('Sequence'),
  Content: text('Content'),
  Content_with_html: text('Content_with_html'),
  Type: text('Type'),
  Format: text('Format'),
  FontType: text('FontType'),
  RenderType: text('RenderType'),
});