import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Team extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  teamId?: number;

  @property({
    type: 'string',
    required: true,
  })
  teamName: string;

  @property({
    type: 'number',
    required: true,
  })
  createdBy: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  members: object[];

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  projects: object[];

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  sprints: object[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Team>) {
    super(data);
  }
}

export interface TeamRelations {
  // describe navigational properties here
}

export type TeamWithRelations = Team & TeamRelations;
