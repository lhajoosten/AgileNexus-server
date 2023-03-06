import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MicrosoftSqlDbDataSource} from '../datasources';
import {Project, ProjectRelations} from '../models';

export class ProjectRepository extends DefaultCrudRepository<
  Project,
  typeof Project.prototype.projectId,
  ProjectRelations
> {
  constructor(
    @inject('datasources.Microsoft_SQL_DB') dataSource: MicrosoftSqlDbDataSource,) {
    super(Project, dataSource);
  }
}
