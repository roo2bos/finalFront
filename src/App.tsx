import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import Guide from './components/Guide';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Talk from './pages/Talk';
import Myroom from './pages/Myroom';
import Character from './pages/Character';
import Wordquiz from './components/Wordquiz';
import Spinner from './components/Spinner';
import './App.css';

function App() {
 
  return (
    <>
     
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/talk/:id' element={<Talk />} />
            <Route path='/mypage' element={<Mypage />} />
            <Route path='/myroom' element={<Myroom />} />
            <Route path='/guide' element={<Guide />} />
            <Route path='/character/:id' element={<Character />} />
            <Route path='/quiz' element={<Wordquiz />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/spinner' element={<Spinner />} />
        </Routes>
    </>
  );
}
export default App;
