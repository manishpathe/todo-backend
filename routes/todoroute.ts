import express from 'express';
import { Router } from "express"
import { PrismaClient } from "@prisma/client";
import validated from '../validation/schema/todo_create_validation_check';
import todo_create_controller  from '../controller/todo_create_controller';
import createTodoValidator from '../validation/todo.validation';

const {createTodo, updateTodo, deleteTodo, getAllTodos, getTodoById}= todo_create_controller

const router = Router();
const db = new PrismaClient()


router.get('/:id', getTodoById)

//get all the todos
router.get('/', getAllTodos)

//delete todo
router.delete('/:id', deleteTodo )

router.put('/', updateTodo)

router.post('/', createTodoValidator, createTodo)


export default router;