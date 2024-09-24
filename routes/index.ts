import express, { Application, query } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = process.env.PORT || 3000
const db = new PrismaClient()

app.use(express.json())

// to get single id 
app.get('/api/todo/gettodo/:id', async (req :express.Request, res:express.Response )=>{
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
} )


app.put('/api/todo/updatetodo', async (req :express.Request, res:express.Response )=>{
  const {id, title, description} = req.body;

  const updatedtodo = await db.todo.update({
    where:{
      id :Number(id)
      
    },
  });

})




app.post('/api/todo/addtodo', async (req :express.Request, res:express.Response , next:express.NextFunction)=>{
  const { title ,description } = req.body;
  console.log('Received data:', { title, description });
  
  const todo = await db.todo.create({
/*    data: {
      title: "added",
      description: "todo added by api",
    },
*/
    data: {
      title: title,
      description: description,
    },

  })
  res.status(200).send(todo);
} )



app.listen(port, () => console.log("listening of port 3000"));