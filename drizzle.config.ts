export default {
  schema: "./src/schema",   
  out: "./drizzle/migrations",       
  dialect: "sqlite",          
  dbCredentials: {
    url: './android/app/src/main/assets/www/Barelvi365.db',
  },
  strict: true,
};
