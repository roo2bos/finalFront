import axios from 'axios';

const API_URL: string = 'http://43.203.227.36:8080';

export const loginApi = async (userdata: any): Promise<any> => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, userdata, { withCredentials: true });
    console.log(response);
    console.log(userdata)
    if (response.data.result === false) {
      alert(response.data.msg)
    } else {
      // window.location.href = `http://43.203.227.36`
      alert('로그인에 성공하였습니다')
      response.data
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
