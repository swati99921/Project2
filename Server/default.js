import {products} from "./Constant/product.js";
//import express  from 'express';

import Product from './model/productSchema.js';
//const app = express();



const DefaultData = async()=>{
    try{

       // await Product.deleteMany({});
         await Product.insertMany(products);

       console.log('Data imported Sucessfully');
    }catch(error){
        console.log('Error', error.message);
    }

 }


export default DefaultData;