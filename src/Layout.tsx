import { Outlet } from 'react-router-dom';
import SidebarNav from './components/SidebarNav';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';

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
