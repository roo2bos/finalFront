// css
import '../assets/css/sidebarNav.css';

// 리액트 라이브러리, 함수
import { NavLink, Link } from 'react-router-dom';

// 아이콘
import { GoHomeFill } from 'react-icons/go';
import { CgMenuGridR } from 'react-icons/cg';
import { BiSolidChat } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';

export default function Nav() {
  return (
    <nav className='sidebar-nav'>
      {/* className="w-0 md:w-[320px]" */}
      <div className='sidebar-nav-container'>
        <div className='sidebar-nav-content'>
          <Link to='/'>
            <h1 className='logo'>
              <span className='desktop-mobile'>DoRun-DoRun</span>
              <span className='tablet'>DD</span>
            </h1>
          </Link>
          <ul className='sidebar-nav-menu'>
            <li className='sidebar-nav-item'>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <div className='icon-text-group'>
                  <div className='icon'>
                    <GoHomeFill />
                  </div>
                  <div className='text'>Home</div>
                </div>
              </NavLink>
            </li>
            <li className='sidebar-nav-item'>
              <NavLink
                to='/menu'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <div className='icon-text-group'>
                  <div className='icon'>
                    <CgMenuGridR />
                  </div>
                  <div className='text'>메뉴1</div>
                </div>
              </NavLink>
            </li>
            <li className='sidebar-nav-item'>
              <NavLink
                to='/menu'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <div className='icon-text-group'>
                  <div className='icon'>
                    <BiSolidChat />
                  </div>
                  <div className='text'>메뉴2</div>
                </div>
              </NavLink>
            </li>
            <li className='sidebar-nav-item'>
              <NavLink
                to='/menu'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <div className='icon-text-group'>
                  <div className='icon'>
                    <FaBell />
                  </div>
                  <div className='text'>메뉴3</div>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='nav-footer'>
          <p>@ copyright</p>
        </div>
      </div>
    </nav>
  );
}
