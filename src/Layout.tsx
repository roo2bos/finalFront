import { Outlet } from 'react-router-dom';
import { useRef, useState, useMemo } from 'react';
// import { useEffect } from 'react';
import SidebarNav from './components/SidebarNav';
import Header from './components/Header';
import Footer from './components/Footer';
// import Spinner from './components/Spinner';

export default function Layout() {
  // 모바일 화면에서 nav 열고 닫기
  const [navToggle, setNavToggle] = useState<boolean>(false);
  const navOpen = () => {
    setNavToggle(!navToggle);
  };

  const asideRef = useRef<HTMLElement | null>(null);
  const aside = asideRef.current;
  const onClickOutside = (event: Event) => {
    if (!aside?.contains(event.target as Node)) {
      return setNavToggle(false);
    }
  };

  useMemo(() => {
    document.addEventListener('click', onClickOutside, true);
    return () => {
      aside?.classList.remove('on');
    };
  }, []);

  // const [loading, setLoading] = useState(true)

  // useEffect(()=>{
  //   const isLoading = setTimeout(()=>{
  //     setLoading(false)
  //   },2000)

  //   clearTimeout(isLoading)
  // },[])

  return (
    <>
      <div id='wrap'>
        <aside ref={asideRef} className={`${navToggle ? 'on' : ''}`}>
          <SidebarNav />
          <Footer />
        </aside>
        <main>
          <Header handler={navOpen} />
          <div className='content relative'>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
