import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ScrumBoard extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  boardId?: number;

  @property({
    type: 'string',
    required: true,
  })
  boardName: string;

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
  columns: object[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ScrumBoard>) {
    super(data);
  }
}

export interface ScrumBoardRelations {
  // describe navigational properties here
}

export type ScrumBoardWithRelations = ScrumBoard & ScrumBoardRelations;
