import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput, UpdateTodoInput } from './dto/input';
import { StatusArgs } from './dto/args/status.args';
import { AggregationsType } from 'src/type/aggregations.type';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], { name: 'Todo' })
  findAll(@Args() statusArgs: StatusArgs): Todo[] {
    return this.todoService.findAll(statusArgs);
  }

  @Query(() => Todo, { name: 'SearchTodo' })
  findOne(@Args('id', { type: () => Int }) id: number): Todo {
    return this.todoService.findOne(id);
  }

  @Mutation(() => Todo, { name: 'createTodo' })
  createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return this.todoService.create(createTodoInput);
  }

  @Mutation(() => Todo, { name: 'updateTodo' })
  updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
    return this.todoService.update(updateTodoInput);
  }

  @Mutation(() => Boolean)
  removeTodo(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.removeTodo(id);
  }

  @Query(() => Int, { name: 'TotalTodos' })
  TotalTodos(): number {
    return this.todoService.totalTodos;
  }

  @Query(() => Int, { name: 'pendingTodos' })
  pendingTodos(): number {
    return this.todoService.pendingTodos;
  }

  @Query(() => Int, { name: 'completedTodos' })
  completedTodos(): number {
    return this.todoService.completedTodos;
  }

  @Query(() => AggregationsType)
  aggregations(): AggregationsType {
    return {
      total: this.todoService.totalTodos,
      pending: this.todoService.pendingTodos,
      completed: this.todoService.completedTodos,
    };
  }
}
