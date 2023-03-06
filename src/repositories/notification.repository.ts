import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MicrosoftSqlDbDataSource} from '../datasources';
import {Notification, NotificationRelations} from '../models';

export class NotificationRepository extends DefaultCrudRepository<
  Notification,
  typeof Notification.prototype.notificationId,
  NotificationRelations
> {
  constructor(
    @inject('datasources.') dataSource: MicrosoftSqlDbDataSource,
  ) {
    super(Notification, dataSource);
  }
}
