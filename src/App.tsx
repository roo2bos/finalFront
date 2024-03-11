import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import Guide from './components/Guide';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Talk from './pages/Talk';
import Myroom from './components/Myroom';

function App() {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/talk/:id" element={<Talk />} />
					<Route path="/mypage" element={<Mypage />} />
					<Route path="/myroom" element={<Myroom />} />
					<Route path="/guide" element={<Guide />} />
					<Route path='/signup' element= {<SignUp/>}/>
					<Route path='/login' element= {<Login/>}/>

					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
