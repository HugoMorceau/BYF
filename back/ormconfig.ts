import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
dotenv.config({ path: './src/config/.env' });
console.log('host ormconfig : ' + process.env.DATABASE_HOST);

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  // host: 'byf-db',
  port: 5432,
  username: 'byf',
  password: 'byf',
  database: 'byf',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/**/migration/*.js'],
  synchronize: true,
};

export const AppDataSource = new DataSource(dataSourceOptions);
