import { Link } from 'react-router-dom';
// import { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import '../assets/css/headerNav.css';

export default function Header() {
  return (
    <nav className='header-nav'>
      <button type='button' className='noti-icon' aria-label='알림'>
        <FaBell />
      </button>
      <div className='nav-login'>
        <Link to='/login' title='로그인'>
          로그인
        </Link>
      </div>
    </nav>
  );
}
