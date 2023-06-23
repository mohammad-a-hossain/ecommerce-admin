import axios from "axios";
import {base_Url}  from '../../utils/baseUrl';
import { config } from '../../utils/axiosConfig';

const createCategory= async ( category)=>{
    const response= await axios.post('http://localhost:8080/api/admin/category',category,config)
    if(response.data){
            return response.data
        }
  
}  
// const createCategory = async(category)=>{
//   const response = await axios.post(`http://localhost:8080/api/admin/category`,category);
//   if(response.data){
//       return response.data
//   }
// }




const CategoryService = {
   createCategory,
}

export default CategoryService