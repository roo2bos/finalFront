import axios from "axios";

const API_URL: string = 'http://43.203.227.36:8080';

const signupApi = async (userdata: any): Promise<any> => {
    try {
      const response = await axios.post(`${API_URL}/user/register`, userdata);
      console.log('유저 이름 : ', response.data.username);
      
      if (response.data) {
        window.location.href = `http://localhost:3000/login`;
        alert(`안녕하세요! 회원가입 환영합니다!`);
      } else {
        alert('다시 입력 부탁드립니다.');
      }
      return response.data;
    } catch (error) {
      console.error('회원가입 에러:', error);
      throw error;
    }
  };

export default signupApi;
