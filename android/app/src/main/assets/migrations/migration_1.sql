CREATE TABLE IF NOT EXISTS `Aayat` (
	`Id` integer,
	`Content` text,
	`FifteenLinePageNum` integer,
	`Num` integer,
	`ParaId` integer,
	`SurahId` integer,
	`ManzilNo` integer,
	`IsBookMark` text DEFAULT '0'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `AayatRecording` (
	`Id` text PRIMARY KEY NOT NULL,
	`RecorderId` text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `AayatRecordingDetail` (
	`Id` text PRIMARY KEY NOT NULL,
	`AayatId` text,
	`AayatRecordingId` text,
	`URL` text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `Author` (
	`Id` text PRIMARY KEY NOT NULL,
	`Name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `Book` (
	`Id` text PRIMARY KEY NOT NULL,
	`LanguageId` text,
	`Name` text NOT NULL,
	`ParentId` text,
	`AuthorId` text,
	`CategoryId` text,
	`Downloaded` text DEFAULT 'FALSE',
	`LastSyncDate` text DEFAULT '''''',
	`Status` integer,
	`Sequence` integer,
	`ConitnousScrolling` text DEFAULT 'FALSE'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `Category` (
	`Id` text PRIMARY KEY NOT NULL,
	`Name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `FavoriteBooks` (
	`BookId` text PRIMARY KEY NOT NULL,
	`Sequence` integer DEFAULT '0'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `Festival` (
	`Id` text PRIMARY KEY NOT NULL,
	`Month` integer,
	`Day` integer,
	`Type` integer DEFAULT '1',
	`Name` text NOT NULL,
	`LanguageId` text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `GlobalLanguage` (
	`Id` integer PRIMARY KEY NOT NULL,
	`languageName` text,
	`isSelected` text DEFAULT 'FALSE'
);
INSERT INTO GlobalLanguage (languageName, isSelected) VALUES
('English', 'FALSE'),
('اردو', 'FALSE');

--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `Language` (
	`Id` text PRIMARY KEY NOT NULL,
	`Name` text NOT NULL,
	`NativeName` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `LastSync` (
	`Name` text,
	`DateAndTime` text
);
INSERT INTO LastSync (Name, DateAndTime) VALUES
('Language', NULL),
('Author', NULL),
('Category', NULL),
('Book', NULL),
('Surah', NULL),
('Para', NULL),
('Aayat', NULL),
('Festival', NULL),
('Tafseer', NULL),
('TafseerDetail', NULL),
('Tarjama', NULL),
('TarjamaDetail', NULL),
('TarjamaRecordingDetail', NULL),
('AayatRecording', NULL),
('AayatRecordingDetail', NULL),
('TafseerRecording', NULL),
('TafseerRecordingDetail', NULL),
('TarjamaRecording', NULL);

--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `Page` (
	`Id` text PRIMARY KEY NOT NULL,
	`BookId` text,
	`PageNo` text,
	`Sequence` integer,
	`Content` text,
	`ContentWithHtml` text,
	`Type` integer,
	`Format` integer,
	`FontType` integer,
	`RenderType` integer,
	`BookMark` text DEFAULT '0'
);

--> statement-breakpoint
CREATE VIRTUAL TABLE IF NOT EXISTS page_fts USING fts4(Content, PageId, BookId);

--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `Para` (
	`Id` integer PRIMARY KEY NOT NULL,
	`NameEng` text,
	`NameUrdu` text,
	`_15linePageNum` integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `Surah` (
	`Id` integer PRIMARY KEY NOT NULL,
	`NameUrdu` text,
	`NameEng` text,
	`_15linePageNum` integer
);

--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `SyncBookData` (
	`BookId` text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `Section` (
  Id TEXT PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL,
  ParentId TEXT,
  PageId TEXT,
  BookId TEXT
);

--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `Tafseer` (
	`Id` text PRIMARY KEY NOT NULL,
	`Name` text NOT NULL,
	`AuthorId` text,
	`TranslatorId` text,
	`LanguageId` text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `TafseerDetail` (
	`Id` text PRIMARY KEY NOT NULL,
	`AayatId` text,
	`TafseerId` text,
	`Sequence` integer,
	`Content` text,
	`Content_with_html` text,
	`Type` text,
	`Format` text,
	`FontType` text,
	`RenderType` text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `TafseerRecording` (
	`Id` text PRIMARY KEY NOT NULL,
	`TafseerId` text,
	`RecorderId` text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `TafseerRecordingDetail` (
	`Id` text PRIMARY KEY NOT NULL,
	`AayatId` text,
	`TafseerDetailId` text,
	`TafseerRecordingId` text,
	`URL` text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `Tarjama` (
	`Id` text PRIMARY KEY NOT NULL,
	`Name` text NOT NULL,
	`AuthorId` text,
	`TranslatorId` text,
	`LanguageId` text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `TarjamaDetail` (
	`Id` text PRIMARY KEY NOT NULL,
	`AayatId` text,
	`TarjamaId` text,
	`Sequence` integer,
	`Content` text,
	`Content_with_html` text,
	`Type` text,
	`Format` text,
	`FontType` text,
	`RenderType` text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `TarjamaRecording` (
	`Id` text PRIMARY KEY NOT NULL,
	`TarjamaId` text,
	`RecorderId` text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `TarjamaRecordingDetail` (
	`Id` text PRIMARY KEY NOT NULL,
	`AayatId` text,
	`TarjamaDetailId` text,
	`TarjamaRecordingId` text,
	`URL` text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `Taxonomy` (
	`Type` text NOT NULL,
	`Value` text NOT NULL
);
