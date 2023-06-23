import axios from 'axios' 
import { base_Url } from '../../utils/baseUrl';

const register = async(userData)=>{
    const response = await axios.post(`${base_Url}/register`,userData);
    if(response.data){
        return response.data
    }
}


const login = async(userData)=>{
    const response = await axios.post(`${base_Url}/login`,userData);
    if (response.data) {
        localStorage.setItem("admininfo", JSON.stringify(response.data));
      }
      return response.data;
    }
    const logout = async()=>{
        const response = await axios.post(`${base_Url}/logout`);
        if (response.data) {
            localStorage.removeItem("admininfo");
          }
          return response.data;
        }
    



export const authService={
    register,
    login,
    logout
}