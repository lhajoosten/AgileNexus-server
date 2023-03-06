import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MicrosoftSqlDbDataSource} from '../datasources';
import {Task, TaskRelations} from '../models';

export class TaskRepository extends DefaultCrudRepository<
  Task,
  typeof Task.prototype.taskId,
  TaskRelations
> {
  constructor(
    @inject('datasources.Microsoft_SQL_DB') dataSource: MicrosoftSqlDbDataSource,) {
    super(Task, dataSource);
  }
}
