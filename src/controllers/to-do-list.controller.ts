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
import {ToDoList} from '../models';
import {ToDoListRepository} from '../repositories';

export class ToDoListController {
  constructor(
    @repository(ToDoListRepository)
    public toDoListRepository: ToDoListRepository,
  ) {}

  @post('/to-do-lists')
  @response(200, {
    description: 'ToDoList model instance',
    content: {'application/json': {schema: getModelSchemaRef(ToDoList)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ToDoList, {
            title: 'NewToDoList',
            exclude: ['listId'],
          }),
        },
      },
    })
    toDoList: Omit<ToDoList, 'listId'>,
  ): Promise<ToDoList> {
    return this.toDoListRepository.create(toDoList);
  }

  @get('/to-do-lists/count')
  @response(200, {
    description: 'ToDoList model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(ToDoList) where?: Where<ToDoList>): Promise<Count> {
    return this.toDoListRepository.count(where);
  }

  @get('/to-do-lists')
  @response(200, {
    description: 'Array of ToDoList model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ToDoList, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ToDoList) filter?: Filter<ToDoList>,
  ): Promise<ToDoList[]> {
    return this.toDoListRepository.find(filter);
  }

  @patch('/to-do-lists')
  @response(200, {
    description: 'ToDoList PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ToDoList, {partial: true}),
        },
      },
    })
    toDoList: ToDoList,
    @param.where(ToDoList) where?: Where<ToDoList>,
  ): Promise<Count> {
    return this.toDoListRepository.updateAll(toDoList, where);
  }

  @get('/to-do-lists/{id}')
  @response(200, {
    description: 'ToDoList model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ToDoList, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ToDoList, {exclude: 'where'})
    filter?: FilterExcludingWhere<ToDoList>,
  ): Promise<ToDoList> {
    return this.toDoListRepository.findById(id, filter);
  }

  @patch('/to-do-lists/{id}')
  @response(204, {
    description: 'ToDoList PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ToDoList, {partial: true}),
        },
      },
    })
    toDoList: ToDoList,
  ): Promise<void> {
    await this.toDoListRepository.updateById(id, toDoList);
  }

  @put('/to-do-lists/{id}')
  @response(204, {
    description: 'ToDoList PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() toDoList: ToDoList,
  ): Promise<void> {
    await this.toDoListRepository.replaceById(id, toDoList);
  }

  @del('/to-do-lists/{id}')
  @response(204, {
    description: 'ToDoList DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.toDoListRepository.deleteById(id);
  }
}
