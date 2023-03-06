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
import {BacklogItem} from '../models';
import {BacklogItemRepository} from '../repositories';

export class BacklogItemController {
  constructor(
    @repository(BacklogItemRepository)
    public backlogItemRepository: BacklogItemRepository,
  ) {}

  @post('/backlog-items')
  @response(200, {
    description: 'BacklogItem model instance',
    content: {'application/json': {schema: getModelSchemaRef(BacklogItem)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BacklogItem, {
            title: 'NewBacklogItem',
            exclude: ['itemId'],
          }),
        },
      },
    })
    backlogItem: Omit<BacklogItem, 'itemId'>,
  ): Promise<BacklogItem> {
    return this.backlogItemRepository.create(backlogItem);
  }

  @get('/backlog-items/count')
  @response(200, {
    description: 'BacklogItem model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BacklogItem) where?: Where<BacklogItem>,
  ): Promise<Count> {
    return this.backlogItemRepository.count(where);
  }

  @get('/backlog-items')
  @response(200, {
    description: 'Array of BacklogItem model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BacklogItem, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BacklogItem) filter?: Filter<BacklogItem>,
  ): Promise<BacklogItem[]> {
    return this.backlogItemRepository.find(filter);
  }

  @patch('/backlog-items')
  @response(200, {
    description: 'BacklogItem PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BacklogItem, {partial: true}),
        },
      },
    })
    backlogItem: BacklogItem,
    @param.where(BacklogItem) where?: Where<BacklogItem>,
  ): Promise<Count> {
    return this.backlogItemRepository.updateAll(backlogItem, where);
  }

  @get('/backlog-items/{id}')
  @response(200, {
    description: 'BacklogItem model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BacklogItem, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(BacklogItem, {exclude: 'where'})
    filter?: FilterExcludingWhere<BacklogItem>,
  ): Promise<BacklogItem> {
    return this.backlogItemRepository.findById(id, filter);
  }

  @patch('/backlog-items/{id}')
  @response(204, {
    description: 'BacklogItem PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BacklogItem, {partial: true}),
        },
      },
    })
    backlogItem: BacklogItem,
  ): Promise<void> {
    await this.backlogItemRepository.updateById(id, backlogItem);
  }

  @put('/backlog-items/{id}')
  @response(204, {
    description: 'BacklogItem PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() backlogItem: BacklogItem,
  ): Promise<void> {
    await this.backlogItemRepository.replaceById(id, backlogItem);
  }

  @del('/backlog-items/{id}')
  @response(204, {
    description: 'BacklogItem DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.backlogItemRepository.deleteById(id);
  }
}
