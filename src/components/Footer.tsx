// css
import '../assets/css/footer.css';

// 리액트 라이브러리, 함수
import { NavLink } from 'react-router-dom';

// 아이콘
import { GoHomeFill } from 'react-icons/go';

export default function Footer() {
  return (
    <footer id='mobile-footer'>
      <div className='container'>
        <ul className='footer-list'>
          <li className='footer-item'>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className='footer-icon-text-group'>
                <div className='footer-icon'>
                  <GoHomeFill />
                </div>
                <div className='footer-text'>홈</div>
              </div>
            </NavLink>
          </li>
          <li className='footer-item'>
            <NavLink
              to='/menu'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className='footer-icon-text-group'>
                <div className='footer-icon'>
                  <GoHomeFill />
                </div>
                <div className='footer-text'>홈</div>
              </div>
            </NavLink>
          </li>
          <li className='footer-item'>
            <NavLink
              to='/menu'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className='footer-icon-text-group'>
                <div className='footer-icon'>
                  <GoHomeFill />
                </div>
                <div className='footer-text'>홈</div>
              </div>
            </NavLink>
          </li>
          <li className='footer-item'>
            <NavLink
              to='/menu'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <div className='footer-icon-text-group'>
                <div className='footer-icon'>
                  <GoHomeFill />
                </div>
                <div className='footer-text'>홈</div>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
