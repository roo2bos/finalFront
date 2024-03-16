import '../assets/css/nav.css';
import { NavLink, Link } from 'react-router-dom';
// 아이콘 import
import { GoHomeFill } from 'react-icons/go';
import { CgMenuGridR } from 'react-icons/cg';
import { BiSolidChat } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';

export default function Nav() {
  return (
    <nav id='nav'>
      <div className='nav-container'>
        <div className='nav-content'>
          <Link to='/'>
            <h1 className='logo'>DoRun-DoRun</h1>
          </Link>
          <ul className='nav-menu-list'>
            <li className='nav-menu-item'>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <div className='nav-menu-box'>
                  <div className='nav-icon'>
                    <GoHomeFill />
                  </div>
                  <div>Home</div>
                </div>
              </NavLink>
            </li>
            <li className='nav-menu-item'>
              <NavLink
                to='/m1'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <div className='nav-menu-box'>
                  <div className='nav-icon'>
                    <CgMenuGridR />
                  </div>
                  <div>메뉴1</div>
                </div>
              </NavLink>
            </li>
            <li className='nav-menu-item'>
              <NavLink
                to='/m2'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <div className='nav-menu-box'>
                  <div className='nav-icon'>
                    <BiSolidChat />
                  </div>
                  <div>메뉴2</div>
                </div>
              </NavLink>
            </li>
            <li className='nav-menu-item'>
              <NavLink
                to='/m3'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <div className='nav-menu-box'>
                  <div className='nav-icon'>
                    <FaBell />
                  </div>
                  <div>메뉴3</div>
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
