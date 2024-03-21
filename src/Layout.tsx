import { Outlet } from 'react-router-dom';
import SidebarNav from './components/SidebarNav';
import Header from './components/Header';
import Footer from './components/Footer';
// import { useState, useEffect } from 'react';
// import Spinner from './components/Spinner';



export default function Layout() {
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
