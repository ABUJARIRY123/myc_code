import express, { request, response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import {Books} from './models/bookmodel.js';
import bookRoutes  from './routes/bookRoutes.js'
import cors from 'cors';

const app = express();

//Middleware for passing request body
//app.use(express.json());

//app.use(
//cors({
//origin: 'http://localhost:5555',
//methods: ['GET', 'POST', 'DELETE'],
//allowedHeaders: ['Content-Type'],
//})
//);
app.get('/',(request, response) =>{
    console.log(request)
    return response.status(234).send('Welcome back to this full stack application')
});

app.use('/books', bookRoutes);

mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('Application connected to database');
    app.listen(PORT, () => {
        console.log(`This application is listening to port: ${PORT}`);
    });
})
.catch((error) =>{
    console.log(error);
});