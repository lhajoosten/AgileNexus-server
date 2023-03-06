import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Project extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  projectId?: number;

  @property({
    type: 'string',
    required: true,
  })
  projectName: string;

  @property({
    type: 'number',
    required: true,
  })
  createdBy: number;

  @property({
    type: 'number',
    required: true,
  })
  teamId: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  sprints: object[];

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  tasks: object[];

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  scrumBoards: object[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Project>) {
    super(data);
  }
}

export interface ProjectRelations {
  // describe navigational properties here
}

export type ProjectWithRelations = Project & ProjectRelations;
