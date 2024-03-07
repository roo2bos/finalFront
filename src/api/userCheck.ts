import axios from "axios";

const API_URL: string = 'http://localhost:3001';

export const userIdCheckApi = async (userdata : any) : Promise<any> => {
    try{    
        const response = await axios.post(`${API_URL}`, userdata, {withCredentials: true});
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


