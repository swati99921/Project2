import axios from "axios";
const url = 'http://localhost:8000'

export const authentiactionSignup =  async (user) => {
    try{
    return  await axios.post(`${url}/signup`,user)
    }catch(error){
        console.log('Error while calling signupapi');
    }
}