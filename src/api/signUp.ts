import axios from "axios";

const signup = async (userdata: any): Promise<any> => {
    const API_URL: string = 'http://localhost:3001'; 
    try {
        const response = await axios.post(`${API_URL}`, userdata);
        console.log(response);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default signup;
