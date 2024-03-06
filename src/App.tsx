import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import NotFound from './components/NotFound';
import Guide from './components/Guide';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Talk from './pages/Talk'; // Talk

function App() {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/talk" element={<Talk />} />
					<Route path="/mypage" element={<Mypage />} />
					<Route path="/guide" element={<Guide />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
