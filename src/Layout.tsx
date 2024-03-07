import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Lnb from './components/Lnb';

export default function Layout() {
  return (
    <div id='wrap'>
      <Nav />
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  );
	return (
		<div id="wrap">
			<Lnb />
			<main>
				<Header />
				<div className="content">
					<Outlet />
				</div>
			</main>
		</div>
	);
}

