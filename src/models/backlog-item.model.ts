import {Entity, model, property} from '@loopback/repository';

@model()
export class BacklogItem extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  itemId?: number;

  @property({
    type: 'string',
    required: true,
  })
  itemName: string;

  @property({
    type: 'string',
    required: true,
  })
  itemDescription: string;

  @property({
    type: 'string',
    required: true,
  })
  itemPriority: string;

  @property({
    type: 'string',
    required: true,
  })
  itemStatus: string;

  @property({
    type: 'number',
    required: true,
  })
  itemAssignedTo: number;

  @property({
    type: 'number',
    required: true,
  })
  itemCreatedBy: number;

  @property({
    type: 'number',
    required: true,
  })
  columnId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BacklogItem>) {
    super(data);
  }
}

export interface BacklogItemRelations {
  // describe navigational properties here
}

export type BacklogItemWithRelations = BacklogItem & BacklogItemRelations;
