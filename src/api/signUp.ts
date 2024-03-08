import axios from "axios";

const API_URL: string = 'http://localhost:3001';

const signupApi = async (userdata: any): Promise<any> => {
    try {
        const response = await axios.post(`${API_URL}`, userdata);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default signupApi;
