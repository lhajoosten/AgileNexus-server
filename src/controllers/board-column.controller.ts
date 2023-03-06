import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {BoardColumn} from '../models';
import {BoardColumnRepository} from '../repositories';

export class BoardColumnController {
  constructor(
    @repository(BoardColumnRepository)
    public boardColumnRepository : BoardColumnRepository,
  ) {}

  @post('/board-columns')
  @response(200, {
    description: 'BoardColumn model instance',
    content: {'application/json': {schema: getModelSchemaRef(BoardColumn)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BoardColumn, {
            title: 'NewBoardColumn',
            exclude: ['columnId'],
          }),
        },
      },
    })
    boardColumn: Omit<BoardColumn, 'columnId'>,
  ): Promise<BoardColumn> {
    return this.boardColumnRepository.create(boardColumn);
  }

  @get('/board-columns/count')
  @response(200, {
    description: 'BoardColumn model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BoardColumn) where?: Where<BoardColumn>,
  ): Promise<Count> {
    return this.boardColumnRepository.count(where);
  }

  @get('/board-columns')
  @response(200, {
    description: 'Array of BoardColumn model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BoardColumn, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BoardColumn) filter?: Filter<BoardColumn>,
  ): Promise<BoardColumn[]> {
    return this.boardColumnRepository.find(filter);
  }

  @patch('/board-columns')
  @response(200, {
    description: 'BoardColumn PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BoardColumn, {partial: true}),
        },
      },
    })
    boardColumn: BoardColumn,
    @param.where(BoardColumn) where?: Where<BoardColumn>,
  ): Promise<Count> {
    return this.boardColumnRepository.updateAll(boardColumn, where);
  }

  @get('/board-columns/{id}')
  @response(200, {
    description: 'BoardColumn model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BoardColumn, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(BoardColumn, {exclude: 'where'}) filter?: FilterExcludingWhere<BoardColumn>
  ): Promise<BoardColumn> {
    return this.boardColumnRepository.findById(id, filter);
  }

  @patch('/board-columns/{id}')
  @response(204, {
    description: 'BoardColumn PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BoardColumn, {partial: true}),
        },
      },
    })
    boardColumn: BoardColumn,
  ): Promise<void> {
    await this.boardColumnRepository.updateById(id, boardColumn);
  }

  @put('/board-columns/{id}')
  @response(204, {
    description: 'BoardColumn PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() boardColumn: BoardColumn,
  ): Promise<void> {
    await this.boardColumnRepository.replaceById(id, boardColumn);
  }

  @del('/board-columns/{id}')
  @response(204, {
    description: 'BoardColumn DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.boardColumnRepository.deleteById(id);
  }
}
