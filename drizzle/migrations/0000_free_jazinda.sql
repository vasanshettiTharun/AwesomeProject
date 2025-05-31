CREATE TABLE `Aayat` (
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
CREATE TABLE `AayatRecording` (
	`Id` text PRIMARY KEY NOT NULL,
	`RecorderId` text
);
--> statement-breakpoint
CREATE TABLE `AayatRecordingDetail` (
	`Id` text PRIMARY KEY NOT NULL,
	`AayatId` text,
	`AayatRecordingId` text,
	`URL` text
);
--> statement-breakpoint
CREATE TABLE `Author` (
	`Id` text PRIMARY KEY NOT NULL,
	`Name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `Book` (
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
CREATE TABLE `Category` (
	`Id` text PRIMARY KEY NOT NULL,
	`Name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `FavoriteBooks` (
	`BookId` text PRIMARY KEY NOT NULL,
	`Sequence` integer DEFAULT '0'
);
--> statement-breakpoint
CREATE TABLE `Festival` (
	`Id` text PRIMARY KEY NOT NULL,
	`Month` integer,
	`Day` integer,
	`Type` integer DEFAULT '1',
	`Name` text NOT NULL,
	`LanguageId` text
);
--> statement-breakpoint
CREATE TABLE `GlobalLanguage` (
	`Id` integer PRIMARY KEY NOT NULL,
	`languageName` text,
	`isSelected` text DEFAULT 'FALSE'
);
--> statement-breakpoint
CREATE TABLE `Language` (
	`Id` text PRIMARY KEY NOT NULL,
	`Name` text NOT NULL,
	`NativeName` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `LastSync` (
	`Name` text,
	`DateAndTime` text
);
--> statement-breakpoint
CREATE TABLE `Page` (
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
CREATE TABLE `page_fts` (
	`Content` text,
	`PageId` text,
	`BookId` text
);
--> statement-breakpoint
CREATE TABLE `Para` (
	`Id` integer PRIMARY KEY NOT NULL,
	`NameEng` text,
	`NameUrdu` text,
	`_15linePageNum` integer
);
--> statement-breakpoint
CREATE TABLE `Surah` (
	`Id` integer PRIMARY KEY NOT NULL,
	`NameUrdu` text,
	`NameEng` text,
	`_15linePageNum` integer
);
--> statement-breakpoint
CREATE TABLE `SyncBookData` (
	`BookId` text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE `section_fts` (
	`Content` text,
	`SectionId` text,
	`BookId` text
);
--> statement-breakpoint
CREATE TABLE `Section` (
	`Id` text PRIMARY KEY NOT NULL,
	`Name` text NOT NULL,
	`ParentId` text,
	`PageId` text,
	`BookId` text
);
--> statement-breakpoint
CREATE TABLE `Tafseer` (
	`Id` text PRIMARY KEY NOT NULL,
	`Name` text NOT NULL,
	`AuthorId` text,
	`TranslatorId` text,
	`LanguageId` text
);
--> statement-breakpoint
CREATE TABLE `TafseerDetail` (
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
CREATE TABLE `TafseerRecording` (
	`Id` text PRIMARY KEY NOT NULL,
	`TafseerId` text,
	`RecorderId` text
);
--> statement-breakpoint
CREATE TABLE `TafseerRecordingDetail` (
	`Id` text PRIMARY KEY NOT NULL,
	`AayatId` text,
	`TafseerDetailId` text,
	`TafseerRecordingId` text,
	`URL` text
);
--> statement-breakpoint
CREATE TABLE `Tarjama` (
	`Id` text PRIMARY KEY NOT NULL,
	`Name` text NOT NULL,
	`AuthorId` text,
	`TranslatorId` text,
	`LanguageId` text
);
--> statement-breakpoint
CREATE TABLE `TarjamaDetail` (
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
CREATE TABLE `TarjamaRecording` (
	`Id` text PRIMARY KEY NOT NULL,
	`TarjamaId` text,
	`RecorderId` text
);
--> statement-breakpoint
CREATE TABLE `TarjamaRecordingDetail` (
	`Id` text PRIMARY KEY NOT NULL,
	`AayatId` text,
	`TarjamaDetailId` text,
	`TarjamaRecordingId` text,
	`URL` text
);
--> statement-breakpoint
CREATE TABLE `Taxonomy` (
	`Type` text NOT NULL,
	`Value` text NOT NULL
);
