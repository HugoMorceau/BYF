import { DataSource } from 'typeorm';
import { join } from 'path';
import { User } from './src/entity/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'byf',
  password: 'byf',
  database: 'byf',
  entities: ['dist/**/*.entity.js'],
  // entities: [User],
  // entities: ['d ist/**/*.entity.js'],
  // entities: ['src/entity/*.ts'],
  // entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  // migrations: ['src/migration/*.ts'],
  migrations: ['dist/migration/*.js'],
  synchronize: false,
});
