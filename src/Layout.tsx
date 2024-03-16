// 컴포넌트
import SidebarNav from './components/SidebarNav';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';

// 리액트 라이브러리, 함수
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div id='wrap'>
      <SidebarNav />
      <main>
        <Header />
        <HeaderNav />
        <div className='content relative'>
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}
