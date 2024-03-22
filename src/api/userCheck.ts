import axios from "axios";

const API_URL: string = '15.164.102.134:8080';

export const userIdCheckApi = async (InputId : any) : Promise<any> => {
    try{    
        const response = await axios.get(`${API_URL}/user/checkDupId`, {params: {InputId}});
        // console.log(response)
        return response.data
    }catch(error){
        throw error
    }
}

export const userNicknameCheckApi = async (nickname : any) : Promise<any> => {
    try{
        const response = await axios.get(`${API_URL}/user/checkDupNick`, {params : {nickname}})
        console.log(response)
        return response.data
    }catch(error){
        throw error
    }
}


