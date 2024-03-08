import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';

export default function Layout() {
	return (
		<div id="wrap">
			<Nav />
			<main>
				<Header />
				<div className="content">
					<Outlet />
				</div>
			</main>
		</div>
	);
}

