// css
import '../assets/css/header.css';

// 아이콘
import { FaBars } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';

export default function Header() {
  return (
    <header id='header'>
      <div className='container'>
        <div className='header-icon'>
          <button>
            <FaBars />
          </button>
        </div>
        <div>
          <h1 className='logo'>
            <span className='desktop-mobile'>DoRun-DoRun</span>
          </h1>
        </div>
        <div className='header-icon'>
          <button aria-label='검색'>
            <IoSearch />
          </button>
        </div>
      </div>
    </header>
  );
}
