import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: process.env.DB_SOURCE_NAME,
  connector: process.env.DB_CONNECTOR,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: JSON.parse(`${process.env.DB_PORT}`),
  schema: process.env.DB_SCHEMA,
  options: {
    encrypt: true,
  },
};

@lifeCycleObserver('datasource')
export class MicrosoftSqlDbDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = process.env.DB_SOURCE_NAME;
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Microsoft_SQL_DB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
