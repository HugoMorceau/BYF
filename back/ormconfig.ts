import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: 5432,
  username: 'byf',
  password: 'byf',
  database: 'byf',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/**/migration/*.js'],
  synchronize: true,
};

export const AppDataSource = new DataSource(dataSourceOptions);
