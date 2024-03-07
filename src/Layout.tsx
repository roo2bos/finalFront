import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Lnb from './components/Lnb';

export default function Layout() {
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
