import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'byf',
  password: 'byf',
  database: 'byf',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/**/migration/*.js'],
  synchronize: false,
};

export const AppDataSource = new DataSource(dataSourceOptions);
