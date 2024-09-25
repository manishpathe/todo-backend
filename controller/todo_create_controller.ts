import express from 'express';
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient()

const createTodo = async (req :express.Request, res:express.Response , _next:express.NextFunction)=>{
    const { title ,description } = req.body;
    
    const todo = await db.todo.create({
      data: {
        title: title,
        description: description,
      },
  
    })
    res.status(200).send(todo);
  } 


const updateTodo = async (req :express.Request, res:express.Response, _next:express.NextFunction)=>{
    const {id, title, description} = req.body;
    
    const todo = await db.todo.update({
      where:{
        id :Number(id),
      },
  
      data: {
        title: title,
        description: description,
      },
    });
    res.status(200).json(todo)
  
  }  


  const deleteTodo = async (req :express.Request, res:express.Response, _next:express.NextFunction)=>{
    const {id}= req.params
    const todo = await db.todo.delete({
        where: {
          id:Number(id),
        },
      });
    res.status(200).send('deleted'); 
  }


  const getAllTodos =  async (_req :express.Request, res:express.Response, _next:express.NextFunction)=>{

    const todo = await db.todo.findMany({
      orderBy:{
        id: "asc",
      }
      });
    res.status(200).json(todo); 
  } 

  const getTodoById = async (req :express.Request, res:express.Response, _next:express.NextFunction)=>{
    const { id } = req.params;
    
    const todo = await db.todo.findUnique({
        where: {
          id: Number(id),
        },
        select: {
          id: true,
          title: true,
          description:true,
        },
      });
    res.status(200).json(todo); 
}


export default {createTodo, updateTodo , deleteTodo, getAllTodos, getTodoById}
