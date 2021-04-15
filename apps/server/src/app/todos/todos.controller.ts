import { Controller, Get, Req, Res, Post, Body, Query } from '@nestjs/common';

import { CreateDto } from "./todos.create-dto"

@Controller("todos")
export class TodosController {
  todos: any[] = [];

  @Get()
  getTodos() {

    return this.todos;
  }

  @Post('/:id')
  createTodos(@Body() dto: CreateDto) {
    this.todos.push(dto)
    return dto;
  } 12
}
