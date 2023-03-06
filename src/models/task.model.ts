import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Task extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  taskId?: number;

  @property({
    type: 'string',
    required: true,
  })
  taskName: string;

  @property({
    type: 'string',
    required: true,
  })
  taskDescription: string;

  @property({
    type: 'number',
    required: true,
  })
  assignee: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'string',
    required: true,
  })
  priority: string;

  @property({
    type: 'number',
    required: true,
  })
  sprintId: number;

  @property({
    type: 'number',
    required: true,
  })
  projectId: number;

  @property({
    type: 'number',
    required: true,
  })
  toDoListId: number;

  @property({
    type: 'number',
    required: true,
  })
  createdBy: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Task>) {
    super(data);
  }
}

export interface TaskRelations {
  // describe navigational properties here
}

export type TaskWithRelations = Task & TaskRelations;
