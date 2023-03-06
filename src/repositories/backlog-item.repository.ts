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
    @inject('datasources.') dataSource: MicrosoftSqlDbDataSource,
  ) {
    super(BacklogItem, dataSource);
  }
}
