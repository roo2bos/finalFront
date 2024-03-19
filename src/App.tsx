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
import About from './pages/About';
import Wordquiz from './components/Wordquiz';
import Preview from './components/Previwe';
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
          <Route path='/about' element={<About />} />
          <Route path='/quiz' element={<Wordquiz />} />
          <Route path='/preview' element={<Preview />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
