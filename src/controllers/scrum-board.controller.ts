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
import {ScrumBoard} from '../models';
import {ScrumBoardRepository} from '../repositories';

export class ScrumBoardController {
  constructor(
    @repository(ScrumBoardRepository)
    public scrumBoardRepository : ScrumBoardRepository,
  ) {}

  @post('/scrum-boards')
  @response(200, {
    description: 'ScrumBoard model instance',
    content: {'application/json': {schema: getModelSchemaRef(ScrumBoard)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ScrumBoard, {
            title: 'NewScrumBoard',
            exclude: ['boardId'],
          }),
        },
      },
    })
    scrumBoard: Omit<ScrumBoard, 'boardId'>,
  ): Promise<ScrumBoard> {
    return this.scrumBoardRepository.create(scrumBoard);
  }

  @get('/scrum-boards/count')
  @response(200, {
    description: 'ScrumBoard model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ScrumBoard) where?: Where<ScrumBoard>,
  ): Promise<Count> {
    return this.scrumBoardRepository.count(where);
  }

  @get('/scrum-boards')
  @response(200, {
    description: 'Array of ScrumBoard model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ScrumBoard, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ScrumBoard) filter?: Filter<ScrumBoard>,
  ): Promise<ScrumBoard[]> {
    return this.scrumBoardRepository.find(filter);
  }

  @patch('/scrum-boards')
  @response(200, {
    description: 'ScrumBoard PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ScrumBoard, {partial: true}),
        },
      },
    })
    scrumBoard: ScrumBoard,
    @param.where(ScrumBoard) where?: Where<ScrumBoard>,
  ): Promise<Count> {
    return this.scrumBoardRepository.updateAll(scrumBoard, where);
  }

  @get('/scrum-boards/{id}')
  @response(200, {
    description: 'ScrumBoard model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ScrumBoard, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ScrumBoard, {exclude: 'where'}) filter?: FilterExcludingWhere<ScrumBoard>
  ): Promise<ScrumBoard> {
    return this.scrumBoardRepository.findById(id, filter);
  }

  @patch('/scrum-boards/{id}')
  @response(204, {
    description: 'ScrumBoard PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ScrumBoard, {partial: true}),
        },
      },
    })
    scrumBoard: ScrumBoard,
  ): Promise<void> {
    await this.scrumBoardRepository.updateById(id, scrumBoard);
  }

  @put('/scrum-boards/{id}')
  @response(204, {
    description: 'ScrumBoard PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() scrumBoard: ScrumBoard,
  ): Promise<void> {
    await this.scrumBoardRepository.replaceById(id, scrumBoard);
  }

  @del('/scrum-boards/{id}')
  @response(204, {
    description: 'ScrumBoard DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.scrumBoardRepository.deleteById(id);
  }
}
