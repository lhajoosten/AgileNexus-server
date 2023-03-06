import {Entity, model, property} from '@loopback/repository';

@model()
export class BoardColumn extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  columnId?: number;

  @property({
    type: 'string',
    required: true,
  })
  columnName: string;

  @property({
    type: 'number',
    required: true,
  })
  boardId: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  items: object[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BoardColumn>) {
    super(data);
  }
}

export interface BoardColumnRelations {
  // describe navigational properties here
}

export type BoardColumnWithRelations = BoardColumn & BoardColumnRelations;
