import axios from "axios";

const API_URL: string = 'http://43.203.227.36:8080';

const signupApi = async (userdata: any): Promise<any> => {
    try {
        const response = await axios.post(`${API_URL}/user/register`, userdata);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default signupApi;
