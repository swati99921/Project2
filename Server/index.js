

// const express = require('express');
// const {connection} = require('./Database/Data');

// const dotenv = require('dotenv');
import express from 'express';
import dotenv from 'dotenv';
import  connection from './Database/Data.js';
import DefaultData from './default.js';



dotenv.config();



DefaultData();

 


const app = express();
const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env. DB_PASSWORD;
connection(username,password);

app.listen(PORT, ()=> console.log(`Server is sucessfully on  running ${PORT}`));