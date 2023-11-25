// import express from 'express';
// import { PORT, mongoDBURL } from './config.js';
// import booksRoute from './routes/booksRoute.js';
// import cors from 'cors';
// import mongoose from 'mongoose';

const express = require("express");
const { PORT, mongoDBURL } = require('./config.js')
// const MongoClient = require( 'mongodb')
const booksRoute = require('./routes/booksRoute.js')
const cors = require('cors')
const mongoose = require('mongoose');


const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (request, response) => {
  console.log(request);
  return response.status(200).send('Welcome To MERN Stack Tutorial');
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    // app.listen(PORT, () => {
    //   console.log(`App is listening to port: ${PORT}`);
    // });
  })
  .catch((error) => {
    console.log(error);
  });
// MongoClient.connect(mongoDBURL, function (err, client) {
//   // perform actions on the collection object
//   try {
//     console.log('App connected to database');
//     app.listen(PORT, () => {
//       console.log(`App is listening to port: ${PORT}`);
//     });
//   } catch (err) {
//     console.log(err);
//     client.close();
//   }
// });
// export default app;
module.exports = app;
// module.exports = LineItemController