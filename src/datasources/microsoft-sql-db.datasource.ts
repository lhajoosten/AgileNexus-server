import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  "name": "Microsoft_SQL_DB",
  "server": process.env.DATABASE_SERVER,
  "dialect": "MSSQL",
  "port": process.env.DATABASE_PORT,
  "database": process.env.DATABASE_NAME,
  "domain": process.env.DATABASE_DOMAIN,
  "username": process.env.DATABASE_USER,
  "askForPassword": process.env.DATABASE_ASK_PASSWORD,
  "connectionTimeout": 60
};

@lifeCycleObserver('datasource')
export class MicrosoftSqlDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Microsoft_SQL_DB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.SQL_Server', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
