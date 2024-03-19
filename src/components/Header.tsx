// import { useState } from 'react';
import HeaderNav from './HeaderNav';
import { FaBars } from 'react-icons/fa6';
import '../assets/css/header.css';

export default function Header() {
  return (
    <header id='header'>
      <div className='container'>
        <div className='header-icon'>
          <button>
            <FaBars />
          </button>
        </div>
        <div>
          <h1 className='logo header'>DoRun-DoRun</h1>
        </div>
        <HeaderNav />
      </div>
    </header>
  );
}
