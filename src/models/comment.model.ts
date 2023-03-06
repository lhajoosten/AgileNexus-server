import {Entity, model, property} from '@loopback/repository';

@model()
export class Comment extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  commentId?: number;

  @property({
    type: 'string',
    required: true,
  })
  commentText: string;

  @property({
    type: 'number',
    required: true,
  })
  createdBy: number;

  @property({
    type: 'number',
    required: true,
  })
  taskId: number;

  @property({
    type: 'date',
    required: true,
  })
  createdAt: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Comment>) {
    super(data);
  }
}

export interface CommentRelations {
  // describe navigational properties here
}

export type CommentWithRelations = Comment & CommentRelations;
