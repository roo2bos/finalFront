import '../assets/nav.css';

export default function Lnb() {
  return (
    <div id='nav'>
      <div className='nav'>
        <h1>LOGO</h1>
        <div className='nav-user'></div>
        <ul className='nav-menu-list'>
          <li className='nav-menu-item'>메뉴1</li>
          <li className='nav-menu-item'>메뉴2</li>
          <li className='nav-menu-item'>메뉴3</li>
        </ul>
        <div>@copyrightm</div>
      </div>
    </div>
  );
}
