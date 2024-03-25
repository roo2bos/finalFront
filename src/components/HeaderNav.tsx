import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import '../assets/css/headerNav.css';
import { useSelector} from 'react-redux';
import { useAppDispatch } from '../hooks';
import { logoutUser } from '../store/features/loginSlice'

export default function Header() {
  const dispatch = useAppDispatch(); 
  const user = useSelector(state => state.login.user);
  console.log(user)
  const isLogin = useSelector(state => state.login.isLoggedin);
  console.log(isLogin)

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  

  return (
    <nav className='header-nav'>
      <button onClick={handleLogout} type='button' className='noti-icon' aria-label='알림'>
        <FaBell />
      </button>
      <div className='nav-login'>
        {/* 조건부 렌더링 */}
        {user?
        ( <>
          <p>호로록</p>
          <button onClick={handleLogout}>로그아웃</button>
        </>)
        :
        (<Link to='/login' title='로그인'>
          로그인</Link>)  
        }
      </div>
    </nav>
  );
}