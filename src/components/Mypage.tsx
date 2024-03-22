import { useForm, SubmitHandler} from 'react-hook-form';
import { useAppDispatch } from '../hooks';
// import { useDispatch } from 'react-redux';
import { userNicknameCheck } from '../store/features/userIdCheck';
// import { signUpUser } from '../store/features/signUpSlice';
import '../assets/css/auth.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

type FormData = {
  username: string;
  userId: string;
  nickname : string;
  email: string;
  password: string;
};

export default function Mypage() {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  const [getUser, setGetUser] = useState<FormData | null>(null);

  // 수정페이지 form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  // 수정페이지 전송
  const onSubmit: SubmitHandler<FormData> = async (userdata) => {
    try {
      await axios.put(``, userdata);
      setGetUser(userdata);
    } catch (error) {
      console.error('에러라네',error);
    }
  };

  // 닉네임 실시간 수정
  const nickname = watch('nickname');

  useEffect(() => {
    dispatch(userNicknameCheck(nickname));
  }, [nickname, dispatch]);

  const API_URL = 'https://jsonplaceholder.typicode.com';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/users`);
        console.log(response.data);
      } catch (error) {
        console.error('에러', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
  
      <div className='form-area'>
        <div className='form-elements'>
        <form className='auth-form' onSubmit={handleSubmit(onSubmit)}>
        <div className=''>
          <img src='' alt=''/>
        </div>
        <p>프로필 이미지를 추가해주세요.</p>

        <label className='auth-label' htmlFor="username">이름</label>
        <input
          className='auth-input'
          value={getUser?.username || ''}
          type="text"
          id="username"
          disabled
        />

        <label className='auth-label' htmlFor="userId">아이디</label>
        <input
          className='auth-input'
          value={getUser?.userId || ''}
          type="text"
          id="userId"
          disabled
        />

        <div className='relative'>
          <label className='auth-label' htmlFor='nickname'>닉네임</label>
          <input
            className='auth-input'
            value={getUser?.nickname || ''}
            onChange={(e) => setGetUser({ ...getUser, nickname: e.target.value })}
            type='text'
            id='nickname'
            placeholder='닉네임을 변경해주세요'
            {...register('nickname', {
              required: '닉네임을 입력해주세요'
            })}
          />
          {errors.nickname && <span className='authSpan' role='alert'>{errors.nickname.message}</span>}
          {nickname && <span className='text-blue-500 text-xs'>{nickname}은(는) 사용 가능한 닉네임입니다.</span>}
        </div>

        <div className='relative'>
          <label className='auth-label' htmlFor="email">이메일</label>
          <input
            className='auth-input'
            value={getUser?.email || ''}
            onChange={(e) => setGetUser({ ...getUser, email: e.target.value })}
            type="email"
            id="email"
            placeholder="이메일을 변경해주세요"
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '유효한 이메일 주소를 입력하세요',
              },
            })}
          />
          {errors.email && <span className='authSpan' role="alert">{errors.email.message}</span>}
        </div>

        <label className='auth-label' htmlFor="password">비밀번호</label>
        <input
          className='auth-input'
          value={getUser?.password || ''}
          onChange={(e) => setGetUser({ ...getUser, password: e.target.value })}
          type="password"
          id="password"
          placeholder="'영문, 숫자, 대문자, 특수문자 포함 8자리 이상'"
          {...register('password', {
            required: '비밀번호를 입력하세요',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이어야 합니다',
            },
            validate: (value) => {
              const pwNumber = /\d/.test(value);
              const pwUpperCase = /[A-Z]/.test(value);
              const pwLowerCase = /[a-z]/.test(value);
              const pwSpecialChar = /[!@#$%^&*]/.test(value);
              return (
                pwNumber &&
                pwUpperCase &&
                pwLowerCase &&
                pwSpecialChar ||
                '비밀번호는 숫자, 대문자, 소문자, 특수문자를 포함해야 합니다'
              );
            },
          })}
        />
        {errors.password && <span className='authSpan' role="alert">{errors.password.message}</span>}

        <button className='auth-input mt-11'  type="submit">수정하기</button>
      </form>
        </div>
      </div>
  
     
    </>
  );
}
