import axios from 'axios';

const API_URL: string = 'http://43.203.227.36:8080';

export const loginApi = async (userdata: any): Promise<any> => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, userdata, { withCredentials: true });
    console.log(response);
    if (response.data.result === false) {
      alert('아이디 및 비밀번호를 다시 확인 부탁드립니다.')
    } else {
      // window.location.href = `http://localhost:3000`;
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const logoutApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/user/logout`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
