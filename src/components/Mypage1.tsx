import { useForm, SubmitHandler} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {userNicknameCheck } from '../store/features/userIdCheck'
import { signUpUser } from '../store/features/signUpSlice';
import '../assets/css/auth.css'
import { useEffect } from 'react';

type FormData = {
  username: string;
  userId: string;
  nickname : string;
  email: string;
  password: string;
};

export default function SignUp() {
  const dispatch = useDispatch();

  // 수정 페이지 form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  // 수정페이지 전송
  const onSubmit: SubmitHandler<FormData> = (userdata) => {
      console.log('onSubmit', userdata);
      dispatch(signUpUser(userdata));
  };


  // 닉네임 실시간 수정
  const nickname = watch('nickname')

  useEffect(()=>{
    dispatch(userNicknameCheck(nickname))
  },[nickname, dispatch])

  return (
    <>
      <form className='authForm' onSubmit={handleSubmit(onSubmit)}>
        <div className=''>
          <img src='' alt=''/>
        </div>
        <p>프로필 이미지를 추가해주세요.</p>

        <label className='authLable' htmlFor="username">이름</label>
        <input
          className='authInput'
          value='바꿀 수 없다네'
          type="text"
          id="username"
          disabled
        />

        <label className='authLable' htmlFor="userId">아이디</label>
        <input
          className='authInput'
          value='바꿀 수 없다네'
          type="text"
          id="userId"
          disabled
        />

        <div className='relative'>
        <label className='authLable' htmlFor='nickname'>닉네임</label>
        <input
          className='authInput'
          value=''
          type='text'
          id='nickname'
          placeholder='닉네임을 변경해주세요'
          {...register('nickname',{
            required : '닉네임을 입력해주세요'
          })}
        />
        {errors.nickname && <span className='authSpan' role='alert'>{errors.nickname.message}</span>}
        {nickname && <span className='text-blue-500 text-xs'>{nickname}은(는) 사용 가능한 닉네임입니다.</span>}
        </div>

        <div className='relative'>
        <label className='authLable' htmlFor="email">이메일</label>
        <input
          className='authInput'
          value=''
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

        <label className='authLable' htmlFor="password">비밀번호</label>
        <input
          className='authInput'
          value=''
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

        <button className='authInput mt-11'  type="submit">수정하기</button>
      </form>
    </>
  );
}
