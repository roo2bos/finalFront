import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/features/loginSlice';
import '../assets/css/auth.css';

type FormData = {
  userId: string;
  password: string;
};

export default function SignUp() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (userdata) => {
    console.log('onSubmit', userdata);
    // error 뜨는 이유를 모르겠음 리더 님한테 물어볼 예정
<<<<<<< HEAD
    dispatch(loginUser(userdata, navigate))
=======
    dispatch(loginUser(userdata));
>>>>>>> 7e482860795c5f1d260233dc41abcb66eb89eca6
  };

  const onError: SubmitErrorHandler<FormData> = (errors) => {
    console.log('onError', errors);
  };

  return (
    <>
      <form className='authForm' onSubmit={handleSubmit(onSubmit, onError)}>
        <label className='authLable' htmlFor='userId'>
          아이디
        </label>
        <input
          className='authInput'
<<<<<<< HEAD
          type="text"
          id="userId"
          placeholder="아이디를 입력해주세요"
=======
          type='text'
          id='userId'
          placeholder='userId'
>>>>>>> 7e482860795c5f1d260233dc41abcb66eb89eca6
          {...register('userId', {
            required: '아이디를 입력해주세요',
          })}
        />
        {errors.userId && (
          <span className='authSpan' role='alert'>
            {errors.userId.message}
          </span>
        )}
        <br />

        <label className='authLable' htmlFor='password'>
          비밀번호
        </label>
        <input
          className='authInput'
<<<<<<< HEAD
          type="password"
          id="password"
          placeholder="비밀번호를 입력해주세요"
=======
          type='password'
          id='password'
          placeholder='password'
>>>>>>> 7e482860795c5f1d260233dc41abcb66eb89eca6
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
                (hasNumber && hasUpperCase && hasLowerCase && hasSpecialChar) ||
                '비밀번호는 숫자, 대문자, 소문자, 특수문자를 포함해야 합니다'
              );
            },
          })}
        />
        {errors.password && (
          <span className='authSpan' role='alert'>
            {errors.password.message}
          </span>
        )}
        <br />

        <button className='authInput mt-10' type='submit'>
          로그인
        </button>
      </form>
    </>
  );
}
