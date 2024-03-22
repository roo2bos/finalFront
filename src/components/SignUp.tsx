import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { userNicknameCheckApi, userIdCheckApi } from '../api/userCheck';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { userIdCheck, userNicknameCheck } from '../store/features/userIdCheck';
import { signUpUser } from '../store/features/signUpSlice';
import '../assets/css/auth.css';

type FormData = {
  username: string;
  userId: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
};

export default function SignUp() {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const [nicknameAvailable, setNicknameAvailable] = useState<boolean | null>(null);
  const [userIdAvailable, setUserIdAvailable] = useState<boolean | null>(null);

  const onSubmit: SubmitHandler<FormData> = (userdata) => {

    console.log('onSubmit', userdata);
    dispatch(signUpUser(userdata));
  };

  const onError: SubmitErrorHandler<FormData> = (errors) => {
    console.log('onError', errors);
  };

  const userId = watch('userId');
  const nickname = watch('nickname');

  useEffect(() => {
    if (userId !== '') {
      dispatch(userIdCheck(userId));
      userIdCheckApi(userId)
        .then((response) => {
          setUserIdAvailable(response);
        })
        .catch((error) => {
          console.log('오류 발생:', error);
        });
    } else {
      setUserIdAvailable(null);
    }
  }, [userId, dispatch]);

  useEffect(() => {
    if (nickname !== '') { 
      dispatch(userNicknameCheck(nickname));
      userNicknameCheckApi(nickname)
        .then((response) => {
          setNicknameAvailable(response);
        })
        .catch((error) => {
          console.error('오류 발생:', error);
        });
    } else {
      setNicknameAvailable(null);
    }
  }, [nickname, dispatch]);

  

  return (
    <div className='form-container'>
      <div className='form-area signup'>
        <div className='form-elements'>
          <div className='form-title signup'>
            <Link to='/'>
              <h1 className='logo'>DoRun-DoRun</h1>
            </Link>
          </div>
          <div className='form-box'>
            <form
              className='auth-form'
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <label className='auth-label' htmlFor='username'>
                이름
              </label>
              <input
                className='auth-input'
                type='text'
                id='username'
                placeholder='이름을 입력해주세요'
                {...register('username', {
                  required: '이름을 입력해주세요',
                  minLength: {
                    message: '이름은 최소 2글자 이상 작성해주세요',
                    value: 2,
                  },
                })}
              />
              {errors.username && (
                <span className='auth-span' role='alert'>
                  {errors.username.message}
                </span>
              )}

              <label className='auth-label' htmlFor='userId'>
                아이디
              </label>
              <input
                className='auth-input'
                type='text'
                id='userId'
                placeholder='ID를 입력해주세요'
                {...register('userId', {
                  required: 'ID를 입력해주세요',
                })}
              />
              {errors.userId && (
                <span className='auth-span' role='alert'>
                  {errors.userId.message}
                </span>
              )}
              {userIdAvailable !== null && (
                <span className={!userIdAvailable ? 'text-blue-500 text-xs' : 'text-red-500 text-xs' }>
                  {!userIdAvailable ? '사용 가능한 닉네임입니다.' : '이미 사용 중인 닉네임입니다.'}
                </span>
              )}

<label className='auth-label' htmlFor='nickname'>
                닉네임
              </label>
              <input
                className='auth-input'
                type='text'
                id='nickname'
                placeholder='닉네임을 입력해주세요'
                {...register('nickname', {
                  required: '닉네임을 입력해주세요',
                })}
              />
              {errors.nickname && (
                <span className='auth-span' role='alert'>
                  {errors.nickname.message}
                </span>
              )}
              {nicknameAvailable !== null && (
                <span className={!nicknameAvailable ? 'text-blue-500 text-xs' : 'text-red-500 text-xs'}>
                  {!nicknameAvailable ? '사용 가능한 닉네임입니다.' : '이미 사용 중인 닉네임입니다.'}
                </span>
              )}

              <label className='auth-label' htmlFor='email'>
                이메일
              </label>
              <input
                className='auth-input'
                type='email'
                id='email'
                placeholder='이메일 주소'
                {...register('email', {
                  required: '이메일을 입력해주세요',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: '유효한 이메일 주소를 입력하세요',
                  },
                })}
              />
              {errors.email && (
                <span className='auth-span' role='alert'>
                  {errors.email.message}
                </span>
              )}

              <label className='auth-label' htmlFor='password'>
                비밀번호
              </label>
              <input
                className='auth-input'
                type='password'
                id='password'
                placeholder='영문, 숫자, 대문자, 특수문자 포함 8자리 이상'
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
                      (pwNumber &&
                        pwUpperCase &&
                        pwLowerCase &&
                        pwSpecialChar) ||
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

              <label className='auth-label' htmlFor='confirmPassword'>
                비밀번호 확인
              </label>
              <input
                className='auth-input'
                type='password'
                id='confirmPassword'
                placeholder='비밀번호와 동일하게 입력해주세요'
                {...register('confirmPassword', {
                  required: '비밀번호를 한번 더 입력해주세요',
                  validate: (value) =>
                    value === watch('password') ||
                    '비밀번호가 일치하지 않습니다',
                })}
              />
              {errors.confirmPassword && (
                <span className='auth-span' role='alert'>
                  {errors.confirmPassword.message}
                </span>
              )}

              <div className='flex items-center align-center mt-4'>
                <label className='auth-label' htmlFor='agree'>
                  위에 약관에 동의하십니까?
                </label>
                <input
                  className='auth-checkbox'
                  type='checkbox'
                  id='agree'
                  {...register('agree', { required: '약관에 동의해주세요' })}
                />
                {errors.agree && (
                  <span className='auth-span mt-2' role='alert'>
                    {errors.agree.message}
                  </span>
                )}
              </div>
              <button className='auth-btn' type='submit'>
                가입하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
