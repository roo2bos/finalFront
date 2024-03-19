import { Outlet } from 'react-router-dom';
import SidebarNav from './components/SidebarNav';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Layout() {
  return (
    <>
      <div id='wrap'>
        <aside>
          <SidebarNav />
          <Footer />
        </aside>
        <main>
          <Header />
          <div className='content relative'>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
