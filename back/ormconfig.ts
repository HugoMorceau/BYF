import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const snakeNamingStrategy = new SnakeNamingStrategy();

dotenv.config({ path: './src/config/.env' });
console.log('host ormconfig : ' + process.env.DATABASE_HOST);

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: 5432,
  username: 'byf',
  password: 'byf',
  database: 'byf',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/**/migration/*.js'],
  namingStrategy: snakeNamingStrategy, // transform camelCase to snake_case in database
  synchronize: true,
};

export const AppDataSource = new DataSource(dataSourceOptions);
