import RNFS from 'react-native-fs';
import SQLite from 'react-native-sqlite-storage';
import {Platform} from 'react-native';

SQLite.DEBUG(false);
SQLite.enablePromise(true);

let db: SQLite.SQLiteDatabase | undefined;
let dbInitPromise: Promise<SQLite.SQLiteDatabase> | null = null;
const dbName = 'Barelvi365.db';
const maxVersion = 1;
const MIGRATIONS_DIR = `${RNFS.DocumentDirectoryPath}/migrations`;

const copyMigrationsToInternal = async () => {
  if (Platform.OS !== 'android') return;

  const migrationFiles = Array.from(
    {length: maxVersion},
    (_, i) => `migration_${i + 1}.sql`,
  );

  const exists = await RNFS.exists(MIGRATIONS_DIR);
  if (!exists) await RNFS.mkdir(MIGRATIONS_DIR);0

  for (const fileName of migrationFiles) {
    const destPath = `${MIGRATIONS_DIR}/${fileName}`;
    const alreadyExists = await RNFS.exists(destPath);

    if (!alreadyExists) {
      try {
        await RNFS.copyFileAssets(`migrations/${fileName}`, destPath);
        console.log(`📁 Copied ${fileName} from assets to internal storage`);
      } catch (err) {
        console.error(`❌ Failed to copy ${fileName}:`, err);
      }
    }
  }
};

const getMigrationFilePath = (version: number): string => {
  return Platform.OS === 'android'
    ? `${MIGRATIONS_DIR}/migration_${version}.sql`
    : `${RNFS.MainBundlePath}/migrations/migration_${version}.sql`;
};

const applyMigration = async (db: SQLite.SQLiteDatabase, version: number) => {
  const filePath = getMigrationFilePath(version);

  try {
    console.log('🔍 Looking for migration at:', filePath);
    const exists = await RNFS.exists(filePath);
    if (!exists) {
      throw new Error(`Migration file not found: ${filePath}`);
    }

    const sqlContent = await RNFS.readFile(filePath, 'utf8');
    const statements = sqlContent
      .split(';')
      .map(stmt => stmt.trim())
      .filter(Boolean);

    for (const stmt of statements) {
      console.log(`🔄 Executing migration statement: ${stmt}`);
      await db.executeSql(stmt);
    }

    await db.executeSql(`UPDATE SchemaVersion SET version = ? WHERE id = 1`, [
      version,
    ]);
    console.log(`✅ Applied migration_${version}.sql`);
  } catch (err: any) {
    console.error(
      `❌ Failed to apply migration_${version}.sql`,
      err?.message || err,
    );
    throw err;
  }
};

export const openDatabase = async (): Promise<
  SQLite.SQLiteDatabase | undefined
> => {
  if (db) {
    console.log('🔄 Reusing existing DB instance');
    return db;
  }

  if (dbInitPromise) {
    console.log('⏳ Waiting for ongoing DB init');
    return dbInitPromise;
  }

  console.log('🚀 First-time DB init');

  dbInitPromise = (async () => {
    try {
      await copyMigrationsToInternal();

      if (Platform.OS === 'ios') {
        const srcPath = `${RNFS.MainBundlePath}/${dbName}`;
        const destPath = `${RNFS.DocumentDirectoryPath}/${dbName}`;
        const exists = await RNFS.exists(destPath);

        if (!exists) {
          await RNFS.copyFile(srcPath, destPath);
          console.log('📦 Copied fresh DB for iOS');
        }

        db = await SQLite.openDatabase({name: dbName, location: 'Documents'});
      } else {
        db = await SQLite.openDatabase({
          name: dbName,
          createFromLocation: '~www/Barelvi365.db',
        });
      }

      const [res] = await db.executeSql(
        'SELECT version FROM SchemaVersion WHERE id = 1',
      );

      let currentVersion = res.rows.item(0).version;
      console.log(`🔢 Current schema version: ${currentVersion}`);

      while (currentVersion < maxVersion) {
        console.log(`🔄 Applying migration to version ${currentVersion + 1}`);
        await applyMigration(db, currentVersion + 1);
        currentVersion += 1;
      }

      console.log('✅ DB initialized and ready');
      return db;
    } catch (err: any) {
      console.error('❌ Error opening database:', err?.message || err);
      dbInitPromise = null;
      throw err;
    }
  })();

  return dbInitPromise;
};
