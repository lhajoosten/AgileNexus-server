import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Sprint extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  sprintId?: number;

  @property({
    type: 'string',
    required: true,
  })
  sprintName: string;

  @property({
    type: 'date',
    required: true,
  })
  startDate: string;

  @property({
    type: 'date',
    required: true,
  })
  endDate: string;

  @property({
    type: 'number',
    required: true,
  })
  teamId: number;

  @property({
    type: 'number',
    required: true,
  })
  projectId: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  tasks: object[];

  @property({
    type: 'number',
    required: true,
  })
  createdBy: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Sprint>) {
    super(data);
  }
}

export interface SprintRelations {
  // describe navigational properties here
}

export type SprintWithRelations = Sprint & SprintRelations;
