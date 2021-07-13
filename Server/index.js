

// const express = require('express');
// const {connection} = require('./Database/Data');

// const dotenv = require('dotenv');
import express from 'express';
import dotenv from 'dotenv';
//import  connection from './Database/Data.js';
//import data2 from './Database/data2.js';
import DefaultData from './default.js';
import mongoose from 'mongoose';
dotenv.config();

const app = express();
const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env. DB_PASSWORD;
//connection(username,password);
//Data2(username,password);

app.listen(PORT, ()=> console.log(`Server is sucessfully on  running ${PORT}`));
const db = `mongodb+srv://codeforinterview:12345@mywebsite.iipln.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(db)

DefaultData();


