import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';

export default function Layout() {
  return (
    <div id='wrap'>
      <Nav />
      <main>
        <Header />
        <div className='content relative'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
