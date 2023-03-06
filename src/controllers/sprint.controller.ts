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
import {Sprint} from '../models';
import {SprintRepository} from '../repositories';

export class SprintController {
  constructor(
    @repository(SprintRepository)
    public sprintRepository : SprintRepository,
  ) {}

  @post('/sprints')
  @response(200, {
    description: 'Sprint model instance',
    content: {'application/json': {schema: getModelSchemaRef(Sprint)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sprint, {
            title: 'NewSprint',
            exclude: ['sprintId'],
          }),
        },
      },
    })
    sprint: Omit<Sprint, 'sprintId'>,
  ): Promise<Sprint> {
    return this.sprintRepository.create(sprint);
  }

  @get('/sprints/count')
  @response(200, {
    description: 'Sprint model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Sprint) where?: Where<Sprint>,
  ): Promise<Count> {
    return this.sprintRepository.count(where);
  }

  @get('/sprints')
  @response(200, {
    description: 'Array of Sprint model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Sprint, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Sprint) filter?: Filter<Sprint>,
  ): Promise<Sprint[]> {
    return this.sprintRepository.find(filter);
  }

  @patch('/sprints')
  @response(200, {
    description: 'Sprint PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sprint, {partial: true}),
        },
      },
    })
    sprint: Sprint,
    @param.where(Sprint) where?: Where<Sprint>,
  ): Promise<Count> {
    return this.sprintRepository.updateAll(sprint, where);
  }

  @get('/sprints/{id}')
  @response(200, {
    description: 'Sprint model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Sprint, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Sprint, {exclude: 'where'}) filter?: FilterExcludingWhere<Sprint>
  ): Promise<Sprint> {
    return this.sprintRepository.findById(id, filter);
  }

  @patch('/sprints/{id}')
  @response(204, {
    description: 'Sprint PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sprint, {partial: true}),
        },
      },
    })
    sprint: Sprint,
  ): Promise<void> {
    await this.sprintRepository.updateById(id, sprint);
  }

  @put('/sprints/{id}')
  @response(204, {
    description: 'Sprint PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sprint: Sprint,
  ): Promise<void> {
    await this.sprintRepository.replaceById(id, sprint);
  }

  @del('/sprints/{id}')
  @response(204, {
    description: 'Sprint DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sprintRepository.deleteById(id);
  }
}
