import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { FaBell } from 'react-icons/fa';
// import { FaCircleUser } from 'react-icons/fa6';
import '../assets/css/headerNav.css';

export default function Header() {
  // 검색 기능
  const [search, setSearch] = useState('');
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <nav className='header-nav'>
      <div className='header-search-bar'>
        <label className='hide' htmlFor='header-search'>
          검색창
        </label>
        <input
          id='header-search-input'
          type='search'
          value={search}
          onChange={inputHandler}
          placeholder='검색어 입력'
          title='검색어 입력'
        />
      </div>
      <div className='nav-icon-group'>
        <button className='nav-icon' aria-label='검색'>
          <IoSearch />
        </button>
        <button className='nav-icon' aria-label='알림'>
          <FaBell />
        </button>
      </div>
      <div className='nav-login'>
        <Link to='/login' title='로그인'>
          로그인
          {/* <FaCircleUser className='hidden' /> */}
        </Link>
      </div>
    </nav>
  );
}
