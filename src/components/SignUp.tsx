import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {userIdCheck , userNicknameCheck } from '../store/features/userIdCheck'
import { signUpUser } from '../store/features/signUpSlice';
import '../assets/css/auth.css'
import { useEffect } from 'react';

type FormData = {
  username: string;
  userId: string;
  nickname : string;
  email: string;
  password: string;
  confirmPassword: string;
  agree : boolean;
};

export default function SignUp() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (userdata) => {
      console.log('onSubmit', userdata);
      dispatch(signUpUser(userdata));
  };

  const onError: SubmitErrorHandler<FormData> = (errors) => {
    console.log('onError', errors);
  };

  const userId = watch('userId')
  const nickname = watch('nickname')

  useEffect(()=>{
    dispatch(userIdCheck(userId))
  },[userId, dispatch])

  useEffect(()=>{
    dispatch(userNicknameCheck(nickname))
  },[nickname, dispatch])

  return (
    <>
      <h1>회원가입</h1>
      <form className='grid gap-6 mb-6 md:grid-cols-2' onSubmit={handleSubmit(onSubmit, onError)}>
        <label className='authLable' htmlFor="username">이름</label>
        <input
          className='authInput'
          type="text"
          id="username"
          placeholder="username"
          {...register('username', {
            required: '이름을 입력해주세요',
            minLength: {
              message: '이름은 최소 2글자 이상 작성해주세요',
              value: 2,
            },
          })}
        />
        {errors.username && <span role="alert">{errors.username.message}</span>}

        <label className='authLable' htmlFor="userId">아이디</label>
        <input
          className='authInput'
          type="text"
          id="userId"
          placeholder="userId"
          {...register('userId', {
            required: 'ID를 입력해주세요',
          })}
        />
        {errors.userId && <span role="alert">{errors.userId.message}</span>}
        {userId && <span>{userId}은(는) 사용 가능한 아이디입니다.</span>}
        {errors.userId && <span role="alert">{errors.userId.message}</span>}

        <label className='authLabel' htmlFor='nickname'>닉네임</label>
        <input
          className='authInput'
          type='text'
          id='nickname'
          placeholder='nickname'
          {...register('nickname',{
            required : '닉네임을 입력해주세요'
          })}
        />
        {errors.nickname && <span role='alert'>{errors.nickname.message}</span>}
        {nickname && <span>{nickname}은(는) 사용 가능한 닉네임입니다.</span>}
        {errors.nickname && <span role="alert">{errors.nickname.message}</span>}

        <label className='authLable' htmlFor="email">이메일</label>
        <input
           className='authInput'
          type="email"
          id="email"
          placeholder="email"
          {...register('email', {
            required: '이메일을 입력해주세요',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '유효한 이메일 주소를 입력하세요',
            },
          })}
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}

        <label className='authLable' htmlFor="password">비밀번호</label>
        <input
           className='authInput'
          type="password"
          id="password"
          placeholder="password"
          {...register('password', {
            required: '비밀번호를 입력하세요',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이어야 합니다',
            },
            validate: (value) => {
              const Number = /\d/.test(value);
              const UpperCase = /[A-Z]/.test(value);
              const LowerCase = /[a-z]/.test(value);
              const SpecialChar = /[!@#$%^&*]/.test(value);
              return (
                Number &&
                UpperCase &&
                LowerCase &&
                SpecialChar ||
                '비밀번호는 숫자, 대문자, 소문자, 특수문자를 포함해야 합니다'
              );
            },
          })}
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}

        <label className='authLable' htmlFor="confirmPassword">비밀번호 확인</label>
        <input
           className='authInput'
          type="password"
          id="confirmPassword"
          placeholder="confirmPassword"
          {...register('confirmPassword', {
            required: '비밀번호를 한번 더 입력하세요',
            validate: (value) =>
              value === watch('password') || '비밀번호가 일치하지 않습니다',
          })}
        />
        {errors.confirmPassword && (
          <span className='text-red-500 text-xs' role="alert">{errors.confirmPassword.message}</span>
        )}

        <input
          type="checkbox"
          id="agree"
          {...register('agree', { required: '약관에 동의해주세요' })}
        />
        <label htmlFor="agree">위에 약관에 동의하십니까?</label>
        {errors.agree && <span role="alert">{errors.agree.message}</span>}

        <button type="submit">가입하기</button>
      </form>
    </>
  );
}
