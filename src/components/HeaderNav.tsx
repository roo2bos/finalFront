import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks';
import { logoutUser } from '../store/features/loginSlice';
import axios from 'axios';
import '../assets/css/headerNav.css';

export default function Header() {
  const isLogged = useSelector((state) => state.login.isLoggedin);
  console.log('이것은 : ', isLogged);
  const [user, setUser] = useState(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_URL = 'http://43.203.227.36:8080';
        const response = await axios.get(`${API_URL}/user/authuser`);
        setUser(response.data.nickname);
        console.log(response.data);
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="header-nav">
      <button onClick={handleLogout} type="button" className="noti-icon" aria-label="알림">
        <FaBell />
      </button>
      <div className="nav-login">
        {isLogged ? (
          <>
            <p>{user}</p>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <Link to="/login" title="로그인">
            로그인
          </Link>
        )}'
        <p>{user}</p>
      </div>
    </nav>
  );
}
