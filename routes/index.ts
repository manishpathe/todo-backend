import express from 'express';

const app = express;

app.get('api/todo/getalltodos', ()=>{
    const {todolist} = req.query;
} )