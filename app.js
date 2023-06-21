import express from 'express'; 
const app = express();// const express = require('express');

import * as dotenv from 'dotenv'; //
import connectdb from './db/connect.js';
import tasks from './routes/tasks.js'


dotenv.config()



app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)


const port = process.env.PORT || 5000
const url = process.env.MONGO_URI
const start = async() =>{
    try{
        await connectdb(url)
        app.listen(port, ( )=> console.log("hello server listening"))
    }catch(e){
        console.log(e)
    }
}

start()


