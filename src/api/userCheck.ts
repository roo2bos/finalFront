import axios from "axios";

const API_URL: string = 'http://localhost:3001';

export const userIdCheckApi = async (userId : any) : Promise<any> => {
    try{    
        const response = await axios.get(`${API_URL}`, {params: {userId}});
        console.log(response)
        return response.data
    }catch(error){
        throw error
    }
}

export const userNicknameCheckApi = async (nickname : any) : Promise<any> => {
    try{
        const response = await axios.get(`${API_URL}`, {params : {nickname}})
        console.log(response)
        return response.data
    }catch(error){
        throw error
    }
}


