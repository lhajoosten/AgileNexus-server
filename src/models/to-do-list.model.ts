import {Entity, model, property} from '@loopback/repository';

@model()
export class ToDoList extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  listId?: number;

  @property({
    type: 'string',
    required: true,
  })
  listName: string;

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

  constructor(data?: Partial<ToDoList>) {
    super(data);
  }
}

export interface ToDoListRelations {
  // describe navigational properties here
}

export type ToDoListWithRelations = ToDoList & ToDoListRelations;
