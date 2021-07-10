import {products} from './Constant/Product';

import product from './model/productSchema';



const DefaultData = async()=>{
    try{
       await product.insertMany(products);

       console.log('Data imporetd Sucessfully');
    }catch(error){
        console.log('Error', error.message)
    }

}
export default DefaultData;