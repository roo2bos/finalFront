import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../store/features/signUpSlice';
import { Dispatch } from '@reduxjs/toolkit';



type FormData = {
  username: string;
  userId: string;
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

  console.log('errors', errors);


  const onSubmit: SubmitHandler<FormData> = (userdata) => {
      console.log('onSubmit', userdata);
      dispatch(signUpUser(userdata));
  };
  
  const onError: SubmitErrorHandler<FormData> = (errors) => {
    console.log('onError', errors);
  };


  return (
    <>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label htmlFor="username">이름</label>
        <input
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
        <br />

        <label htmlFor="userId">아이디</label>
        <input
          type="text"
          id="userId"
          placeholder="userId"
          {...register('userId', {
            required: 'ID를 입력해주세요',
          })}
        />
        {errors.userId && <span role="alert">{errors.userId.message}</span>}
        <br />

        <label htmlFor="email">이메일</label>
        <input
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
        <br />

        <label htmlFor="password">비밀번호</label>
        <input
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
              const hasNumber = /\d/.test(value);
              const hasUpperCase = /[A-Z]/.test(value);
              const hasLowerCase = /[a-z]/.test(value);
              const hasSpecialChar = /[!@#$%^&*]/.test(value);
              return (
                hasNumber &&
                hasUpperCase &&
                hasLowerCase &&
                hasSpecialChar ||
                '비밀번호는 숫자, 대문자, 소문자, 특수문자를 포함해야 합니다'
              );
            },
          })}
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}
        <br />

        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <input
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
          <span role="alert">{errors.confirmPassword.message}</span>
        )}
        <br />

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
