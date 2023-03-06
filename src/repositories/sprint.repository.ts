import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MicrosoftSqlDbDataSource} from '../datasources';
import {Sprint, SprintRelations} from '../models';

export class SprintRepository extends DefaultCrudRepository<
  Sprint,
  typeof Sprint.prototype.sprintId,
  SprintRelations
> {
  constructor(
    @inject('datasources.Microsoft_SQL_DB')
    dataSource: MicrosoftSqlDbDataSource,
  ) {
    super(Sprint, dataSource);
  }
}
