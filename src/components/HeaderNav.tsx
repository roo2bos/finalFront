import { Link, useNavigate } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks';
import { logoutUser } from '../store/features/loginSlice';
import axios from 'axios';
import '../assets/css/headerNav.css';

export default function Header() {
  const [user, setUser] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_URL = 'https://43.203.227.36.sslip.io/server';
        const response = await axios.get(`${API_URL}/user/authuser`, { withCredentials: true });
        setUser(response.data.nickname || '');
        setProfileImage(response.data.profileImageUrl || ''); 
      } catch (error) {
        console.error('에러가 발생했습니다:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleLogout = async () => {
    dispatch(logoutUser());
    setUser('');
    setProfileImage('');
    navigate('/');
  };

  return (
    <nav className="header-nav">
      <button type="button" className="noti-icon" aria-label="알림">
        <FaBell />
      </button>
      <div className="nav-login">
        {!user ? (
          <div>
            <Link to="/mypagechange">
              {profileImage ? <img src={profileImage} alt="프로필 이미지" /> : null}
              {user}
            </Link>
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        ) : (
          <Link to="/login" title="로그인">
            로그인
          </Link>
        )}
      </div>
    </nav>
  );
}
