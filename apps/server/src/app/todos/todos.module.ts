import { TodosController } from './todos.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        TodosController],
    providers: []
})
export class TodosModule { }
