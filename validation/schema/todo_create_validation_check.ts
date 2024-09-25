import Joi from 'joi'

const createTodoSchema = Joi.object({
    title : Joi.string().max(255),
    description: Joi.string().alphanum()

})


export default createTodoSchema;