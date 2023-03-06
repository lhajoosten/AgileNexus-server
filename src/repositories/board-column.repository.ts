import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MicrosoftSqlDbDataSource} from '../datasources';
import {BoardColumn, BoardColumnRelations} from '../models';

export class BoardColumnRepository extends DefaultCrudRepository<
  BoardColumn,
  typeof BoardColumn.prototype.columnId,
  BoardColumnRelations
> {
  constructor(
    @inject('datasources.Microsoft_SQL_DB') dataSource: MicrosoftSqlDbDataSource,) {
    super(BoardColumn, dataSource);
  }
}
