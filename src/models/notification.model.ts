import {Entity, model, property} from '@loopback/repository';

@model()
export class Notification extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  notificationId?: number;

  @property({
    type: 'string',
    required: true,
  })
  message: string;

  @property({
    type: 'number',
    required: true,
  })
  recipient: number;

  @property({
    type: 'boolean',
    required: true,
  })
  isRead: boolean;

  @property({
    type: 'date',
    required: true,
  })
  createdAt: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Notification>) {
    super(data);
  }
}

export interface NotificationRelations {
  // describe navigational properties here
}

export type NotificationWithRelations = Notification & NotificationRelations;
