import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MicrosoftSqlDbDataSource} from '../datasources';
import {Team, TeamRelations} from '../models';

export class TeamRepository extends DefaultCrudRepository<
  Team,
  typeof Team.prototype.teamId,
  TeamRelations
> {
  constructor(
    @inject('datasources.Microsoft_SQL_DB')
    dataSource: MicrosoftSqlDbDataSource,
  ) {
    super(Team, dataSource);
  }
}
