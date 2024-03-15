import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL: string = 'http://localhost:3001';

export const loginApi = async (userdata : any) : Promise<any> => {
    const navigate = useNavigate(); 
    try{    
        const response = await axios.post(`${API_URL}`, userdata, {withCredentials: true});
        const {result, msg} = response.data
        if(result){
            navigate('/')
        }else{
            console.log('에러 : ', msg)
        }
        console.log(response)
        return response.data
    }catch(error){
        throw error
    }
}

export const logoutApi = async () => {
    try{
        const response = await axios.get(`${API_URL}`, {withCredentials: true})
        console.log(response)
        return response.data
    }catch(error){
        throw error
    }
}
