import express, { Application, query } from 'express';
import router from './todoroute'; 
// import { PrismaClient } from '@prisma/client';
// import { Router } from 'express';


const app = express();

const port = process.env.PORT || 3000
// const db = new PrismaClient()

app.use(express.json())
app.use('/api/todo', router )



app.listen(port, () => console.log("listening of port 3000"));