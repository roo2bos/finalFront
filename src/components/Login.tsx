import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { loginUser, logoutUser } from '../store/features/loginSlice';
import { useAppDispatch } from '../hooks';
import '../assets/css/auth.css';
import { useEffect, useState } from 'react';
// 지워야함
import { authUsers } from '../store/features/loginSlice';
import axios from 'axios';




type FormData = {
  userId: string;
  password: string;
};

export default function Login() {
  const dispatch = useAppDispatch();

  const [user, setUser] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (userdata) => {
    console.log('onSubmit', userdata);
    dispatch(loginUser(userdata));
  };

  const onError: SubmitErrorHandler<FormData> = (errors) => {
    console.log('onError', errors);
  };
  
  // 지워야함
  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_URL = 'https://43.203.227.36.sslip.io/server';
        const response = await axios.get(`${API_URL}/user/authuser`, { withCredentials: true });
        setUser(response.data.nickname);
        console.log('데이터를 받아오는?  : ', response.data);
        console.log('넥님 좀 떠줘? : ', response.data.nickname)
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleLogout = async () => {
    dispatch(authUsers()); 
    // dispatch(logoutUser())
  
    try {
      const API_URL = 'https://43.203.227.36.sslip.io/server';
      const response = await axios.get(`${API_URL}/user/authuser`, { withCredentials: true });
      setUser(response.data.nickname);
      console.log(response.data);
      console.log('넥님 좀 떠줘?? : ', response.data.nickname);
    } catch (error) {
      console.error('error', error);
    }
  };




  return (
    <div className='form-container'>
      <div className='form-area'>
        <div className='form-elements'>
          <div className='form-title'>
            <Link to='/'>
              <h1 className='logo'>DoRun-DoRun</h1>
            </Link>
            <button onClick={handleLogout}>제발 닉넴 좀 떠줘 : {user}</button>
          </div>
          <div className='form-box'>
            <form
              className='auth-form'
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <label className='auth-label' htmlFor='userId'>
                아이디
              </label>
              <input
                className='auth-input'
                type='text'
                id='userId'
                placeholder='아이디를 입력해주세요'
                {...register('userId', {
                  required: '아이디를 입력해주세요',
                })}
              />
              {errors.userId && (
                <span className='auth-span' role='alert'>
                  {errors.userId.message}
                </span>
              )}
              <label className='auth-label' htmlFor='password'>
                비밀번호
              </label>
              <input
                className='auth-input'
                type='password'
                id='password'
                placeholder='비밀번호를 입력해주세요'
                {...register('password', {
                  required: '비밀번호를 입력하세요',
                  minLength: {
                    value: 8,
                    message: '비밀번호는 8자 이상이어야 합니다',
                  },
                  validate: (value) => {
                    const hasNumber = /\d/.test(value);
                    const hasUpperCase = /[A-Z]/.test(value);
                    const hasLowerCase = /[a-z]/.test(value);
                    const hasSpecialChar = /[!@#$%^&*]/.test(value);
                    return (
                      (hasNumber &&
                        hasUpperCase &&
                        hasLowerCase &&
                        hasSpecialChar) ||
                      '비밀번호는 숫자, 대문자, 소문자, 특수문자를 포함해야 합니다'
                    );
                  },
                })}
              />
              {errors.password && (
                <span className='auth-span' role='alert'>
                  {errors.password.message}
                </span>
              )}
              <button className='auth-btn' type='submit'>
                로그인
              </button>
            </form>
          </div>
          <div className='signup-link'>
            <span>아직 회원이 아니라면? </span>
            <span>
              <Link to='/signup'>회원가입</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
