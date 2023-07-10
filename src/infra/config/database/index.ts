/* eslint-disable no-unsafe-finally */
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'delivery-db',
  port: 5432,
  username: 'dev',
  password: 'dev',
  database: 'delivery',
  entities: ['src/infra/persistence/models/**/*{.ts,.js}'],
  migrations: ['src/infra/config/database/migrations/*.ts'],
  synchronize: true,
  logging: false,
});

export async function getDbConnection() {
  try {
    AppDataSource.initialize();
    console.log('Data Source has been initialized!');
  } catch (err) {
    console.log('Error during Source initialization:', err);
  } finally {
    return AppDataSource;
  }
}
