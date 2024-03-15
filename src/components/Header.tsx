// css
import '../assets/css/header.css';

// 리액트 라이브러리, 함수
import { Link } from 'react-router-dom';
import { useState } from 'react';

// 아이콘
import { IoSearch } from 'react-icons/io5';
import { FaBell } from 'react-icons/fa';
// import { FaCircleUser } from 'react-icons/fa6';

export default function Header() {
  // 검색 기능
  const [search, setSearch] = useState('');
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <header id='header'>
      <nav id='header-nav'>
        {/* 임시 */}
        <Link to='/guide' className='pr-5'>
          가이드
        </Link>
        <div className='header-search-bar'>
          <label className='hidden' htmlFor='header-search'>
            검색창
          </label>
          <input
            id='header-search-input'
            type='search'
            value={search}
            onChange={inputHandler}
            placeholder='검색어 입력'
            title='검색어 입력'
            autoFocus
          />
        </div>
        <div className='nav-icon-wrap'>
          <button className='nav-btn-icon' aria-label='검색'>
            <IoSearch />
          </button>
          <button className='nav-btn-icon' aria-label='알림'>
            <FaBell />
          </button>
        </div>
        <div className='nav-login-wrap'>
          <Link to='/login' title='로그인'>
            로그인
            {/* <FaCircleUser className='hidden' /> */}
          </Link>
        </div>
      </nav>
    </header>
  );
}
