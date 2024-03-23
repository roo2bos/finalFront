import axios from "axios";

const API_URL: string = 'http://43.203.227.36:8080';

const signupApi = async (userdata: any): Promise<any> => {
    try {
        const response = await axios.post( `${API_URL}/user/register`, userdata);
        console.log(response);
        if (response.data) {
            console.log('회원가입 성공');
            alert('회원가입성공')
        } else {
            console.log('회원가입 실패');
            alert('회원가입실패');
            window.location.href = `${API_URL}/login`
        }
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default signupApi;
