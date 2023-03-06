import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MicrosoftSqlDbDataSource} from '../datasources';
import {BacklogItem, BacklogItemRelations} from '../models';

export class BacklogItemRepository extends DefaultCrudRepository<
  BacklogItem,
  typeof BacklogItem.prototype.itemId,
  BacklogItemRelations
> {
  constructor(
    @inject('datasources.Microsoft_SQL_DB') dataSource: MicrosoftSqlDbDataSource,) {
    super(BacklogItem, dataSource);
  }
}
