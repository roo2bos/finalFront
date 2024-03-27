import { Link, useNavigate } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks';
import { logoutUser } from '../store/features/loginSlice';
import axios from 'axios';
import '../assets/css/headerNav.css';

export default function Header() {
  const [user, setUser] = useState('');
  const [userCheck, setUserCheck] = useState(false)
  const [profileImage, setProfileImage] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_URL = 'https://43.203.227.36.sslip.io/server';
        const response = await axios.get(`${API_URL}/user/authuser`, { withCredentials: true });
        setUserCheck(response.data.result)
        setUser(response.data.nickname || '');
        setProfileImage(response.data.profileImageUrl || ''); 
      } catch (error) {
        console.error('에러가 발생했습니다:', error);
      }
    };
    fetchData();
  }, []); 

  const handleLogout = () => {
    dispatch(logoutUser());
    setUser('');
    setProfileImage('');
    setUserCheck(false);
    navigate('/');
  };

  return (
    <nav className="header-nav">
      <button type="button" className="noti-icon" aria-label="알림">
        <FaBell />
      </button>
      <div className="nav-login">
  {!userCheck ? (
    <div className="flex items-center space-x-4">
      <Link to="/mypagechange" className="flex items-center">
        {user}
        {profileImage && <img src={profileImage} alt="프로필 이미지" className="ml-2 h-8 w-8 rounded-full" />}
      </Link>
      <button onClick={handleLogout} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
        로그아웃
      </button>
    </div>
  ) : (
    <Link to="/login" title="로그인" className="text-gray-800 font-bold">
      로그인
    </Link>
  )}
</div>
    </nav>
  );
}
