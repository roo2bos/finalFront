import '../assets/css/nav.css';
import { Link } from 'react-router-dom';

export default function Lnb() {
  return (
    <nav id='nav'>
      <div className='nav-container'>
        <div className='nav-content'>
          <h1 className='logo'>DoRun-DoRun</h1>
          <div className='nav-user'>
            <div className='nav-user-login'>로그인</div>
          </div>
          <ul className='nav-menu-list'>
            <li className='nav-menu-item'>
              <Link to='/'>홈</Link>
            </li>
            <li className='nav-menu-item'>메뉴2</li>
            <li className='nav-menu-item'>메뉴3</li>
          </ul>
        </div>
        <div className='nav-footer'>
          <p>@copyright</p>
        </div>
      </div>
    </nav>
  );
}
