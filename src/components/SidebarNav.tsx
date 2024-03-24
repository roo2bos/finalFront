import { NavLink, Link } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import { CgMenuGridR } from 'react-icons/cg';
import { BiSolidChat } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import '../assets/css/sidebarNav.css';

const navMenu = [
  { id: 1, link: '/', icon: <GoHomeFill />, text: 'Home' },
  { id: 2, link: '/preview', icon: <CgMenuGridR />, text: '예습하기' },
  { id: 3, link: '/Review', icon: <CgMenuGridR />, text: '복습하기' },
  { id: 4, link: '/mypage', icon: <BiSolidChat />, text: '마이페이지' },
  { id: 5, link: '/myroom', icon: <FaBell />, text: '마이룸' },
  { id: 6, link: '/quiz', icon: <FaBell />, text: '퀴즈' },
];

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
          {navMenu.map(({ id, link, icon, text }) => {
            return (
              <li className='sidebar-nav-item' key={id}>
                <NavLink
                  to={link}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  <div className='icon-text-group'>
                    <div className='icon'>{icon}</div>
                    <div className='text'>{text}</div>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
