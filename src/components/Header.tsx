import '../assets/css/header.css';
import { Link } from 'react-router-dom';

// 아이콘 import
import { IoSearch } from 'react-icons/io5';
import { FaBell } from 'react-icons/fa';
// import { FaCircleUser } from 'react-icons/fa6';

export default function Header() {
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
          {/* <input
            id='header-search'
            type='search'
            placeholder='궁금한 내용이 있으신가요?'
            title='검색어 입력'
            autoFocus
          /> */}
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
