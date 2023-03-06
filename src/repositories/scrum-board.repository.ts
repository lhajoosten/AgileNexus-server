import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MicrosoftSqlDbDataSource} from '../datasources';
import {ScrumBoard, ScrumBoardRelations} from '../models';

export class ScrumBoardRepository extends DefaultCrudRepository<
  ScrumBoard,
  typeof ScrumBoard.prototype.boardId,
  ScrumBoardRelations
> {
  constructor(
    @inject('datasources.Microsoft_SQL_DB')
    dataSource: MicrosoftSqlDbDataSource,
  ) {
    super(ScrumBoard, dataSource);
  }
}
