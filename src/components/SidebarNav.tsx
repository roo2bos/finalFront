import { NavLink, Link } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import { CgMenuGridR } from 'react-icons/cg';
import { BiSolidChat } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import '../assets/css/sidebarNav.css';

export default function SidebarNav() {
  return (
    <nav className='sidebar-nav'>
      <div className='container'>
        <Link to='/'>
          <h1 className='logo'>
            <span className='nav-logo'>DoRun-DoRun</span>
            <span className='nav-logo-tablet'>DD</span>
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
              to='/preview'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className='icon-text-group'>
                <div className='icon'>
                  <CgMenuGridR />
                </div>
                <div className='text'>예습하기</div>
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
    </nav>
  );
}
