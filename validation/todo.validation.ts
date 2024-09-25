import express from 'express';
import createTodoSchema from "./schema/todo_create_validation_check";



const createTodoValidator = function (req :express.Request, res:express.Response , next:express.NextFunction) {
    let result = createTodoSchema.validate(req.body);
    if(result.error){
        throw new Error(result.error.message);
    }
    
    next();
    
  }

export default createTodoValidator
