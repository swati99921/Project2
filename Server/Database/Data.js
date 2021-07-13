import express  from 'express';

import mongoose from 'mongoose';
const app = express()
const connection = (username,password) =>{
//mongoose.connect('mongodb+srv://codeforinterview' + '12345' + '@cluster0.zpgic.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')


//mongoose.connect('mongodb+srv://codeforinterview' +'12345' + '@mywebsite.iipln.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

// const URL = 'mongodb+srv://codeforinterview' +'12345' + '@mywebsite.iipln.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// try{
//     await mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false});
//     console.log('Database Connected Sucessfully');

// }catch(error){
//     console.log('Error:', error.message);

// }
console.log('Database connected successfully')




app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error : {
            message : error.message
        }
    })

})
 }

export default connection;