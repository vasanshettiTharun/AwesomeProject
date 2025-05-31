import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';

export const LastSync = sqliteTable('LastSync', {
  Name: text('Name'),
  DateAndTime: text('DateAndTime'),
});