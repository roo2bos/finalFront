import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../store/features/loginSlice';
import { useAppDispatch } from '../hooks';
import '../assets/css/auth.css';

type FormData = {
  userId: string;
  password: string;
};

export default function SignUp() {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm<FormData>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormData> = (userdata) => {
    console.log('onSubmit', userdata);

    dispatch(loginUser(userdata, navigate));
  };

  const onError: SubmitErrorHandler<FormData> = (errors) => {
    console.log('onError', errors);
  };

  return (
    <div className='form-container'>
      <div className='form-area'>
        <div className='form-elements'>
          <div className='form-title'>
            <Link to='/'>
              <h1 className='logo'>DoRun-DoRun</h1>
            </Link>
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
