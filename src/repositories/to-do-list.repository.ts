import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MicrosoftSqlDbDataSource} from '../datasources';
import {ToDoList, ToDoListRelations} from '../models';

export class ToDoListRepository extends DefaultCrudRepository<
  ToDoList,
  typeof ToDoList.prototype.listId,
  ToDoListRelations
> {
  constructor(
    @inject('datasources.Microsoft_SQL_DB')
    dataSource: MicrosoftSqlDbDataSource,
  ) {
    super(ToDoList, dataSource);
  }
}
