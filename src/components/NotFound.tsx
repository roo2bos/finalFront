import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/notfound.css';
import logo from '/characters/404_error.gif'


export default function Notfound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
    {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      id="freepik_stories-404-error-with-a-cute-animal"
      className="animated"
      version="1.1"
      viewBox="-180 25 900 548"
    >
      <g
        id="freepik--background-complete--inject-5"
        className="animable animator-active"
        style={{
          WebkitTransformOrigin: 248.822,
          msTransformOrigin: 248.822,
          transformOrigin: 248.822,
        }}
      >
        <path
          d="M93.18 309.07a10.09 10.09 0 012.23-5.55 9.59 9.59 0 014.8-3.35 7.69 7.69 0 018.71 3.46 7.72 7.72 0 018.1-4.16 9.6 9.6 0 015.16 2.77 9.93 9.93 0 012.86 5.24A12.07 12.07 0 01124 315a17.24 17.24 0 01-5.56 5.87c-3.72 2.55-8.61 5.75-8.61 5.75s-4.48-2.95-8.46-5a17.07 17.07 0 01-6.22-5.17 12.13 12.13 0 01-1.97-7.38z"
          style={{
            WebkitTransformOrigin: 109.2,
            msTransformOrigin: 109.2,
            transformOrigin: 109.2,
          }}
          id="elwa8bj0aukg"
          fill="#EBEBEB"
          className="animable"
        ></path>
        <path
          d="M371.89 198.62a10 10 0 012.23-5.55 9.52 9.52 0 014.79-3.35 7.69 7.69 0 018.71 3.46 7.72 7.72 0 018.1-4.16 9.6 9.6 0 015.16 2.77 10 10 0 012.87 5.24 12.14 12.14 0 01-1.07 7.53 17.15 17.15 0 01-5.56 5.87c-3.71 2.55-8.61 5.75-8.61 5.75s-4.47-3-8.46-5a17.07 17.07 0 01-6.22-5.17 12.12 12.12 0 01-1.94-7.39z"
          style={{
            WebkitTransformOrigin: 387.903,
            msTransformOrigin: 387.903,
            transformOrigin: 387.903,
          }}
          id="el9bpumpxwpvr"
          fill="#EBEBEB"
          className="animable"
        ></path>
        <path
          d="M120.25 284.24a6.35 6.35 0 011.43-3.56 6.16 6.16 0 013.08-2.16 5.05 5.05 0 013.91.53 5.15 5.15 0 011.69 1.69 4.94 4.94 0 015.2-2.66 6.05 6.05 0 013.31 1.77 6.39 6.39 0 011.84 3.37 7.72 7.72 0 01-.68 4.83 11 11 0 01-3.57 3.77c-2.39 1.64-5.53 3.7-5.53 3.7s-2.88-1.9-5.44-3.24a11 11 0 01-4-3.32 7.78 7.78 0 01-1.24-4.72z"
          style={{
            WebkitTransformOrigin: 130.536,
            msTransformOrigin: 130.536,
            transformOrigin: 130.536,
          }}
          id="eloj0sjnj8khn"
          fill="#F5F5F5"
          className="animable"
        ></path>
        <path
          d="M354.78 223.1a6.45 6.45 0 011.43-3.56 6.16 6.16 0 013.08-2.15 5 5 0 015.6 2.22 5 5 0 011.38-1.68 5 5 0 013.82-1 6.13 6.13 0 013.31 1.78 6.36 6.36 0 011.84 3.37 7.73 7.73 0 01-.68 4.83 10.91 10.91 0 01-3.57 3.77c-2.39 1.63-5.53 3.69-5.53 3.69s-2.87-1.89-5.44-3.24a10.9 10.9 0 01-4-3.32 7.76 7.76 0 01-1.24-4.71z"
          style={{
            WebkitTransformOrigin: 365.066,
            msTransformOrigin: 365.066,
            transformOrigin: 365.066,
          }}
          id="el3a7slhhuivq"
          fill="#F5F5F5"
          className="animable"
        ></path>
        <path
          d="M405.33 273.65a6.35 6.35 0 011.43-3.56 6.16 6.16 0 013.08-2.16 5.05 5.05 0 013.91.53 5.15 5.15 0 011.69 1.69 4.92 4.92 0 015.2-2.66 6.19 6.19 0 013.31 1.77 6.39 6.39 0 011.84 3.37 7.79 7.79 0 01-.68 4.83 10.94 10.94 0 01-3.58 3.77c-2.38 1.64-5.53 3.7-5.53 3.7s-2.87-1.9-5.43-3.24a11 11 0 01-4-3.32 7.78 7.78 0 01-1.24-4.72z"
          style={{
            WebkitTransformOrigin: 415.614,
            msTransformOrigin: 415.614,
            transformOrigin: 415.614,
          }}
          id="elc7t89trocyq"
          fill="#EBEBEB"
          className="animable"
        ></path>
        <path
          d="M126.9 325.68a4.17 4.17 0 01.95-2.34 4.06 4.06 0 012-1.43 3.33 3.33 0 012.58.35 3.49 3.49 0 011.11 1.12 3.37 3.37 0 01.91-1.11 3.3 3.3 0 012.52-.65 4 4 0 012.18 1.17 4.26 4.26 0 011.25 2.21 5.15 5.15 0 01-.45 3.19 7.21 7.21 0 01-2.36 2.49c-1.57 1.08-3.65 2.43-3.65 2.43s-1.89-1.25-3.58-2.13a7.36 7.36 0 01-2.63-2.19 5.12 5.12 0 01-.83-3.11z"
          style={{
            WebkitTransformOrigin: 133.686,
            msTransformOrigin: 133.686,
            transformOrigin: 133.686,
          }}
          id="elu5omhrwuoib"
          fill="#F5F5F5"
          className="animable"
        ></path>
        <path
          d="M72.79 83.72s-4.61 4 5.4 13.21a157.3 157.3 0 0016.1 13.39s2 2.26-.06 3.49-7.23 2.25-7.23 5.34 3 5.11 8.07 5.91 16 3 16.93 3.16 2.22 1.13.94 2.2-11.87 6.28-9.09 11.15 17.12 4.81 18.69 4.84 2.11.48 2.28 1.28-3.56 2.21-6.51 3.81-6.09 4-4.26 6.67 11.62 6.12 30.47 1.19l8.59-2.85 2-8.88c3.06-19.24-1.32-28.64-4.17-30.2s-4.91 1.79-6.22 4.88-2.35 6.94-3.16 6.86-1.32-.59-1.5-2.15-1.51-15.84-6.64-18.12-9.27 8.76-10.21 10.14-2 .22-2.28-.72-3.51-11.63-4.8-16.55-3.48-7.74-6.67-7.44-3.58 5.55-4.61 7.73-3.47.41-3.47.41a156.36 156.36 0 00-14.94-14.72c-10.17-9-13.74-3.94-13.74-3.94"
          style={{
            WebkitTransformOrigin: 113.941,
            msTransformOrigin: 113.941,
            transformOrigin: 113.941,
          }}
          id="elpyzocher6nd"
          fill="#EBEBEB"
          className="animable"
        ></path>
        <path
          d="M154.26 158.34c-7.44-6.68-20.47-18.77-31.71-29.09s-21.42-19.66-28.83-26.37l-8.78-7.94c-1-.94-1.84-1.66-2.39-2.17l-.62-.56-.2-.2a2.08 2.08 0 01.22.17c.15.14.37.32.64.55L85 94.85c2.1 1.85 5.12 4.54 8.84 7.88 7.45 6.68 17.65 16 28.89 26.31s24.27 22.44 31.67 29.15"
          style={{
            WebkitTransformOrigin: 118.065,
            msTransformOrigin: 118.065,
            transformOrigin: 118.065,
          }}
          id="el00prxlg54820d"
          fill="#E0E0E0"
          className="animable"
        ></path>
        <path
          d="M94.29 118a3 3 0 01.71 0h1.78c1.5 0 3.58 0 5.87.14l5.86.26 1.78.07a3.52 3.52 0 01.65 0 2.84 2.84 0 01-.65.06h-1.79c-1.5 0-3.57-.09-5.86-.18l-5.87-.23-1.77-.06a2.73 2.73 0 01-.71-.06z"
          style={{
            WebkitTransformOrigin: 102.615,
            msTransformOrigin: 102.615,
            transformOrigin: 102.615,
          }}
          id="eldju7nok47at"
          fill="#E0E0E0"
          className="animable"
        ></path>
        <path
          d="M111.27 117.7c-.08 0-.17-4.29-.2-9.57s0-9.58.09-9.58.16 4.29.19 9.57-.01 9.58-.08 9.58z"
          style={{
            WebkitTransformOrigin: 111.209,
            msTransformOrigin: 111.209,
            transformOrigin: 111.209,
          }}
          id="el1o7iaj96txai"
          fill="#E0E0E0"
          className="animable"
        ></path>
        <path
          d="M127.81 134.32a3.49 3.49 0 01.15-.65c.14-.46.3-1 .5-1.74.42-1.48 1-3.52 1.53-5.79s1-4.34 1.27-5.85c.15-.7.26-1.3.36-1.78a2.76 2.76 0 01.16-.65 3 3 0 01-.05.67c-.06.43-.14 1-.27 1.8-.25 1.51-.64 3.6-1.19 5.88s-1.15 4.31-1.62 5.78c-.24.73-.43 1.31-.58 1.72a2.74 2.74 0 01-.26.61z"
          style={{
            WebkitTransformOrigin: 129.796,
            msTransformOrigin: 129.796,
            transformOrigin: 129.796,
          }}
          id="elol3z58ccrwq"
          fill="#E0E0E0"
          className="animable"
        ></path>
        <path
          d="M112.52 138a2.22 2.22 0 01.58-.21l1.62-.45c1.37-.38 3.26-.87 5.36-1.4s4-1 5.38-1.32l1.63-.37a3.8 3.8 0 01.61-.1 2.51 2.51 0 01-.58.21l-1.61.45c-1.37.38-3.27.87-5.36 1.4s-4 1-5.38 1.32l-1.64.37a3.63 3.63 0 01-.61.1z"
          style={{
            WebkitTransformOrigin: 120.11,
            msTransformOrigin: 120.11,
            transformOrigin: 120.11,
          }}
          id="el80bpryo74l"
          fill="#E0E0E0"
          className="animable"
        ></path>
        <path
          d="M125.26 154.52a3.93 3.93 0 01.75-.25l2.07-.59c1.75-.49 4.17-1.14 6.85-1.85s5.11-1.33 6.88-1.77l2.09-.5a4.65 4.65 0 01.77-.15 4 4 0 01-.74.26l-2.07.59c-1.75.48-4.18 1.14-6.86 1.84s-5.11 1.33-6.87 1.77l-2.09.5a3.62 3.62 0 01-.78.15z"
          style={{
            WebkitTransformOrigin: 134.965,
            msTransformOrigin: 134.965,
            transformOrigin: 134.965,
          }}
          id="elagriareogip"
          fill="#E0E0E0"
          className="animable"
        ></path>
        <path
          d="M144.18 149.4a4.51 4.51 0 01.17-.83c.14-.57.32-1.33.55-2.23.46-1.89 1.09-4.5 1.7-7.4s1.11-5.55 1.45-7.46c.17-.92.31-1.68.41-2.27a5.48 5.48 0 01.18-.83 5.22 5.22 0 01-.07.85c-.07.54-.17 1.32-.32 2.28-.29 1.93-.75 4.58-1.37 7.48s-1.28 5.52-1.79 7.4c-.26.94-.48 1.69-.64 2.21a6.62 6.62 0 01-.27.8z"
          style={{
            WebkitTransformOrigin: 146.41,
            msTransformOrigin: 146.41,
            transformOrigin: 146.41,
          }}
          id="elyovwmw0am2b"
          fill="#E0E0E0"
          className="animable"
        ></path>
        <path
          d="M355.28 139.38C342 127.75 340.7 108.7 343.08 92c.4-2.8.41-5.79 2-8.11s4.89-3.66 7.28-2.21c2 1.21 2.62 3.73 3.57 5.86a16.45 16.45 0 005.9 7c1.69 1.12 3.84 1.92 5.71 1.14 2.56-1.07 3.2-4.38 3.49-7.18l1.58-15.61a25.83 25.83 0 011.74-8.19c1.15-2.56 3.33-4.81 6.07-5.27s5.85 1.43 6.11 4.22a24 24 0 01-.29 3.48 2.94 2.94 0 001.42 3c1.08.45 2.28-.22 3.2-1 3.18-2.51 5.53-5.93 7.75-9.34S403 52.83 406 50s6.82-4.83 10.84-4.63 8 3.13 8.6 7.16-2.14 7.79-5 10.7a62.92 62.92 0 01-14.3 11 5.14 5.14 0 00-2.42 2.1c-.81 1.79.76 3.83 2.53 4.64 2 .91 4.28.94 6.43 1.43s4.4 1.71 5 3.85c.84 3-1.87 5.71-4.43 7.41a53.52 53.52 0 01-16.77 7.42c-2.13.53-4.36 1-6.17 2.22S387.2 107 388 109s3.29 3 5.48 2.82 4.25-1.13 6.38-1.68c4-1 8.91-.24 11 3.34a8.87 8.87 0 01.1 7.91 20.48 20.48 0 01-5 6.44 54 54 0 01-24.65 13.63c-9.22 2.12-17.55 2.07-26.05-2.11"
          style={{
            WebkitTransformOrigin: 383.819,
            msTransformOrigin: 383.819,
            transformOrigin: 383.819,
          }}
          id="el6pxh5fbiqhw"
          fill="#F5F5F5"
          className="animable"
        ></path>
        <path
          d="M360.76 129.31a253.21 253.21 0 0112.82-25.85c1.26-2.23 2.49-4.43 3.71-6.6s2.44-4.31 3.75-6.34a128 128 0 018.23-11.21c2.79-3.44 5.56-6.6 8.17-9.54s5.12-5.62 7.5-8a100 100 0 0112-10.25c1.51-1.1 2.71-1.91 3.53-2.45l.94-.61a1.74 1.74 0 01.33-.19 2.44 2.44 0 01-.3.24l-.91.65c-.8.56-2 1.4-3.47 2.52a106.39 106.39 0 00-11.9 10.35c-2.35 2.37-4.83 5.06-7.43 8s-5.35 6.12-8.12 9.56a123.14 123.14 0 00-8.17 11.18c-1.31 2-2.51 4.14-3.73 6.31l-3.71 6.6a257.86 257.86 0 00-12.83 25.78"
          style={{
            WebkitTransformOrigin: 391.25,
            msTransformOrigin: 391.25,
            transformOrigin: 391.25,
          }}
          id="el4bvx7x8qd1r"
          fill="#E0E0E0"
          className="animable"
        ></path>
        <path
          d="M381.19 90.52a6.6 6.6 0 01-.14-1.22c-.07-.79-.12-1.93-.17-3.34-.09-2.82-.09-6.72-.07-11s0-8.19-.17-11c-.07-1.41-.13-2.55-.19-3.33a5.07 5.07 0 010-1.23 6.42 6.42 0 01.22 1.21c.12.78.24 1.92.35 3.32.23 2.82.34 6.72.32 11s-.05 8.08-.07 11v3.34a5.05 5.05 0 01-.08 1.25z"
          style={{
            WebkitTransformOrigin: 380.877,
            msTransformOrigin: 380.877,
            transformOrigin: 380.877,
          }}
          id="elh7qzrj7fga"
          fill="#E0E0E0"
          className="animable"
        ></path>
        <path
          d="M417.79 87.68a8.67 8.67 0 01-1.45 0h-3.94c-3.32 0-7.91.16-13 .56s-9.62 1-12.91 1.48c-1.65.24-3 .47-3.89.62a8.64 8.64 0 01-1.44.2 7.13 7.13 0 011.4-.4c.91-.21 2.23-.5 3.87-.79 3.29-.59 7.86-1.22 12.93-1.63a128.71 128.71 0 0113-.41c1.66 0 3 .12 3.94.2a7.53 7.53 0 011.49.17z"
          style={{
            WebkitTransformOrigin: 399.475,
            msTransformOrigin: 399.475,
            transformOrigin: 399.475,
          }}
          id="elsxgq9qrno9"
          fill="#E0E0E0"
          className="animable"
        ></path>
        <path
          d="M361.27 128.69a1.77 1.77 0 01-.2-.46l-.47-1.36c-.41-1.19-1-2.92-1.59-5.07-1.29-4.3-2.88-10.29-4.55-16.92s-3.2-12.63-4.4-16.95l-1.43-5.11c-.15-.55-.28-1-.38-1.39a1.81 1.81 0 01-.1-.5 3.32 3.32 0 01.2.47c.12.37.28.82.47 1.36.41 1.19.95 2.92 1.59 5.07 1.29 4.29 2.88 10.28 4.55 16.92s3.2 12.63 4.4 17l1.43 5.11c.15.55.28 1 .38 1.39a1.85 1.85 0 01.1.44z"
          style={{
            WebkitTransformOrigin: 354.71,
            msTransformOrigin: 354.71,
            transformOrigin: 354.71,
          }}
          id="eluo7n56ypnp"
          fill="#E0E0E0"
          className="animable"
        ></path>
        <path
          d="M410.59 118.47a1.44 1.44 0 01-.49.14l-1.43.32-5.29 1.1c-4.46.94-10.6 2.29-17.39 3.81s-13 2.81-17.44 3.65c-2.24.43-4.06.75-5.32 1l-1.45.21a1.52 1.52 0 01-.51 0 3.24 3.24 0 01.49-.14l1.44-.31 5.28-1.11c4.46-.93 10.61-2.29 17.4-3.8s12.95-2.82 17.43-3.66c2.24-.42 4.06-.74 5.32-.94l1.45-.22a2 2 0 01.51-.05z"
          style={{
            WebkitTransformOrigin: 385.93,
            msTransformOrigin: 385.93,
            transformOrigin: 385.93,
          }}
          id="elug6gh7xz86q"
          fill="#E0E0E0"
          className="animable"
        ></path>
      </g>
      <g
        id="freepik--Floor--inject-5"
        className="animable"
        style={{
          WebkitTransformOrigin: 250,
          msTransformOrigin: 250,
          transformOrigin: 250,
        }}
      >
        <path
          d="M473.37 465.82c0 .15-100 .27-223.36.27s-223.38-.09-223.38-.27 100-.26 223.38-.26 223.36.12 223.36.26z"
          style={{
            WebkitTransformOrigin: 250,
            msTransformOrigin: 250,
            transformOrigin: 250,
          }}
          id="eljt9zj1t3kt"
          fill="#263238"
          className="animable"
        ></path>
      </g>
      <g
        id="freepik--Character--inject-5"
        className="animable"
        style={{
          WebkitTransformOrigin: 231.647,
          msTransformOrigin: 231.647,
          transformOrigin: 231.647,
        }}
      >
        <path
          d="M315.7 223.46q.82-13.89 1.66-27.78c.07-1.12.24-2.41 1.2-3a3.38 3.38 0 012.9.2c16.42 6.61 28.47 24.93 29.91 42.56"
          style={{
            WebkitTransformOrigin: 333.535,
            msTransformOrigin: 333.535,
            transformOrigin: 333.535,
          }}
          id="elfmi8ofbrxje"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <g
          style={{
            WebkitTransformOrigin: 327.498,
            msTransformOrigin: 327.498,
            transformOrigin: 327.498,
          }}
          id="elcq4mam9h1gb"
          className="animable"
          opacity="0.3"
        >
          <path
            d="M321.28 202.28a29.81 29.81 0 0113.4 22.87 4.54 4.54 0 01-.66 3.19 3.31 3.31 0 01-2.45 1.07 9.7 9.7 0 01-2.72-.42c-2.21-.57-4.54-1.19-6.18-2.79a8.85 8.85 0 01-2.41-5.86 26.94 26.94 0 01.66-6.44l2.8 4.78-3-15.48a1 1 0 01.08-.83c.17-.22.65-.14.62.14"
            style={{
              WebkitTransformOrigin: 327.498,
              msTransformOrigin: 327.498,
              transformOrigin: 327.498,
            }}
            id="el71vatye179t"
            fill="#FFF"
            className="animable"
          ></path>
        </g>
        <path
          d="M220.51 243.18a59.72 59.72 0 01-14-36.21l9.15 4.31-2.29-2.79A51.4 51.4 0 01247.9 226"
          style={{
            WebkitTransformOrigin: 227.205,
            msTransformOrigin: 227.205,
            transformOrigin: 227.205,
          }}
          id="el5wbczyqhj77"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <g
          style={{
            WebkitTransformOrigin: 224.964,
            msTransformOrigin: 224.964,
            transformOrigin: 224.964,
          }}
          id="el2mtrf22momc"
          className="animable"
          opacity="0.3"
        >
          <path
            d="M225.58 239.14a32.47 32.47 0 01-13.13-22.24c-.07-.6 0-1.39.56-1.59a1.42 1.42 0 011.18.33l16.51 10.79a7.49 7.49 0 01-1.3-3.47l7 5.13a2.31 2.31 0 011.1 1.39 2.06 2.06 0 01-.85 1.69 9.08 9.08 0 01-8.75 1.94l3 2.61a7.89 7.89 0 01-6.1 1.05 2.52 2.52 0 001.08 2.61"
            style={{
              WebkitTransformOrigin: 224.964,
              msTransformOrigin: 224.964,
              transformOrigin: 224.964,
            }}
            id="elgivt0ph9hck"
            fill="#FFF"
            className="animable"
          ></path>
        </g>
        <path
          d="M407 330.45s12.8 13.23 18.62 12.13c0 0-20.22-21.51-28.72-41.36a183.67 183.67 0 00-14.46-27c3.83-6.6 7.24-14.07 8.8-21.62a79.64 79.64 0 01-14.59 13.2c-.44-.62-.89-1.23-1.35-1.85a27.18 27.18 0 008.56-15.6l-20.21-.87a24.89 24.89 0 001.71-2.85 135 135 0 00-33-20.91c-23.25-13.23-75-17.6-100.2 3.91-22.57 13.16-28.62 30-46.4 34.17l-10.54-1.15s-4.1 22 9.37 31.83l-10-2.32s1.84 8.76 11.68 18.42l-6.14-.75s2.66 13.78 11.16 17.09c0 0-13.28 1.66-17-3.31 0 0-4.42 20.6 15.69 28.37 0 0-60.26 7.06-43.32 80.83 4 17.23 27.75 29.63 55.1 35.62l197-.77c12-3.92 26.32-43.68 26.85-59.67s-7.43-46.88-7.43-46.88l7.46 9.93z"
          style={{
            WebkitTransformOrigin: 284.649,
            msTransformOrigin: 284.649,
            transformOrigin: 284.649,
          }}
          id="elsgvg801upwf"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M181.84 361.19c-11.31-.68-22.42 8.11-24.35 19.28a56.34 56.34 0 0124.53-9 23.15 23.15 0 00-5.83 25.62 30.72 30.72 0 0116.72-17.49 23.8 23.8 0 00-4.16 23"
          style={{
            WebkitTransformOrigin: 175.2,
            msTransformOrigin: 175.2,
            transformOrigin: 175.2,
          }}
          id="elm5kgnlaixs"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M188.75 402.62a2.11 2.11 0 01-.16-.41c-.09-.27-.25-.67-.41-1.2a23.49 23.49 0 01-.82-4.82 24.2 24.2 0 01.77-7.66 23.41 23.41 0 014.63-9l.23.31a30.71 30.71 0 00-16.57 17.39l-.22.6-.24-.59a23.5 23.5 0 01.73-19 22.7 22.7 0 015.16-6.87l.2.45a56.61 56.61 0 00-24.44 8.9l-.44.29.1-.52a22 22 0 012.5-6.87 22.9 22.9 0 014-5.25 24.67 24.67 0 018.94-5.78 22.55 22.55 0 016.71-1.4h2.43-2.42a23.15 23.15 0 00-6.63 1.51 24.49 24.49 0 00-8.77 5.79 22.65 22.65 0 00-3.89 5.19 21.85 21.85 0 00-2.42 6.75l-.35-.23a56.77 56.77 0 0124.63-9l.81-.09-.61.54a22.23 22.23 0 00-5 6.71 23 23 0 00-.74 18.62H176a31.09 31.09 0 017.24-11.13 30.64 30.64 0 019.64-6.45l.76-.32-.53.63a23.26 23.26 0 00-4.63 8.84 24.5 24.5 0 00-.85 7.57 24 24 0 00.72 4.79c.13.54.27.95.34 1.22a2.5 2.5 0 01.06.49z"
          style={{
            WebkitTransformOrigin: 175.405,
            msTransformOrigin: 175.405,
            transformOrigin: 175.405,
          }}
          id="elg9d9a021r9"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M388.33 392.22a27.15 27.15 0 0130.48 15.65"
          style={{
            WebkitTransformOrigin: 403.57,
            msTransformOrigin: 403.57,
            transformOrigin: 403.57,
          }}
          id="el4li7hhq92uv"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M418.81 407.87c-.1.05-.87-1.9-2.82-4.61a27.47 27.47 0 00-22.27-11.43c-3.34 0-5.38.5-5.39.39a6.88 6.88 0 011.41-.35 23.24 23.24 0 014-.4 26.64 26.64 0 0122.58 11.58 24.12 24.12 0 012 3.46 6.35 6.35 0 01.49 1.36z"
          style={{
            WebkitTransformOrigin: 403.57,
            msTransformOrigin: 403.57,
            transformOrigin: 403.57,
          }}
          id="eln6sug2lcz"
          fill="#263238"
          className="animable"
        ></path>
        <g
          style={{
            WebkitTransformOrigin: 310.073,
            msTransformOrigin: 310.073,
            transformOrigin: 310.073,
          }}
          id="elhnqcgna9h9f"
          className="animable"
          opacity="0.3"
        >
          <path
            id="elctpvlxn8nvb"
            d="M318.87 408.84c-7.26 1.16-16.5 6.65-19.87 13.16-.72 1.39-.06 1.58 0 3.14a4.2 4.2 0 002.36 3.77 2.76 2.76 0 003.69-1.79 21.56 21.56 0 003.26 15.3 11.6 11.6 0 004.72-5 28.66 28.66 0 008 21.29l-3.54-13.81c-1.27-5-2.5-9.25-2.16-14.38.36-5.48 3.62-10.1 6.15-14.64-3.48 1.51-7.51 8.35-10.94 12.52a24 24 0 018.09-19.36"
            className="animable"
            style={{
              WebkitTransformOrigin: 310.073,
              msTransformOrigin: 310.073,
              transformOrigin: 310.073,
            }}
          ></path>
        </g>
        <path
          d="M317.51 445.06a3 3 0 01-.28-.59c-.15-.4-.44-1-.68-1.77a27.18 27.18 0 01-1.35-6.94 29.52 29.52 0 011.25-10.65 28.67 28.67 0 016.81-11.67l.35.36a105.39 105.39 0 00-8.31 8.33 38.36 38.36 0 00-4.45 6.24l-.39.69-.09-.78a21.69 21.69 0 012.16-12 21.46 21.46 0 016.64-7.93l.19.34A16.11 16.11 0 00314 412a16.87 16.87 0 00-3 3.7 18.71 18.71 0 00-1.34 2.73 8.93 8.93 0 01-.38 1 1 1 0 010-.26c.05-.18.11-.44.22-.77a15.58 15.58 0 011.27-2.81 16.86 16.86 0 013-3.82 16.43 16.43 0 015.44-3.43l1.34-.51-1.16.85a21.25 21.25 0 00-6.39 7.82 21.47 21.47 0 00-2.07 11.72l-.48-.1a39.56 39.56 0 014.5-6.33 103 103 0 018.37-8.36l.35.36a28.58 28.58 0 00-6.76 11.44 29.65 29.65 0 00-1.34 10.51 29 29 0 001.19 6.91c.22.79.48 1.37.6 1.78a5.09 5.09 0 01.15.63z"
          style={{
            WebkitTransformOrigin: 316.471,
            msTransformOrigin: 316.471,
            transformOrigin: 316.471,
          }}
          id="eltnp62rqtnuh"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M198.86 444a28.71 28.71 0 0014.81 8.74 1.93 1.93 0 001.89-.26c.58-.64.1-1.65-.38-2.36l-6.35-9.38a33.72 33.72 0 0015.57 6.84c.95.15 2.12.15 2.6-.67a2.47 2.47 0 00-.23-2.21c-1-2.14-2-4.25-3.18-6.31"
          style={{
            WebkitTransformOrigin: 213.01,
            msTransformOrigin: 213.01,
            transformOrigin: 213.01,
          }}
          id="elllzhm7feli"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M223.59 438.35a2.56 2.56 0 01.31.5l.8 1.5c.36.67.77 1.47 1.25 2.38q.38.7.78 1.5a4.77 4.77 0 01.63 1.83 1.6 1.6 0 01-.32 1.08 1.79 1.79 0 01-1 .6 5.87 5.87 0 01-2.32-.11 32.49 32.49 0 01-4.87-1.23 33.6 33.6 0 01-10.17-5.49l.38-.35 1.1 1.63 3.54 5.24 1.69 2.49a4.33 4.33 0 01.65 1.41 1.36 1.36 0 01-.57 1.5 2.15 2.15 0 01-1.52.16c-.47-.08-.89-.22-1.33-.32-.87-.25-1.7-.51-2.48-.81a28.13 28.13 0 01-4.22-2 27.55 27.55 0 01-5.39-4.05c-.57-.56-1-1-1.26-1.33a3.1 3.1 0 01-.4-.51 2.94 2.94 0 01.48.43c.29.3.73.73 1.32 1.26a29.83 29.83 0 005.43 3.88 28.72 28.72 0 004.19 1.92c.78.29 1.6.54 2.45.78s1.8.57 2.48.19a.87.87 0 00.34-1 3.61 3.61 0 00-.59-1.22c-.55-.81-1.11-1.64-1.69-2.48q-1.72-2.55-3.55-5.24l-1.1-1.63-1-1.4 1.37 1.04a33.77 33.77 0 0014.8 6.72 5.56 5.56 0 002.16.14 1.21 1.21 0 001.05-1.28 4.53 4.53 0 00-.56-1.72c-.26-.53-.51-1-.74-1.51l-1.17-2.41-.72-1.54a2.2 2.2 0 01-.23-.55z"
          style={{
            WebkitTransformOrigin: 213.117,
            msTransformOrigin: 213.117,
            transformOrigin: 213.117,
          }}
          id="elxbecixjo3x"
          fill="#263238"
          className="animable"
        ></path>
        <g
          style={{
            WebkitTransformOrigin: 233.82,
            msTransformOrigin: 233.82,
            transformOrigin: 233.82,
          }}
          id="elvys8g8xu4p"
          className="animable"
          opacity="0.3"
        >
          <path
            id="el3z55g9pzl42"
            d="M223.53 381.78a22.63 22.63 0 009.32 8.69 10 10 0 00-2.44-5.54 42.6 42.6 0 0014.69 9.14 16.09 16.09 0 01-22.56-13.14"
            className="animable"
            style={{
              WebkitTransformOrigin: 233.82,
              msTransformOrigin: 233.82,
              transformOrigin: 233.82,
            }}
          ></path>
        </g>
        <g
          style={{
            WebkitTransformOrigin: 281.071,
            msTransformOrigin: 281.071,
            transformOrigin: 281.071,
          }}
          id="eltbew5y58l69"
          className="animable"
          opacity="0.3"
        >
          <path
            id="elunvbz4v00gs"
            d="M196.77 316.61c7.94 15.27 33.62 22.81 53.76 23.14 6.22.09 15 4.69 21.16 4.09 13.83-1.33 25.06-8.78 38.92-10 8.63-.73 17.31-1 25.84-2.45s8.14-2.46 14.92-7.85 14.11-10.73 14-19.39c-12.74 15.6-25.33 20.43-44.94 25s-40 4.47-60.11 3.54c-22.13-1-45.36-3.44-63.55-16.09"
            className="animable"
            style={{
              WebkitTransformOrigin: 281.071,
              msTransformOrigin: 281.071,
              transformOrigin: 281.071,
            }}
          ></path>
        </g>
        <path
          d="M265.09 199.49c.09 0 .17 1.13.47 2.92a34.18 34.18 0 001.9 6.81 34.72 34.72 0 003.31 6.26 28.57 28.57 0 011.67 2.44s-.23-.17-.58-.55a17.38 17.38 0 01-1.39-1.68 28.52 28.52 0 01-3.49-6.27 27.66 27.66 0 01-1.78-7 19.28 19.28 0 01-.16-2.17 2.65 2.65 0 01.05-.76z"
          style={{
            WebkitTransformOrigin: 268.736,
            msTransformOrigin: 268.736,
            transformOrigin: 268.736,
          }}
          id="elir353ti9bls"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M271.62 197c.09 0-.31 1-.7 2.67a22 22 0 00-.49 6.58 21.68 21.68 0 001.53 6.41c.64 1.58 1.19 2.49 1.11 2.53s-.19-.19-.46-.59a14.2 14.2 0 01-1-1.79 19.11 19.11 0 01-1.05-13.23 12.72 12.72 0 01.69-1.92c.21-.48.34-.72.37-.66z"
          style={{
            WebkitTransformOrigin: 271.459,
            msTransformOrigin: 271.459,
            transformOrigin: 271.459,
          }}
          id="elt85yoyj3f5"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M149.23 363.2a2.59 2.59 0 01.4-.39c.27-.24.66-.62 1.21-1a40 40 0 014.86-3.31 57.75 57.75 0 0118.17-6.58 120 120 0 0119.28-1.92c2.48-.06 4.48-.08 5.86-.08h1.6a3.3 3.3 0 01.56 0 2.37 2.37 0 01-.56.07l-1.59.08-5.86.25a134.18 134.18 0 00-19.19 2 60.8 60.8 0 00-18.09 6.38 49.24 49.24 0 00-4.91 3.16c-1.11.89-1.71 1.37-1.74 1.34z"
          style={{
            WebkitTransformOrigin: 175.2,
            msTransformOrigin: 175.2,
            transformOrigin: 175.2,
          }}
          id="elox9dqxbyp3"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M292.58 201.34c0 .09-1.71-.48-4.49-1.16a20.39 20.39 0 00-4.94-.59 11.16 11.16 0 00-5.73 1.63 8.06 8.06 0 00-2.25 2.09 7.2 7.2 0 00-1.13 2.62 11.41 11.41 0 00.21 4.9c.69 2.76 1.43 4.4 1.33 4.44a5.35 5.35 0 01-.55-1.13 24.73 24.73 0 01-1.14-3.22 11.41 11.41 0 01-.32-5.08 7.52 7.52 0 011.18-2.82 8.57 8.57 0 012.39-2.25 11.47 11.47 0 016-1.66 19 19 0 015 .72c1.39.37 2.49.75 3.25 1a6.44 6.44 0 011.19.51z"
          style={{
            WebkitTransformOrigin: 283,
            msTransformOrigin: 283,
            transformOrigin: 283,
          }}
          id="elnm2sjvi9f9"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M442.61 451.94c-1.08-7.18-4.6-14.25-10.61-18.34s-14.66-4.57-20.38-.08l-23.74 32.1 50.54.21c2.82-2.61 4.76-10.09 4.19-13.89z"
          style={{
            WebkitTransformOrigin: 415.295,
            msTransformOrigin: 415.295,
            transformOrigin: 415.295,
          }}
          id="el4bymzaxzql9"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <g
          style={{
            WebkitTransformOrigin: 410.862,
            msTransformOrigin: 410.862,
            transformOrigin: 410.862,
          }}
          id="eln1fj834ba57"
          className="animable"
          opacity="0.3"
        >
          <path
            id="el37pl9sk4e1i"
            d="M409 465.16c4.27-1.78 7.42-5.61 9.36-9.81s2.79-8.8 3.64-13.35c.7-3.77 1.36-7.84-.28-11.32a2.26 2.26 0 00-2 1 6.93 6.93 0 00-.95 2.17c-3.91 12.34-9.94 23-19.79 31.35"
            className="animable"
            style={{
              WebkitTransformOrigin: 410.862,
              msTransformOrigin: 410.862,
              transformOrigin: 410.862,
            }}
          ></path>
        </g>
        <g
          style={{
            WebkitTransformOrigin: 219.665,
            msTransformOrigin: 219.665,
            transformOrigin: 219.665,
          }}
          id="el3f1olgszzwt"
          className="animable"
          opacity="0.3"
        >
          <path
            d="M258.88 214.41c5 14.41 5.63 30 5.09 45.19-.27 7.58-.84 15.24-3.21 22.45s-6.72 14-13.18 18c-6.1 3.77-13.64 4.76-20.76 3.82s-13.88-3.67-20.29-6.89c-7.32-3.68-14.37-8.08-20.05-14s-10.34-14.19-11.28-22.32l10.54 1.15s8.11-.86 20.72-13.06c13.78-13.32 16.29-14.95 26.61-21.89a106.59 106.59 0 0125.81-12.45z"
            style={{
              WebkitTransformOrigin: 219.665,
              msTransformOrigin: 219.665,
              transformOrigin: 219.665,
            }}
            id="elcecf3pdk2f5"
            fill="#FFF"
            className="animable"
          ></path>
        </g>
        <g
          style={{
            WebkitTransformOrigin: 314.81,
            msTransformOrigin: 314.81,
            transformOrigin: 314.81,
          }}
          id="eluzfns9g32"
          className="animable"
          opacity="0.3"
        >
          <path
            id="el5jeum47jjhg"
            d="M302.44 303.23a10.49 10.49 0 0112.56 1.71 13.84 13.84 0 0114-5.1 31.67 31.67 0 00-8.62 5.09c-2.47 2.27-4.25 5.53-3.94 8.87a47.32 47.32 0 00-10.55-8.51c-1.62-1-3.75-1.81-5.27-.69"
            className="animable"
            style={{
              WebkitTransformOrigin: 314.81,
              msTransformOrigin: 314.81,
              transformOrigin: 314.81,
            }}
          ></path>
        </g>
        <path
          d="M336.88 415.89a32.67 32.67 0 00-11.61 37.82"
          style={{
            WebkitTransformOrigin: 330.071,
            msTransformOrigin: 330.071,
            transformOrigin: 330.071,
          }}
          id="elgwom8dpzdbp"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M325.27 453.71a1.49 1.49 0 01-.19-.39c-.1-.27-.27-.65-.44-1.17a28.65 28.65 0 01-1.11-4.43 32.11 32.11 0 018.55-27.86 27.66 27.66 0 013.41-3c.42-.33.78-.56 1-.72s.37-.23.38-.21a15.58 15.58 0 01-1.27 1.09 35.82 35.82 0 00-3.26 3.13 33 33 0 00-8.46 27.56 35.52 35.52 0 00.95 4.42 12.14 12.14 0 01.44 1.58z"
          style={{
            WebkitTransformOrigin: 329.96,
            msTransformOrigin: 329.96,
            transformOrigin: 329.96,
          }}
          id="el5wchvwyil86"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M356.77 381.27c4.09-3.14 9.37-6.44 14-4.23a9.35 9.35 0 014.77 6.94 23.58 23.58 0 01-.54 8.68 105 105 0 01-21.27 45.15c-3.85 4.76-9.33 9.58-15.31 8.27-5.58-1.23-8.75-7.61-8.42-13.32s3.21-10.9 5.88-16c6.34-12 12.5-25.16 20.86-35.53"
          style={{
            WebkitTransformOrigin: 352.848,
            msTransformOrigin: 352.848,
            transformOrigin: 352.848,
          }}
          id="eli54igdns9c"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M356.77 381.27a4.13 4.13 0 01-.26.38l-.8 1.07c-.71.94-1.74 2.35-3 4.2a172 172 0 00-9.56 16.36l-6 11.64c-2.12 4.2-4.79 8.54-6.18 13.62a17.42 17.42 0 00-.41 7.94 13.23 13.23 0 003.89 7.2 9 9 0 003.67 2 9.47 9.47 0 004.27.11 16.67 16.67 0 007.64-4.37 49.8 49.8 0 005.87-6.81c1.8-2.36 3.42-4.8 5-7.22a106.2 106.2 0 0012.57-28.86q.9-3.4 1.54-6.62a25.86 25.86 0 00.61-6.2c-.12-3.93-2.18-7.5-5.11-8.69a7.75 7.75 0 00-4.27-.51 13.87 13.87 0 00-3.52 1.09 29.16 29.16 0 00-4.43 2.6l-1.1.78c-.24.17-.38.25-.38.25l.35-.29c.24-.2.59-.47 1.07-.82a26.64 26.64 0 014.4-2.7 13.25 13.25 0 013.57-1.15 7.76 7.76 0 018.21 3.9 11.87 11.87 0 011.57 5.52 25.8 25.8 0 01-.57 6.29c-.43 2.16-.93 4.38-1.52 6.66a106.13 106.13 0 01-12.55 29c-1.56 2.44-3.19 4.88-5 7.26a50.51 50.51 0 01-5.93 6.89 17.1 17.1 0 01-7.89 4.49 9.91 9.91 0 01-4.5-.13 9.45 9.45 0 01-3.88-2.15 13.64 13.64 0 01-4-7.48 17.78 17.78 0 01.43-8.16c1.43-5.18 4.13-9.52 6.25-13.7s4.22-8.06 6.08-11.61a160.73 160.73 0 019.72-16.3c1.28-1.84 2.34-3.23 3.07-4.15l.85-1a4.47 4.47 0 01.23-.33z"
          style={{
            WebkitTransformOrigin: 352.924,
            msTransformOrigin: 352.924,
            transformOrigin: 352.924,
          }}
          id="elm7rhofjebsb"
          fill="#263238"
          className="animable"
        ></path>
        <g
          style={{
            WebkitTransformOrigin: 364.266,
            msTransformOrigin: 364.266,
            transformOrigin: 364.266,
          }}
          id="elu9hsaxhsymn"
          className="animable"
          opacity="0.3"
        >
          <path
            id="eli8d0s4sbxo9"
            d="M357.27 395.53v.05c1-2.82 3.13-3.63 5.42-4.46s5.06-.74 6.9.86c2.12 1.84 2.39 5.08 1.82 7.83a5.38 5.38 0 01-1.15 2.65 2.3 2.3 0 01-2.65.61c-1-.55-1.31-2-2.37-2.44s-2.46.55-3.74.87a3.87 3.87 0 01-4.31-2.32 4.72 4.72 0 01.08-3.65z"
            className="animable"
            style={{
              WebkitTransformOrigin: 364.266,
              msTransformOrigin: 364.266,
              transformOrigin: 364.266,
            }}
          ></path>
        </g>
        <g
          style={{
            WebkitTransformOrigin: 360.825,
            msTransformOrigin: 360.825,
            transformOrigin: 360.825,
          }}
          id="el83nhlq3c4rj"
          className="animable"
          opacity="0.3"
        >
          <path
            id="el5djp8j3cgo"
            d="M361.63 381.45a2.67 2.67 0 011.57 2.71 10.51 10.51 0 01-.81 3.65c-.35 1-.94 2.11-2 2.15a1.74 1.74 0 01-1.46-.87 3.83 3.83 0 01-.47-1.7 9 9 0 01.62-4 3.51 3.51 0 011.18-1.67 1.6 1.6 0 011.93 0"
            className="animable"
            style={{
              WebkitTransformOrigin: 360.825,
              msTransformOrigin: 360.825,
              transformOrigin: 360.825,
            }}
          ></path>
        </g>
        <g
          style={{
            WebkitTransformOrigin: 372.805,
            msTransformOrigin: 372.805,
            transformOrigin: 372.805,
          }}
          id="ellov4x059qn"
          className="animable"
          opacity="0.3"
        >
          <path
            id="el9b1tjurjojb"
            d="M373.61 383.91a2.67 2.67 0 011.57 2.71 10.56 10.56 0 01-.81 3.65c-.35 1-.95 2.11-2 2.15a1.73 1.73 0 01-1.46-.87 3.58 3.58 0 01-.47-1.7 9.15 9.15 0 01.61-4 3.53 3.53 0 011.19-1.67 1.59 1.59 0 011.93 0"
            className="animable"
            style={{
              WebkitTransformOrigin: 372.805,
              msTransformOrigin: 372.805,
              transformOrigin: 372.805,
            }}
          ></path>
        </g>
        <g
          style={{
            WebkitTransformOrigin: 367.747,
            msTransformOrigin: 367.747,
            transformOrigin: 367.747,
          }}
          id="elvw1ekf34l4"
          className="animable"
          opacity="0.3"
        >
          <path
            id="elmrmg2fucbfa"
            d="M368.55 379.33a2.71 2.71 0 011.57 2.72 10.69 10.69 0 01-.81 3.64c-.36 1-.95 2.12-2 2.15a1.73 1.73 0 01-1.46-.87 3.65 3.65 0 01-.46-1.69 8.85 8.85 0 01.61-4 3.44 3.44 0 011.19-1.67 1.59 1.59 0 011.92 0"
            className="animable"
            style={{
              WebkitTransformOrigin: 367.747,
              msTransformOrigin: 367.747,
              transformOrigin: 367.747,
            }}
          ></path>
        </g>
        <g
          style={{
            WebkitTransformOrigin: 347.339,
            msTransformOrigin: 347.339,
            transformOrigin: 347.339,
          }}
          id="elited4mx0vyc"
          className="animable"
          opacity="0.3"
        >
          <path
            id="el7clwec952zj"
            d="M364.67 420.21a65 65 0 01-4.89 17.55 38.5 38.5 0 01-11 14.42c-2.2 1.72-4.78 3.2-7.57 3.27-3.95.1-7.55-2.73-9.33-6.26s-2-7.63-1.82-11.57c1.91 3.19 4.06 6.59 7.52 8a11.19 11.19 0 009.29-1 25.23 25.23 0 007.11-6.44 71.55 71.55 0 0010.46-17.26"
            className="animable"
            style={{
              WebkitTransformOrigin: 347.339,
              msTransformOrigin: 347.339,
              transformOrigin: 347.339,
            }}
          ></path>
        </g>
        <path
          d="M140.7 382.07c-4.92-1.51-11-2.76-14.62.94a9.37 9.37 0 00-2 8.18 23.55 23.55 0 003.54 7.95A105.23 105.23 0 00163.34 434c5.27 3.1 12.09 5.7 17.23 2.37 4.81-3.1 5.53-10.19 3.23-15.42s-6.8-9.12-11.11-12.95c-10.14-9-20.52-19.18-32-26"
          style={{
            WebkitTransformOrigin: 154.451,
            msTransformOrigin: 154.451,
            transformOrigin: 154.451,
          }}
          id="elalf64p3ho1i"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M140.7 382.07s.14.06.41.21l1.15.68c1 .61 2.49 1.54 4.34 2.81a161.25 161.25 0 0114.81 11.87l9.77 8.74c3.45 3.17 7.5 6.29 10.65 10.64a17.78 17.78 0 013.27 7.49 13.78 13.78 0 01-1.15 8.42 9.62 9.62 0 01-2.88 3.37 9.85 9.85 0 01-4.18 1.7 17.05 17.05 0 01-9-1.44 51.42 51.42 0 01-8-4.37c-2.52-1.6-4.91-3.32-7.22-5.05a106.59 106.59 0 01-12.3-11.14 105.28 105.28 0 01-9.56-11.64c-1.35-1.93-2.6-3.84-3.75-5.71a25.85 25.85 0 01-2.75-5.69 11.87 11.87 0 01-.46-5.72 7.76 7.76 0 016.32-6.53 13.92 13.92 0 013.75-.18 27.31 27.31 0 015.07 1c.57.16 1 .29 1.28.39l.43.16-.44-.11-1.3-.34a30 30 0 00-5.06-.89 13.89 13.89 0 00-3.68.22 7.73 7.73 0 00-3.82 2c-2.33 2.15-3 6.21-1.74 9.93a25.79 25.79 0 002.74 5.59q1.74 2.79 3.76 5.67a106.26 106.26 0 0021.89 22.62c2.3 1.73 4.68 3.44 7.19 5a49.72 49.72 0 007.89 4.32 16.54 16.54 0 008.68 1.42 9.39 9.39 0 004-1.61 8.91 8.91 0 002.72-3.19 13.23 13.23 0 001.12-8.1 17.22 17.22 0 00-3.17-7.29c-3.08-4.28-7.1-7.41-10.55-10.6l-9.72-8.79a171 171 0 00-14.69-12c-1.82-1.3-3.28-2.25-4.27-2.89l-1.13-.72z"
          style={{
            WebkitTransformOrigin: 154.504,
            msTransformOrigin: 154.504,
            transformOrigin: 154.504,
          }}
          id="elryvu4x8avjo"
          fill="#263238"
          className="animable"
        ></path>
        <g
          style={{
            WebkitTransformOrigin: 139.155,
            msTransformOrigin: 139.155,
            transformOrigin: 139.155,
          }}
          id="eluft2u91p7vo"
          className="animable"
          opacity="0.3"
        >
          <path
            id="eldd2wns73kdt"
            d="M145.24 395.59c-1.93-2.29-4.2-2.31-6.64-2.28s-5 1.09-6.16 3.22c-1.34 2.48-.46 5.6 1 8a5.2 5.2 0 002 2.07 2.27 2.27 0 002.69-.35c.75-.87.54-2.32 1.36-3.12s2.51-.35 3.81-.49a3.88 3.88 0 003.23-3.68 4.78 4.78 0 00-1.29-3.37z"
            className="animable"
            style={{
              WebkitTransformOrigin: 139.155,
              msTransformOrigin: 139.155,
              transformOrigin: 139.155,
            }}
          ></path>
        </g>
        <g
          style={{
            WebkitTransformOrigin: 138.408,
            msTransformOrigin: 138.408,
            transformOrigin: 138.408,
          }}
          id="el1se1momyga8"
          className="animable"
          opacity="0.3"
        >
          <path
            id="el49hqfbb7mh4"
            d="M136.21 383.93a2.69 2.69 0 00-.52 3.1 10.56 10.56 0 002 3.13c.67.79 1.63 1.65 2.61 1.32a1.73 1.73 0 001.06-1.33 3.73 3.73 0 00-.15-1.75 9.12 9.12 0 00-2-3.54 3.45 3.45 0 00-1.7-1.15 1.6 1.6 0 00-1.79.71"
            className="animable"
            style={{
              WebkitTransformOrigin: 138.408,
              msTransformOrigin: 138.408,
              transformOrigin: 138.408,
            }}
          ></path>
        </g>
        <g
          style={{
            WebkitTransformOrigin: 128.062,
            msTransformOrigin: 128.062,
            transformOrigin: 128.062,
          }}
          id="eldxbe2sdpmv4"
          className="animable"
          opacity="0.3"
        >
          <path
            id="elda9oiyo7vq9"
            d="M125.86 390.44a2.68 2.68 0 00-.52 3.09 10.53 10.53 0 002 3.13c.68.79 1.63 1.65 2.62 1.32a1.75 1.75 0 001.06-1.33 3.73 3.73 0 00-.16-1.75 9 9 0 00-2-3.54 3.45 3.45 0 00-1.7-1.15 1.6 1.6 0 00-1.79.71"
            className="animable"
            style={{
              WebkitTransformOrigin: 128.062,
              msTransformOrigin: 128.062,
              transformOrigin: 128.062,
            }}
          ></path>
        </g>
        <g
          style={{
            WebkitTransformOrigin: 131.202,
            msTransformOrigin: 131.202,
            transformOrigin: 131.202,
          }}
          id="el6g09571m8ru"
          className="animable"
          opacity="0.3"
        >
          <path
            id="eldpg6pcfanx"
            d="M129 384.38a2.68 2.68 0 00-.52 3.09 10.53 10.53 0 002 3.13c.68.79 1.63 1.65 2.62 1.32a1.74 1.74 0 001.06-1.33 3.73 3.73 0 00-.16-1.75 9 9 0 00-2-3.54 3.45 3.45 0 00-1.7-1.15 1.6 1.6 0 00-1.79.71"
            className="animable"
            style={{
              WebkitTransformOrigin: 131.202,
              msTransformOrigin: 131.202,
              transformOrigin: 131.202,
            }}
          ></path>
        </g>
        <g
          style={{
            WebkitTransformOrigin: 167.429,
            msTransformOrigin: 167.429,
            transformOrigin: 167.429,
          }}
          id="elk3bl1v55qpq"
          className="animable"
          opacity="0.3"
        >
          <path
            id="elwq7wn4weoqj"
            d="M147 421.3a65 65 0 0010.69 14.7 38.33 38.33 0 0015.31 9.68c2.66.85 5.59 1.33 8.23.42 3.74-1.29 6.11-5.2 6.54-9.13s-.77-7.86-2.35-11.48c-.67 3.66-1.49 7.6-4.25 10.1a11.11 11.11 0 01-9 2.34 25.25 25.25 0 01-8.92-3.53 72 72 0 01-15.84-12.5"
            className="animable"
            style={{
              WebkitTransformOrigin: 167.429,
              msTransformOrigin: 167.429,
              transformOrigin: 167.429,
            }}
          ></path>
        </g>
        <g
          style={{
            WebkitTransformOrigin: 157.799,
            msTransformOrigin: 157.799,
            transformOrigin: 157.799,
          }}
          id="elqr46zezhe6"
          className="animable"
          opacity="0.3"
        >
          <path
            d="M143.28 415.87c-.29.4-.58.81-.86 1.22A17.34 17.34 0 11171 436.67a88.61 88.61 0 01-29.9-20.15"
            style={{
              WebkitTransformOrigin: 157.799,
              msTransformOrigin: 157.799,
              transformOrigin: 157.799,
            }}
            id="elzonud02zga"
            fill="#FFF"
            className="animable"
          ></path>
        </g>
        <path
          d="M425.6 406a3.07 3.07 0 01-.05.67c-.07.5-.16 1.13-.26 1.92-.23 1.67-.62 4.07-1.17 7A132.09 132.09 0 01418 438.3a80.42 80.42 0 01-5.63 11.7c-.51.86-1.06 1.66-1.56 2.46l-.76 1.17-.81 1.09-1.54 2.05c-.53.63-1.06 1.22-1.56 1.78s-.95 1.13-1.45 1.59l-1.38 1.33-1.21 1.15-1.1.87-1.53 1.2a2.56 2.56 0 01-.56.38 4.47 4.47 0 01.49-.47l1.47-1.26 1.06-.9 1.17-1.18 1.35-1.34c.49-.47.92-1.05 1.41-1.61l1.52-1.79 1.51-2.06.79-1.08c.25-.38.49-.77.74-1.17.5-.8 1-1.6 1.54-2.45a84.63 84.63 0 005.51-11.64 143.08 143.08 0 006.29-22.56c.59-2.94 1-5.33 1.33-7 .14-.78.26-1.41.35-1.9a4.5 4.5 0 01.16-.66z"
          style={{
            WebkitTransformOrigin: 412.256,
            msTransformOrigin: 412.256,
            transformOrigin: 412.256,
          }}
          id="elp8o3eymxmfh"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M195.54 345.34a2.47 2.47 0 01.46-.48l1.39-1.3c.61-.57 1.36-1.25 2.26-2s1.9-1.66 3.06-2.58c2.29-1.89 5.1-4 8.31-6.3s6.84-4.59 10.76-6.87 7.77-4.24 11.31-5.92 6.82-3 9.6-4.07c1.38-.55 2.65-1 3.76-1.38s2.08-.71 2.87-.95l1.83-.56a3 3 0 01.64-.16 4.11 4.11 0 01-.61.26l-1.8.65c-.78.27-1.73.61-2.83 1s-2.36.87-3.73 1.44c-2.75 1.09-6 2.5-9.52 4.17S226 324 222 326.24s-7.52 4.6-10.75 6.82-6 4.34-8.35 6.19c-1.17.9-2.19 1.77-3.1 2.52s-1.69 1.39-2.31 1.94l-1.46 1.23a2.72 2.72 0 01-.49.4z"
          style={{
            WebkitTransformOrigin: 223.665,
            msTransformOrigin: 223.665,
            transformOrigin: 223.665,
          }}
          id="eleedydghw97o"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M167.39 328.64s.06-.05.18-.14l.56-.38 2.2-1.4c.95-.61 2.12-1.34 3.52-2.13s3-1.75 4.76-2.67l2.8-1.49c1-.51 2-1 3.09-1.52 2.12-1.07 4.46-2.07 6.9-3.16 4.93-2.08 10.43-4.16 16.33-6s11.63-3.17 16.88-4.21c2.63-.47 5.13-.95 7.49-1.26 1.17-.16 2.31-.35 3.4-.47l3.16-.35c2-.24 3.83-.34 5.43-.46s3-.19 4.12-.22l2.6-.07h.67a.64.64 0 01.24 0h-.23l-.68.06-2.59.17c-1.13.06-2.51.14-4.1.3s-3.42.27-5.42.54l-3.15.38c-1.09.13-2.22.33-3.39.5-2.35.32-4.84.82-7.46 1.3-5.22 1.07-10.93 2.45-16.82 4.24s-11.37 3.88-16.29 5.93c-2.44 1.07-4.78 2.06-6.9 3.11-1.07.52-2.12 1-3.1 1.49l-2.81 1.46c-1.8.9-3.38 1.82-4.78 2.59s-2.6 1.47-3.57 2.05l-2.24 1.32-.59.33c-.13.14-.21.17-.21.16z"
          style={{
            WebkitTransformOrigin: 209.555,
            msTransformOrigin: 209.555,
            transformOrigin: 209.555,
          }}
          id="el526ywry3woj"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M286.56 295.68c.06.15-2.52 1.24-5.37 3.15s-4.86 3.86-5 3.74a22.49 22.49 0 0110.34-6.89z"
          style={{
            WebkitTransformOrigin: 281.376,
            msTransformOrigin: 281.376,
            transformOrigin: 281.376,
          }}
          id="el335hjckpjq7"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M303.48 301.11c0 .1-1.48-.57-3.93-1.19a30.15 30.15 0 00-9.79-.9 22.57 22.57 0 00-9.44 2.51 9.58 9.58 0 00-2.94 2.76 2.85 2.85 0 01.51-1 8.06 8.06 0 012.24-2.08c2.18-1.43 5.69-2.42 9.59-2.72a28.1 28.1 0 019.93 1.06 23.24 23.24 0 012.85 1 5.21 5.21 0 01.98.56z"
          style={{
            WebkitTransformOrigin: 290.43,
            msTransformOrigin: 290.43,
            transformOrigin: 290.43,
          }}
          id="elwlfy7vqhy8l"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M270.62 309.45l1.17 2.8a8.09 8.09 0 01.7 2.29 2.82 2.82 0 01-.66 2.24 2.7 2.7 0 01-3.26.17 5.57 5.57 0 01-2-2.81c-.42-1.1-.7-2.26-1.21-3.32a5.23 5.23 0 001.63-4.75s1.01 3.2 3.63 3.38z"
          style={{
            WebkitTransformOrigin: 268.939,
            msTransformOrigin: 268.939,
            transformOrigin: 268.939,
          }}
          id="elkawm29cwels"
          fill="#F5F5F5"
          className="animable"
        ></path>
        <path
          d="M254.29 299.25a14.32 14.32 0 018.89-7.4c6.38-1.68 13 5 13 5s-7.71-2.27-7.6 1.56 2.38 3.74-.18 6.26-6.95-.13-8-3.1l-2.06-2.9z"
          style={{
            WebkitTransformOrigin: 265.235,
            msTransformOrigin: 265.235,
            transformOrigin: 265.235,
          }}
          id="elk41z92divd8"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M280.71 303s0 .13.05.36a5.46 5.46 0 010 1.05 7.37 7.37 0 01-1.5 3.51 7.17 7.17 0 01-4.89 2.8 7.57 7.57 0 01-6.33-2.63 7.14 7.14 0 01-1.57-3.07l.49-.14a6.48 6.48 0 01-.83 5.64 6.21 6.21 0 01-6.87 2.33 4.43 4.43 0 01-.76-.31c-.16-.09-.24-.14-.24-.16s.37.14 1.05.3a6.56 6.56 0 002.92 0 5.8 5.8 0 003.53-2.41 6.09 6.09 0 00.72-5.23l.49-.13a6.74 6.74 0 001.47 2.84 7.16 7.16 0 005.89 2.5 6.9 6.9 0 004.65-2.56 7.5 7.5 0 001.58-3.32c.13-.84.1-1.37.15-1.37z"
          style={{
            WebkitTransformOrigin: 269.523,
            msTransformOrigin: 269.523,
            transformOrigin: 269.523,
          }}
          id="elyapt81t2q4"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M268.35 292.79a9.66 9.66 0 01-2 .09 17.4 17.4 0 00-4.79.62 9.31 9.31 0 00-4.06 2.44c-.83.91-1.13 1.64-1.21 1.61a3.72 3.72 0 01.94-1.85 8.45 8.45 0 014.18-2.7 14.55 14.55 0 014.95-.49 6.48 6.48 0 011.99.28z"
          style={{
            WebkitTransformOrigin: 262.32,
            msTransformOrigin: 262.32,
            transformOrigin: 262.32,
          }}
          id="eli4xv7vtdu4d"
          fill="#FFF"
          className="animable"
        ></path>
        <path
          d="M270.27 317.64a19.76 19.76 0 01-2.16-5.2 19.5 19.5 0 01-1.08-5.52c.15 0 .68 2.42 1.58 5.37s1.8 5.29 1.66 5.35z"
          style={{
            WebkitTransformOrigin: 268.657,
            msTransformOrigin: 268.657,
            transformOrigin: 268.657,
          }}
          id="elyyvrgba6kr"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M199.07 328.85a2.72 2.72 0 01.4-.35l1.21-.94c1-.81 2.63-1.92 4.62-3.22s4.41-2.76 7.18-4.26 5.89-3 9.25-4.37 6.63-2.49 9.64-3.4 5.77-1.57 8.1-2 4.23-.8 5.55-1l1.52-.19a2.35 2.35 0 01.53 0 1.88 1.88 0 01-.52.14l-1.5.28c-1.31.22-3.19.6-5.5 1.12s-5 1.22-8 2.13-6.24 2.06-9.59 3.42-6.44 2.87-9.22 4.32-5.2 2.88-7.21 4.14-3.6 2.32-4.69 3.08l-1.27.85c-.33.18-.49.27-.5.25z"
          style={{
            WebkitTransformOrigin: 223.07,
            msTransformOrigin: 223.07,
            transformOrigin: 223.07,
          }}
          id="eljd793w7l38f"
          fill="#263238"
          className="animable"
        ></path>
        <circle
          cx="227.26"
          cy="279.59"
          r="22.55"
          style={{
            WebkitTransformOrigin: 227.26,
            msTransformOrigin: 227.26,
            transformOrigin: 227.26,
          }}
          id="elnig0ftt23j"
          fill="#F5F5F5"
          className="animable"
          transform="rotate(-76.59)"
        ></circle>
        <path
          d="M249.81 279.6c0 10.88-7.35 19.71-13.57 19.71S225 290.48 225 279.6s5-19.72 11.28-19.72 13.53 8.83 13.53 19.72z"
          style={{
            WebkitTransformOrigin: 237.405,
            msTransformOrigin: 237.405,
            transformOrigin: 237.405,
          }}
          id="elc030op1jsq6"
          fill="#263238"
          className="animable"
        ></path>
        <circle
          cx="241.24"
          cy="268.45"
          r="3.86"
          style={{
            WebkitTransformOrigin: 241.24,
            msTransformOrigin: 241.24,
            transformOrigin: 241.24,
          }}
          id="ell0djp3kxqsd"
          fill="#FFF"
          className="animable"
        ></circle>
        <path
          d="M231.26 293.92a4.41 4.41 0 01-.56-.94 20.08 20.08 0 01-1.21-2.75 27.61 27.61 0 01-1.21-4.3 32.36 32.36 0 01-.56-5.44 32 32 0 01.45-5.46 27.72 27.72 0 011.12-4.32 19.82 19.82 0 011.15-2.77 4.37 4.37 0 01.54-1c.09 0-.6 1.45-1.34 3.85a32.49 32.49 0 00-1 4.28 34.61 34.61 0 00-.4 5.37 35.1 35.1 0 00.51 5.36 31.36 31.36 0 001.09 4.27c.79 2.42 1.51 3.81 1.42 3.85z"
          style={{
            WebkitTransformOrigin: 229.494,
            msTransformOrigin: 229.494,
            transformOrigin: 229.494,
          }}
          id="el8e7vyiiz44i"
          fill="#FFF"
          className="animable"
        ></path>
        <path
          d="M221.53 250.88c-.06.73-.9 1.29-2 1.81s-2.59 1-4.06 1.67-2.76 1.25-3.86 1.75-2 .8-2.65.41-.73-1.48 0-2.93a8.74 8.74 0 014.53-4 9.31 9.31 0 015.9-.54c1.41.38 2.2 1.13 2.14 1.83z"
          style={{
            WebkitTransformOrigin: 214.988,
            msTransformOrigin: 214.988,
            transformOrigin: 214.988,
          }}
          id="el64si1hxnwtn"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M113.91 443l5.07-7.94c24.14 26.52 103.9 58.06 175.31-13.23 30.67-30.62 28.19-82.36 28.19-82.36l-6.1-19.16h6.1s17.68 32.61-.83 75.31c0 0-19 50.61-77.17 69C152.72 493.6 113.91 443 113.91 443z"
          style={{
            WebkitTransformOrigin: 222.004,
            msTransformOrigin: 222.004,
            transformOrigin: 222.004,
          }}
          id="elo0urbtj7xw"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <g
          style={{
            WebkitTransformOrigin: 222.004,
            msTransformOrigin: 222.004,
            transformOrigin: 222.004,
          }}
          id="el9jklymcyul"
          className="animable"
          opacity="0.7"
        >
          <path
            d="M113.91 443l5.07-7.94c24.14 26.52 103.9 58.06 175.31-13.23 30.67-30.62 28.19-82.36 28.19-82.36l-6.1-19.16h6.1s17.68 32.61-.83 75.31c0 0-19 50.61-77.17 69C152.72 493.6 113.91 443 113.91 443z"
            style={{
              WebkitTransformOrigin: 222.004,
              msTransformOrigin: 222.004,
              transformOrigin: 222.004,
            }}
            id="elyuzk2pn057g"
            fill="#FFF"
            className="animable"
          ></path>
        </g>
        <circle
          cx="81.89"
          cy="422.05"
          r="43.35"
          style={{
            WebkitTransformOrigin: 81.89,
            msTransformOrigin: 81.89,
            transformOrigin: 81.89,
          }}
          id="elg79lbz4fnwb"
          fill="#7BC0CD"
          className="animable"
          transform="rotate(-45)"
        ></circle>
        <g
          style={{
            WebkitTransformOrigin: 81.89,
            msTransformOrigin: 81.89,
            transformOrigin: 81.89,
          }}
          id="elbugzqzckv85"
          className="animable"
          opacity="0.7"
        >
          <circle
            cx="81.89"
            cy="422.05"
            r="43.35"
            style={{
              WebkitTransformOrigin: 81.89,
              msTransformOrigin: 81.89,
              transformOrigin: 81.89,
            }}
            id="ell3g4g0i0vjl"
            fill="#FFF"
            className="animable"
            transform="rotate(-45)"
          ></circle>
        </g>
        <path
          d="M92.28 379.91a4.29 4.29 0 01-.15.82c-.12.58-.3 1.36-.51 2.35-.12.51-.25 1.08-.39 1.69s-.36 1.27-.56 2c-.43 1.42-.84 3.06-1.5 4.81l-1 2.76c-.34 1-.77 1.93-1.18 2.95-.78 2.05-1.82 4.16-2.87 6.39a111.75 111.75 0 01-8.22 13.79 111.83 111.83 0 01-10.29 12.33c-1.77 1.73-3.41 3.4-5.09 4.82-.82.72-1.6 1.45-2.39 2.09l-2.29 1.83c-1.43 1.2-2.84 2.13-4 3-.61.43-1.16.84-1.69 1.19l-1.47.93-2 1.26a3.93 3.93 0 01-.73.41 6.58 6.58 0 01.67-.5l2-1.34 1.44-1c.52-.37 1.06-.79 1.66-1.22 1.18-.89 2.57-1.85 4-3.06l2.26-1.84c.79-.65 1.55-1.38 2.36-2.11 1.66-1.43 3.29-3.11 5-4.84a115 115 0 0010.16-12.26 114.84 114.84 0 008.22-13.7c1.06-2.22 2.1-4.31 2.9-6.34.42-1 .86-2 1.21-2.93s.68-1.87 1-2.74c.68-1.74 1.12-3.37 1.57-4.77.21-.71.43-1.37.6-2s.3-1.17.43-1.68c.26-1 .46-1.75.61-2.32a4.79 4.79 0 01.24-.77z"
          style={{
            WebkitTransformOrigin: 69.115,
            msTransformOrigin: 69.115,
            transformOrigin: 69.115,
          }}
          id="elqhssp0w9q2o"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M102.53 384.33a5 5 0 01-.17.87c-.14.61-.33 1.43-.58 2.47-.13.54-.28 1.14-.44 1.79s-.39 1.34-.62 2.09c-.47 1.49-.92 3.23-1.65 5.06L98 399.52c-.37 1-.86 2-1.31 3.1-.87 2.15-2 4.36-3.17 6.69a109.87 109.87 0 01-9.1 14.34 112.16 112.16 0 01-11.33 12.63c-1.92 1.77-3.74 3.47-5.56 4.91-.9.73-1.74 1.48-2.61 2.11l-2.49 1.85c-1.55 1.21-3.08 2.15-4.38 3s-2.45 1.58-3.4 2.13l-2.2 1.28a6.29 6.29 0 01-.78.42 5.85 5.85 0 01.73-.51l2.14-1.36c.94-.58 2.08-1.29 3.35-2.2s2.79-1.86 4.33-3.08l2.45-1.83c.86-.64 1.69-1.4 2.58-2.13 1.81-1.45 3.6-3.15 5.51-4.92A117.36 117.36 0 0084 423.33a112.4 112.4 0 009.08-14.24c1.18-2.32 2.32-4.51 3.21-6.65.45-1.06 1-2.06 1.32-3.07s.75-2 1.1-2.88c.75-1.83 1.22-3.54 1.72-5 .24-.75.49-1.44.67-2.08s.33-1.23.47-1.77c.29-1 .51-1.84.68-2.44a7.62 7.62 0 01.28-.87z"
          style={{
            WebkitTransformOrigin: 77.1,
            msTransformOrigin: 77.1,
            transformOrigin: 77.1,
          }}
          id="elhs4cqy9bnul"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M112 392.12a5.57 5.57 0 01-.22.86c-.18.61-.43 1.42-.74 2.46-.16.53-.35 1.12-.54 1.76s-.48 1.33-.75 2.08c-.56 1.47-1.13 3.18-2 5l-1.23 2.87c-.43 1-.95 2-1.46 3.06-1 2.12-2.22 4.3-3.48 6.61A125.67 125.67 0 0192.07 431a124 124 0 01-11.6 12.59c-2 1.77-3.78 3.47-5.63 4.92-.91.73-1.76 1.47-2.64 2.12l-2.51 1.86c-1.58 1.21-3.11 2.16-4.42 3-.66.43-1.27.85-1.85 1.2l-1.59.94-2.22 1.28a6.74 6.74 0 01-.79.42 5.61 5.61 0 01.74-.51l2.16-1.36 1.57-1c.57-.36 1.17-.79 1.82-1.23 1.29-.91 2.8-1.87 4.36-3.1.8-.6 1.63-1.22 2.49-1.88s1.7-1.4 2.61-2.14c1.82-1.45 3.64-3.16 5.57-4.92a129.09 129.09 0 0011.52-12.57 128.56 128.56 0 009.58-14.09c1.27-2.3 2.52-4.45 3.52-6.56.51-1 1-2 1.48-3s.85-1.95 1.25-2.85c.84-1.8 1.43-3.5 2-5 .29-.73.56-1.41.79-2.05s.41-1.22.59-1.75c.35-1 .63-1.82.83-2.42a6 6 0 01.3-.78z"
          style={{
            WebkitTransformOrigin: 85.41,
            msTransformOrigin: 85.41,
            transformOrigin: 85.41,
          }}
          id="eluq73s1ysi3t"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M123.37 433.25a4 4 0 01-1-.4c-.6-.28-1.47-.72-2.53-1.27-2.12-1.1-5-2.7-8.15-4.58s-5.89-3.69-7.86-5.05c-1-.68-1.77-1.24-2.31-1.65a4.31 4.31 0 01-.8-.66 4 4 0 01.92.5l2.39 1.5c2 1.28 4.81 3 7.93 4.91s6 3.53 8.06 4.71l2.45 1.41a3.67 3.67 0 01.9.58z"
          style={{
            WebkitTransformOrigin: 112.045,
            msTransformOrigin: 112.045,
            transformOrigin: 112.045,
          }}
          id="elwptjpoxywps"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M125.2 423.87a25.66 25.66 0 01-2.9-1.9c-1.77-1.21-4.23-2.85-7-4.55s-5.38-3.12-7.26-4.16a24.49 24.49 0 01-3-1.76 3.3 3.3 0 01.88.34c.55.24 1.33.61 2.29 1.09 1.92 1 4.55 2.35 7.36 4.05s5.24 3.4 7 4.69c.86.65 1.55 1.18 2 1.57s.66.61.63.63z"
          style={{
            WebkitTransformOrigin: 115.121,
            msTransformOrigin: 115.121,
            transformOrigin: 115.121,
          }}
          id="elk7wvk5jj4vb"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M98.49 461.2c-.15 0-.49-7.94-.76-17.75s-.38-17.77-.24-17.77.48 7.94.76 17.75.38 17.77.24 17.77z"
          style={{
            WebkitTransformOrigin: 97.9909,
            msTransformOrigin: 97.9909,
            transformOrigin: 97.9909,
          }}
          id="elapmubrf2fgl"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M77.12 466.17a93 93 0 01-.26-9.93 92.88 92.88 0 01.26-9.93 96.15 96.15 0 01.26 9.93 96.31 96.31 0 01-.26 9.93z"
          style={{
            WebkitTransformOrigin: 77.1183,
            msTransformOrigin: 77.1183,
            transformOrigin: 77.1183,
          }}
          id="elzaan9se2qc"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M87.62 465c-.14 0-.22-6.5-.16-14.51s.21-14.52.36-14.52.21 6.5.16 14.52-.22 14.51-.36 14.51z"
          style={{
            WebkitTransformOrigin: 87.7186,
            msTransformOrigin: 87.7186,
            transformOrigin: 87.7186,
          }}
          id="el1naim7o053"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M65.46 429.79c-.08.12-5.74-3.53-12.63-8.16S40.4 413.15 40.48 413s5.74 3.53 12.64 8.16 12.42 8.51 12.34 8.63z"
          style={{
            WebkitTransformOrigin: 52.97,
            msTransformOrigin: 52.97,
            transformOrigin: 52.97,
          }}
          id="elwr44d5ahow"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M57.91 436a2.78 2.78 0 01-.86-.28c-.53-.21-1.3-.55-2.23-1a73 73 0 01-7-3.91c-2.66-1.68-5-3.35-6.62-4.59a18.4 18.4 0 01-2.57-2.12 24.24 24.24 0 012.79 1.82c1.69 1.17 4 2.78 6.68 4.45s5.12 3.05 6.93 4a28.14 28.14 0 012.88 1.63z"
          style={{
            WebkitTransformOrigin: 48.27,
            msTransformOrigin: 48.27,
            transformOrigin: 48.27,
          }}
          id="el9odr65gl999"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M83.93 403.6a9.59 9.59 0 01-1.52.58 18.05 18.05 0 01-1.84.57c-.72.2-1.54.43-2.46.62a54.41 54.41 0 01-6.54 1 70.09 70.09 0 01-8.1.25 71.56 71.56 0 01-8.07-.75 57.93 57.93 0 01-6.47-1.38c-.91-.23-1.72-.49-2.43-.72s-1.33-.44-1.81-.64a9.47 9.47 0 01-1.51-.64 10 10 0 011.57.45c.5.17 1.11.36 1.83.55s1.53.44 2.44.65c1.82.47 4 .87 6.45 1.26a79.09 79.09 0 008 .7 77 77 0 008-.21A60.63 60.63 0 0078 405c.93-.16 1.75-.37 2.47-.54s1.35-.33 1.85-.48a8.4 8.4 0 011.61-.38z"
          style={{
            WebkitTransformOrigin: 63.555,
            msTransformOrigin: 63.555,
            transformOrigin: 63.555,
          }}
          id="el328ja5hhu6r"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M88.72 392.38a10.06 10.06 0 01-1.47.68c-.48.22-1.08.44-1.78.69s-1.5.54-2.39.8a59.7 59.7 0 01-6.39 1.58 71.49 71.49 0 01-8 1 68 68 0 01-8.06 0 49.21 49.21 0 01-6.52-.86c-.93-.16-1.75-.38-2.47-.57a18 18 0 01-1.82-.55 10.15 10.15 0 01-1.52-.58 8.4 8.4 0 011.58.39c.49.15 1.11.3 1.83.45s1.54.36 2.46.5a56.88 56.88 0 006.49.74 74.2 74.2 0 008-.07 79.76 79.76 0 007.94-1c2.41-.47 4.58-.94 6.36-1.46.9-.24 1.7-.5 2.41-.73s1.31-.41 1.8-.6a8.62 8.62 0 011.55-.41z"
          style={{
            WebkitTransformOrigin: 68.51,
            msTransformOrigin: 68.51,
            transformOrigin: 68.51,
          }}
          id="elt558w11x4u"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M91.68 382.5a6.22 6.22 0 01-1.32.55c-.86.33-2.13.76-3.7 1.24a83.39 83.39 0 01-12.57 2.83 73 73 0 01-12.87.73c-1.65-.07-3-.17-3.9-.28a7.41 7.41 0 01-1.42-.22 8 8 0 011.44 0c.91.05 2.24.09 3.89.11a85.49 85.49 0 0012.77-.85 102.8 102.8 0 0012.55-2.67c1.58-.44 2.86-.81 3.74-1.08a8.56 8.56 0 011.39-.36z"
          style={{
            WebkitTransformOrigin: 73.79,
            msTransformOrigin: 73.79,
            transformOrigin: 73.79,
          }}
          id="el77ut7ysb2nm"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M109.2 425.15a69.82 69.82 0 01-5.55 6.45 70.78 70.78 0 01-5.93 6.11 70.65 70.65 0 015.55-6.46 69.7 69.7 0 015.93-6.1z"
          style={{
            WebkitTransformOrigin: 103.46,
            msTransformOrigin: 103.46,
            transformOrigin: 103.46,
          }}
          id="el1t4gs54qdyq"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M117.52 430.07a3.25 3.25 0 01-.45.84c-.32.53-.82 1.26-1.47 2.15a40.33 40.33 0 01-12.79 11.26c-1 .53-1.75.93-2.31 1.18a3.42 3.42 0 01-.89.34c0-.07 1.16-.7 3-1.84a51.5 51.5 0 006.84-5 50.82 50.82 0 005.84-6.15c1.39-1.72 2.16-2.85 2.23-2.78z"
          style={{
            WebkitTransformOrigin: 108.565,
            msTransformOrigin: 108.565,
            transformOrigin: 108.565,
          }}
          id="elhzj9dcax81a"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M120.05 434.51a14.14 14.14 0 01-5.61 10 38.22 38.22 0 003.42-4.67 39.12 39.12 0 002.19-5.33z"
          style={{
            WebkitTransformOrigin: 117.245,
            msTransformOrigin: 117.245,
            transformOrigin: 117.245,
          }}
          id="elgcp1bh29heb"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M128.44 443.7a9 9 0 01-2.13 4.33 8.87 8.87 0 01-3.78 3 37.45 37.45 0 003.38-3.33 40.83 40.83 0 002.53-4z"
          style={{
            WebkitTransformOrigin: 125.485,
            msTransformOrigin: 125.485,
            transformOrigin: 125.485,
          }}
          id="ell4dl6s7h89a"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M142 452a9 9 0 01-1.3 4.91 8.78 8.78 0 01-3.43 3.74 27.8 27.8 0 003-4A28.25 28.25 0 00142 452z"
          style={{
            WebkitTransformOrigin: 139.637,
            msTransformOrigin: 139.637,
            transformOrigin: 139.637,
          }}
          id="el3m7pj8l9gsl"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M157.53 459.46a7.61 7.61 0 01-.49 4.84 7.71 7.71 0 01-2.92 3.88 14.26 14.26 0 003.41-8.72z"
          style={{
            WebkitTransformOrigin: 155.92,
            msTransformOrigin: 155.92,
            transformOrigin: 155.92,
          }}
          id="elcrct7x9axv4"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M171.87 472.25c-.15-.05.45-2 .59-4.44s-.21-4.45-.06-4.48a12.21 12.21 0 01-.53 8.92z"
          style={{
            WebkitTransformOrigin: 172.424,
            msTransformOrigin: 172.424,
            transformOrigin: 172.424,
          }}
          id="elnpvfbbi3cl"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M183.62 473.11c-.14-.06.58-1.8.77-4.07s-.2-4.1 0-4.13a9.59 9.59 0 01-.73 8.2z"
          style={{
            WebkitTransformOrigin: 184.295,
            msTransformOrigin: 184.295,
            transformOrigin: 184.295,
          }}
          id="elh5vegu8r30g"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M200.06 473c-.15 0 .09-1.71-.18-3.76s-.91-3.62-.77-3.68a7 7 0 011.29 3.62 6.89 6.89 0 01-.34 3.82z"
          style={{
            WebkitTransformOrigin: 199.809,
            msTransformOrigin: 199.809,
            transformOrigin: 199.809,
          }}
          id="elgfb8o1m2ekt"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M211.42 472c-.16 0-.16-1.61-.7-3.48s-1.35-3.26-1.22-3.34a8.35 8.35 0 011.92 6.82z"
          style={{
            WebkitTransformOrigin: 210.509,
            msTransformOrigin: 210.509,
            transformOrigin: 210.509,
          }}
          id="elaldiis0h1gf"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M224.75 469.07c-.16 0-.08-1.57-.67-3.36s-1.54-3-1.41-3.12a6.79 6.79 0 012.08 6.48z"
          style={{
            WebkitTransformOrigin: 223.782,
            msTransformOrigin: 223.782,
            transformOrigin: 223.782,
          }}
          id="el1eyrc84ftld"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M241.16 465.73c-.16 0-.18-1.75-.91-3.74s-1.83-3.35-1.71-3.45a8.2 8.2 0 012.62 7.19z"
          style={{
            WebkitTransformOrigin: 239.883,
            msTransformOrigin: 239.883,
            transformOrigin: 239.883,
          }}
          id="el3fpm3ojq6h5"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M255 460.33c-.15 0-.7-1.77-1.88-3.75s-2.49-3.34-2.38-3.45a11.3 11.3 0 014.26 7.2z"
          style={{
            WebkitTransformOrigin: 252.867,
            msTransformOrigin: 252.867,
            transformOrigin: 252.867,
          }}
          id="elxaidhugpy"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M270.47 452.22c-.15 0-.62-1.88-1.88-3.9s-2.74-3.3-2.64-3.42a10.06 10.06 0 014.52 7.32z"
          style={{
            WebkitTransformOrigin: 268.208,
            msTransformOrigin: 268.208,
            transformOrigin: 268.208,
          }}
          id="elygn9aegs6qq"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M285.58 441.39a29.08 29.08 0 00-2.21-3.35 27.93 27.93 0 00-3-2.66 6.47 6.47 0 013.41 2.32 6.55 6.55 0 011.8 3.69z"
          style={{
            WebkitTransformOrigin: 282.975,
            msTransformOrigin: 282.975,
            transformOrigin: 282.975,
          }}
          id="elghc36i361d8"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M298.52 430.34c-.13.09-1.33-1.52-3.15-3.16s-3.52-2.71-3.44-2.85a10.37 10.37 0 013.79 2.46 10.48 10.48 0 012.8 3.55z"
          style={{
            WebkitTransformOrigin: 295.224,
            msTransformOrigin: 295.224,
            transformOrigin: 295.224,
          }}
          id="elmyn2jvhzoxc"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M310.11 415.93c-.13.08-1.13-1.54-2.89-3s-3.51-2.2-3.45-2.35a9.53 9.53 0 016.34 5.36z"
          style={{
            WebkitTransformOrigin: 306.939,
            msTransformOrigin: 306.939,
            transformOrigin: 306.939,
          }}
          id="el2xc5iz2zlqc"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M320.44 398.78a40.4 40.4 0 00-3.65-2.6 40.15 40.15 0 00-4.14-1.69 8.22 8.22 0 014.39 1.24 8.1 8.1 0 013.4 3.05z"
          style={{
            WebkitTransformOrigin: 316.545,
            msTransformOrigin: 316.545,
            transformOrigin: 316.545,
          }}
          id="elexkc5aml4qk"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M326.72 380.25a15.8 15.8 0 00-8.92-2.1 9.33 9.33 0 018.92 2.1z"
          style={{
            WebkitTransformOrigin: 322.26,
            msTransformOrigin: 322.26,
            transformOrigin: 322.26,
          }}
          id="elxwcuxyfm24"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M329.51 360.35c-.05.15-1.68-.42-3.77-.64s-3.8 0-3.82-.2a10.16 10.16 0 017.59.84z"
          style={{
            WebkitTransformOrigin: 325.715,
            msTransformOrigin: 325.715,
            transformOrigin: 325.715,
          }}
          id="elmeo2xmxwknr"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M328.48 340.42a16.91 16.91 0 01-2.84.12 17.94 17.94 0 01-2.83.14 7.86 7.86 0 015.67-.26z"
          style={{
            WebkitTransformOrigin: 325.645,
            msTransformOrigin: 325.645,
            transformOrigin: 325.645,
          }}
          id="elo8e0qxh4t6"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M324.4 326.73a13.08 13.08 0 00-3-.27 13.39 13.39 0 00-2.84.89c0-.05.18-.34.66-.66a4.86 4.86 0 012.12-.75 4.79 4.79 0 012.23.28c.58.21.86.45.83.51z"
          style={{
            WebkitTransformOrigin: 321.481,
            msTransformOrigin: 321.481,
            transformOrigin: 321.481,
          }}
          id="elqwdptiabxej"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <g
          style={{
            WebkitTransformOrigin: 285.971,
            msTransformOrigin: 285.971,
            transformOrigin: 285.971,
          }}
          id="elwan096v3lkk"
          className="animable"
          opacity="0.3"
        >
          <path
            id="elki2p0uq4sra"
            d="M256.58 394c4.85 9.21 16.16 13.94 26.5 12.68s19.55-7.69 26-15.89c4.75-6.06 8.27-13.91 6.31-21.35a46.87 46.87 0 01-59.39 23.3"
            className="animable"
            style={{
              WebkitTransformOrigin: 285.971,
              msTransformOrigin: 285.971,
              transformOrigin: 285.971,
            }}
          ></path>
        </g>
        <path
          d="M317.1 314.75a16.57 16.57 0 014.28-22.51c2.76-2 6.09-3.07 8.7-5.23a15.92 15.92 0 005.4-11.12 24 24 0 00-2.73-12.25l2.78-1.37.24.3a20.61 20.61 0 01-7.34 31 28.2 28.2 0 00-5.83 3.59c-3.47 3-2.05 6.41-2.05 6.41"
          style={{
            WebkitTransformOrigin: 327.207,
            msTransformOrigin: 327.207,
            transformOrigin: 327.207,
          }}
          id="elmi2vhdiqho"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <g
          style={{
            WebkitTransformOrigin: 327.207,
            msTransformOrigin: 327.207,
            transformOrigin: 327.207,
          }}
          id="el3md1saghor2"
          className="animable"
          opacity="0.7"
        >
          <path
            d="M317.1 314.75a16.57 16.57 0 014.28-22.51c2.76-2 6.09-3.07 8.7-5.23a15.92 15.92 0 005.4-11.12 24 24 0 00-2.73-12.25l2.78-1.37.24.3a20.61 20.61 0 01-7.34 31 28.2 28.2 0 00-5.83 3.59c-3.47 3-2.05 6.41-2.05 6.41"
            style={{
              WebkitTransformOrigin: 327.207,
              msTransformOrigin: 327.207,
              transformOrigin: 327.207,
            }}
            id="elkndkg5ldvck"
            fill="#FFF"
            className="animable"
          ></path>
        </g>
        <path
          d="M321 303.75a15.92 15.92 0 00-3.44-.3 15.53 15.53 0 00-3.34.93 5.66 5.66 0 016.78-.63z"
          style={{
            WebkitTransformOrigin: 317.61,
            msTransformOrigin: 317.61,
            transformOrigin: 317.61,
          }}
          id="elnoejes6y4mo"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M323.62 296.12c-.14.05-.58-.82-1.4-1.64s-1.68-1.28-1.63-1.42 1.09.13 2 1.05 1.16 1.97 1.03 2.01z"
          style={{
            WebkitTransformOrigin: 322.12,
            msTransformOrigin: 322.12,
            transformOrigin: 322.12,
          }}
          id="elkpsuw47bjx"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M333.43 290.32c-.14.05-.5-.92-1.29-1.87s-1.64-1.51-1.57-1.64 1.12.26 2 1.32 1 2.17.86 2.19z"
          style={{
            WebkitTransformOrigin: 332.023,
            msTransformOrigin: 332.023,
            transformOrigin: 332.023,
          }}
          id="elc636923k59a"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M340 277.88a13.77 13.77 0 01-2.27-.35 13.25 13.25 0 01-2.28-.25 4.87 4.87 0 014.55.6z"
          style={{
            WebkitTransformOrigin: 337.725,
            msTransformOrigin: 337.725,
            transformOrigin: 337.725,
          }}
          id="eldfowcgvbxn"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M337.77 265.86c0 .15-.85.1-1.78.38s-1.62.73-1.72.62.5-.82 1.57-1.12 1.97-.01 1.93.12z"
          style={{
            WebkitTransformOrigin: 336.015,
            msTransformOrigin: 336.015,
            transformOrigin: 336.015,
          }}
          id="elv0xs0zercyi"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M245.21 339.89c3.54-2.3 8.23-1.54 12.25-.21s8.05 3.17 12.26 2.77c4.59-.43 8.52-3.49 11.55-6.95a39.87 39.87 0 008.17-14.75c1.66-5.54 2.51-12.05 7.28-15.33s11.39-1.63 15.49 2.25 6.08 9.48 7.38 15c3 12.72 3.05 26.29-1.07 38.7s-12.59 23.53-24.09 29.75-26 7.11-37.7 1.29"
          style={{
            WebkitTransformOrigin: 283.474,
            msTransformOrigin: 283.474,
            transformOrigin: 283.474,
          }}
          id="elgn22ng32m4r"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M256.73 392.38a5.32 5.32 0 01.54.22l1.56.68c.7.27 1.57.59 2.6 1s2.25.69 3.64 1a41.53 41.53 0 0010.26.91 43.08 43.08 0 006.4-.74 40.54 40.54 0 006.95-1.92A44.63 44.63 0 00302.8 385a52.79 52.79 0 0011.69-14.87 59.17 59.17 0 006.34-19.91 74 74 0 00-.48-22.48 63.21 63.21 0 00-2.81-11.07 22.37 22.37 0 00-5.94-9.17 14 14 0 00-9.71-3.5 9.83 9.83 0 00-4.81 1.5 10.83 10.83 0 00-3.4 3.6c-1.72 2.84-2.46 6.08-3.3 9.14a43.34 43.34 0 01-3.16 8.74 39.42 39.42 0 01-4.67 7.32 28.27 28.27 0 01-5.76 5.57 14.93 14.93 0 01-6.73 2.73 16.53 16.53 0 01-6.45-.69c-3.89-1.15-7.07-2.63-9.88-3.08a13.37 13.37 0 00-6.44.16 9.28 9.28 0 00-1.56.65c-.34.19-.52.27-.52.27l.49-.31a8.39 8.39 0 011.55-.71 13.21 13.21 0 016.52-.26c2.84.43 6.06 1.89 9.92 3a16.24 16.24 0 006.33.64 14.58 14.58 0 006.56-2.7 27.81 27.81 0 005.66-5.52 39.83 39.83 0 004.59-7.26 42.77 42.77 0 003.11-8.67c.83-3.05 1.56-6.33 3.33-9.27a11.19 11.19 0 013.55-3.76 10.16 10.16 0 015-1.59 13.51 13.51 0 015.33.83 15 15 0 014.75 2.78 22.91 22.91 0 016.08 9.37 63.38 63.38 0 012.84 11.18 73.68 73.68 0 01.47 22.63 59.41 59.41 0 01-6.42 20.07 53 53 0 01-11.83 15 44.86 44.86 0 01-14.27 8.5 41.36 41.36 0 01-7 1.9 43.58 43.58 0 01-6.45.7 41.1 41.1 0 01-10.32-1c-1.39-.3-2.59-.7-3.64-1s-1.9-.71-2.59-1l-1.54-.73c-.33-.25-.5-.35-.5-.35z"
          style={{
            WebkitTransformOrigin: 283.577,
            msTransformOrigin: 283.577,
            transformOrigin: 283.577,
          }}
          id="elnl8qz0z1bq"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M299.77 317.15a4.42 4.42 0 01-1.2-1.56 9.5 9.5 0 01-1.1-4.64 9.65 9.65 0 011.23-4.6 4.21 4.21 0 011.25-1.53c.07.06-.41.64-.92 1.7a10.67 10.67 0 00-.13 8.91c.49 1.07.95 1.67.87 1.72z"
          style={{
            WebkitTransformOrigin: 298.712,
            msTransformOrigin: 298.712,
            transformOrigin: 298.712,
          }}
          id="eltb8jvec96vf"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M305.84 316.27a5 5 0 01-1.06-1.64 12.78 12.78 0 01-1.16-4.6 12.55 12.55 0 01.6-4.7 4.88 4.88 0 01.85-1.76 16 16 0 00.77 12.7z"
          style={{
            WebkitTransformOrigin: 304.718,
            msTransformOrigin: 304.718,
            transformOrigin: 304.718,
          }}
          id="el2e5skqf0dv4"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M310.7 318a10.32 10.32 0 01-.76-4.8 10.5 10.5 0 011-4.76c.15.05-.42 2.13-.48 4.77s.39 4.79.24 4.79z"
          style={{
            WebkitTransformOrigin: 310.436,
            msTransformOrigin: 310.436,
            transformOrigin: 310.436,
          }}
          id="ellrhuci5yqyi"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M394.19 330.5c-9.15 5.58-21.32 4.52-30.8-.49s-16.66-13.4-22.65-22.2c-1.7-2.5-3.42-5.15-6.06-6.66-5.19-3-12.36-.1-15.34 5s-2.42 11.64-.12 17.1c0 0 6.1 29.56 37.9 47.94"
          style={{
            WebkitTransformOrigin: 355.743,
            msTransformOrigin: 355.743,
            transformOrigin: 355.743,
          }}
          id="elmz1zrflq48h"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M357.12 371.22a1 1 0 01-.27-.14l-.78-.46c-.7-.43-1.69-1.05-3-1.83-.63-.42-1.39-.82-2.14-1.38l-2.45-1.79c-.87-.67-1.87-1.3-2.81-2.13l-3-2.57A83.34 83.34 0 01329.56 346a76.25 76.25 0 01-6-10.38 63.9 63.9 0 01-4.56-12.29v.05a23 23 0 01-1.85-11.07 15.89 15.89 0 011.66-5.67 12.92 12.92 0 0112.43-6.86 9.69 9.69 0 014.11 1.48 13.83 13.83 0 013.12 2.93c.89 1.1 1.67 2.26 2.43 3.39s1.55 2.24 2.33 3.32c1.58 2.17 3.2 4.24 4.87 6.17a59.87 59.87 0 0010.63 9.82A39.25 39.25 0 00370 332.5a32.18 32.18 0 0018 .56 13.22 13.22 0 001.46-.45c.45-.16.88-.29 1.26-.45.76-.34 1.42-.6 1.92-.86l1.15-.61a2.61 2.61 0 01.4-.19 2.67 2.67 0 01-.37.24l-1.13.65c-.5.28-1.15.55-1.91.91-.39.17-.81.31-1.26.48a12.68 12.68 0 01-1.47.48 32 32 0 01-18.19-.41 39.21 39.21 0 01-11.39-5.61 60 60 0 01-10.74-9.86c-1.69-1.94-3.32-4-4.91-6.18-.79-1.09-1.57-2.21-2.34-3.34s-1.54-2.28-2.41-3.35a13.67 13.67 0 00-3-2.82 9.1 9.1 0 00-3.89-1.39 11.89 11.89 0 00-8.08 2.23 13.34 13.34 0 00-5.44 9.83 22.63 22.63 0 001.8 10.82v.05a63.64 63.64 0 004.5 12.21 76.75 76.75 0 006 10.34 83.37 83.37 0 0013 14.9l3 2.59c.93.84 1.92 1.47 2.77 2.15l2.43 1.82c.74.57 1.49 1 2.12 1.4l2.93 1.9.75.5a1.35 1.35 0 01.16.18z"
          style={{
            WebkitTransformOrigin: 355.632,
            msTransformOrigin: 355.632,
            transformOrigin: 355.632,
          }}
          id="elobvw0u6agaf"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M327.82 317.89a29.51 29.51 0 00-3.17-6.87c-2.34-3.5-5.32-5.34-5.2-5.48a6.93 6.93 0 011.91 1.19 17.91 17.91 0 016.06 8.93 6.57 6.57 0 01.4 2.23z"
          style={{
            WebkitTransformOrigin: 323.633,
            msTransformOrigin: 323.633,
            transformOrigin: 323.633,
          }}
          id="elzeduzvz3n7f"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M334 313.88a29.24 29.24 0 00-2.16-7.36 29.67 29.67 0 00-4.43-6.26 7.31 7.31 0 011.75 1.48 18 18 0 013.15 4.56 18.36 18.36 0 011.62 5.29 6.7 6.7 0 01.07 2.29z"
          style={{
            WebkitTransformOrigin: 330.738,
            msTransformOrigin: 330.738,
            transformOrigin: 330.738,
          }}
          id="elhb67qt9976d"
          fill="#263238"
          className="animable"
        ></path>
        <g
          style={{
            WebkitTransformOrigin: 295.476,
            msTransformOrigin: 295.476,
            transformOrigin: 295.476,
          }}
          id="el5cug7v62dq8"
          className="animable"
          opacity="0.3"
        >
          <path
            d="M313.33 372.57c2.49-3.81-7.77-4.71-12.29-4.18a26.87 26.87 0 00-23.8 27.09s19.76 2.11 36.09-22.91z"
            style={{
              WebkitTransformOrigin: 295.476,
              msTransformOrigin: 295.476,
              transformOrigin: 295.476,
            }}
            id="elraowcow16c"
            fill="#FFF"
            className="animable"
          ></path>
        </g>
        <g
          style={{
            WebkitTransformOrigin: 343.462,
            msTransformOrigin: 343.462,
            transformOrigin: 343.462,
          }}
          id="elglgh8gmt8wa"
          className="animable"
          opacity="0.3"
        >
          <path
            id="eluwfsdbuf20d"
            d="M330.18 355.56a42.57 42.57 0 0021.9 17 5.67 5.67 0 003 .42 2.18 2.18 0 001.86-2.07 77.16 77.16 0 01-26.74-24.11 15.13 15.13 0 001.26 9.06"
            className="animable"
            style={{
              WebkitTransformOrigin: 343.462,
              msTransformOrigin: 343.462,
              transformOrigin: 343.462,
            }}
          ></path>
        </g>
        <circle
          cx="300.48"
          cy="272.13"
          r="22.55"
          style={{
            WebkitTransformOrigin: 300.48,
            msTransformOrigin: 300.48,
            transformOrigin: 300.48,
          }}
          id="el83b5qch45jm"
          fill="#F5F5F5"
          className="animable"
          transform="rotate(-45)"
        ></circle>
        <path
          d="M323 273.08c0 10.89-5.72 20-12.09 20s-11.54-8.83-11.54-19.71 5.17-19.71 11.54-19.71S323 262.2 323 273.08z"
          style={{
            WebkitTransformOrigin: 311.185,
            msTransformOrigin: 311.185,
            transformOrigin: 311.185,
          }}
          id="elaxp6ti2p2g"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M305.3 282.43a3 3 0 01-.46-.74 16.62 16.62 0 01-.93-2.19 21.86 21.86 0 01.41-15.42 14.89 14.89 0 011.06-2.13 2.94 2.94 0 01.49-.72c.08 0-.52 1.12-1.2 3a24.39 24.39 0 00-1.44 7.56 24.68 24.68 0 001 7.62c.61 1.87 1.16 2.98 1.07 3.02z"
          style={{
            WebkitTransformOrigin: 304.29,
            msTransformOrigin: 304.29,
            transformOrigin: 304.29,
          }}
          id="elyw274o52myh"
          fill="#FFF"
          className="animable"
        ></path>
        <circle
          cx="313.79"
          cy="260.73"
          r="3.86"
          style={{
            WebkitTransformOrigin: 313.79,
            msTransformOrigin: 313.79,
            transformOrigin: 313.79,
          }}
          id="eluyrhkbbhzyf"
          fill="#FFF"
          className="animable"
        ></circle>
        <path
          d="M315.08 244.3c-.43.59-1.52.58-2.89.36s-3.09-.62-4.95-.92-3.54-.48-4.89-.67-2.39-.46-2.66-1.14.38-1.65 1.9-2.46a9.19 9.19 0 012.85-.91 11.86 11.86 0 013.66 0 11 11 0 015.84 2.82c1.2 1.24 1.55 2.35 1.14 2.92z"
          style={{
            WebkitTransformOrigin: 307.437,
            msTransformOrigin: 307.437,
            transformOrigin: 307.437,
          }}
          id="el6c39ew2j51i"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M304.86 300.29a16.42 16.42 0 0127.12-18"
          style={{
            WebkitTransformOrigin: 317.592,
            msTransformOrigin: 317.592,
            transformOrigin: 317.592,
          }}
          id="eljxwevfd4w1"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M332 282.29s-.48-.45-1.37-1.22a16.24 16.24 0 00-4.24-2.6 17.52 17.52 0 00-7.19-1.38 15.22 15.22 0 00-14.2 9.39 17.56 17.56 0 00-1.52 7.16 16.43 16.43 0 00.75 4.91c.36 1.12.64 1.72.59 1.74a1.93 1.93 0 01-.23-.41 10.8 10.8 0 01-.55-1.26 15 15 0 01-.92-5 17.21 17.21 0 011.44-7.36 15.51 15.51 0 0114.58-9.68 17.4 17.4 0 017.34 1.53 15.07 15.07 0 014.22 2.78 9.83 9.83 0 01.95 1 2.13 2.13 0 01.35.4z"
          style={{
            WebkitTransformOrigin: 317.557,
            msTransformOrigin: 317.557,
            transformOrigin: 317.557,
          }}
          id="el55wjuf1ltpv"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M260.08 214.9a1.66 1.66 0 01-.51.17l-1.49.4c-.65.16-1.44.39-2.35.67l-1.45.43-1.62.55a86.59 86.59 0 00-16.82 8 136.46 136.46 0 00-15.2 10.88c-1.85 1.52-3.34 2.76-4.35 3.64l-1.19 1c-.27.23-.42.34-.44.32a2.45 2.45 0 01.37-.39l1.12-1.07c1-.92 2.43-2.2 4.25-3.77a121.82 121.82 0 0115.17-11 79.32 79.32 0 0117-7.94l1.63-.53 1.48-.39c.92-.26 1.71-.46 2.37-.59l1.52-.3a2.14 2.14 0 01.51-.08z"
          style={{
            WebkitTransformOrigin: 237.37,
            msTransformOrigin: 237.37,
            transformOrigin: 237.37,
          }}
          id="elhav60wf96qu"
          fill="#263238"
          className="animable"
        ></path>
      </g>
      <g
        id="freepik--404-error--inject-5"
        className="animable"
        style={{
          WebkitTransformOrigin: 255.035,
          msTransformOrigin: 255.035,
          transformOrigin: 255.035,
        }}
      >
        <path
          d="M115.06 92.78a5.68 5.68 0 01-.41-1.17c-.12-.38-.25-.86-.37-1.41s-.28-1.2-.38-1.9a34.61 34.61 0 01-.46-5 38.38 38.38 0 01.42-6.15 39.62 39.62 0 011.47-6 34.42 34.42 0 012-4.63c.31-.65.66-1.2.94-1.7s.55-.9.78-1.23a5.82 5.82 0 01.75-1c.08.05-.91 1.52-2.14 4.08a39.27 39.27 0 00-1.84 4.62 43.37 43.37 0 00-1.42 5.93 42.7 42.7 0 00-.45 6.07 38.92 38.92 0 00.35 5c.36 2.77.86 4.47.76 4.49z"
          style={{
            WebkitTransformOrigin: 116.621,
            msTransformOrigin: 116.621,
            transformOrigin: 116.621,
          }}
          id="el7g9ht92ro2k"
          fill="#263238"
          className="animable"
        ></path>
        <path
          style={{
            WebkitTransformOrigin: 254.17,
            msTransformOrigin: 254.17,
            transformOrigin: 254.17,
          }}
          id="eljqg7frpbs4a"
          fill="#FFF"
          d="M143.89 50.7H364.45V174.76H143.89z"
          className="animable"
          transform="rotate(-10.54)"
        ></path>
        <path
          d="M373.94 153.54s-.16-.74-.43-2.18-.68-3.58-1.21-6.37c-1.05-5.58-2.6-13.81-4.58-24.37-4-21.11-9.66-51.57-16.68-89l.24.16-216.82 40.39.21-.31c8 43.14 15.69 84.4 22.68 122l-.29-.2 156-28.91 44.81-8.27 11.94-2.19 3.08-.56 1.06-.18-1 .21-3.05.58-11.9 2.23-44.74 8.43-156.12 29.13-.24.05v-.24c-7-37.58-14.68-78.83-22.72-122v-.26h.25L351.2 31.37h.2v.19l16.48 89.18c1.94 10.55 3.45 18.76 4.48 24.34l1.16 6.34c.3 1.4.42 2.12.42 2.12z"
          style={{
            WebkitTransformOrigin: 254.065,
            msTransformOrigin: 254.065,
            transformOrigin: 254.065,
          }}
          id="el7vbig5dgd2f"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M227.67 118.66L221 119.9l1.6 8.57-12.34 2.3-1.6-8.57-23.66 4.4-1.54-8.25 14.88-31.67 13.11-2.44-13.36 29.54 9.08-1.69-1.42-7.61 12-2.22 1.42 7.6 6.64-1.23z"
          style={{
            WebkitTransformOrigin: 205.565,
            msTransformOrigin: 205.565,
            transformOrigin: 205.565,
          }}
          id="el08em162ywa2x"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M227.66 104.38c-2.75-14.77 4-24.82 15.43-26.95s21.27 4.84 24 19.61-4 24.82-15.36 26.93-21.32-4.82-24.07-19.59zm26.73-5C252.64 90 249 87 245 87.79s-6.38 4.82-4.63 14.22 5.34 12.37 9.43 11.61 6.34-4.82 4.59-14.22z"
          style={{
            WebkitTransformOrigin: 247.372,
            msTransformOrigin: 247.372,
            transformOrigin: 247.372,
          }}
          id="el4q1xl9sy6p"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M316.23 102.18l-6.65 1.24 1.59 8.57-12.33 2.3-1.6-8.57-23.66 4.4-1.53-8.25 14.88-31.67L300 67.76 286.68 97.3l9.08-1.69-1.42-7.61 12-2.22 1.41 7.6 6.65-1.23z"
          style={{
            WebkitTransformOrigin: 294.14,
            msTransformOrigin: 294.14,
            transformOrigin: 294.14,
          }}
          id="elkeooul03hh"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M232.08 154.75l.41 2.18-12.74 2.37-3.27-17.56 12.39-2.3.4 2.18-9.88 1.84 1 5.39 8.81-1.64.4 2.14-8.81 1.65 1.06 5.66z"
          style={{
            WebkitTransformOrigin: 224.485,
            msTransformOrigin: 224.485,
            transformOrigin: 224.485,
          }}
          id="elerojqsvcnlg"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M248.28 154l-4.79-4.69c-.34.09-.71.19-1.09.26l-4.34.81 1 5.34-2.5.47-3.27-17.56 6.85-1.28c4.56-.85 7.75.95 8.46 4.76a5.64 5.64 0 01-2.83 6.26l5.26 5.12zm-2.2-11.42c-.47-2.51-2.41-3.63-5.62-3l-4.27.79 1.47 7.9 4.27-.79c3.21-.64 4.62-2.4 4.15-4.91z"
          style={{
            WebkitTransformOrigin: 242.16,
            msTransformOrigin: 242.16,
            transformOrigin: 242.16,
          }}
          id="eln2lbrt24an"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M266.51 150.6l-4.79-4.69c-.34.09-.71.19-1.09.26l-4.34.8 1 5.35-2.5.46-3.27-17.55 6.85-1.28c4.56-.85 7.75 1 8.46 4.76A5.64 5.64 0 01264 145l5.26 5.12zm-2.2-11.42c-.47-2.51-2.41-3.63-5.62-3l-4.27.79 1.47 7.9 4.27-.79c3.21-.63 4.62-2.4 4.15-4.9z"
          style={{
            WebkitTransformOrigin: 260.39,
            msTransformOrigin: 260.39,
            transformOrigin: 260.39,
          }}
          id="elba48ygbzeac"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M269.94 140.88c-.95-5.14 2.29-9.72 7.69-10.72s10 2.08 11 7.25-2.29 9.71-7.63 10.71-10.1-2.12-11.06-7.24zm16.16-3a6.94 6.94 0 10-5.55 8 6.71 6.71 0 005.55-8.01z"
          style={{
            WebkitTransformOrigin: 279.292,
            msTransformOrigin: 279.292,
            transformOrigin: 279.292,
          }}
          id="elielemjiyim"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M305.81 143.29L301 138.6c-.35.09-.72.18-1.1.25l-4.34.81 1 5.34-2.51.47-3.27-17.56 6.85-1.27c4.57-.85 7.75.94 8.46 4.76a5.62 5.62 0 01-2.83 6.26l5.26 5.12zm-2.21-11.43c-.46-2.5-2.41-3.62-5.62-3l-4.26.79 1.47 7.9 4.26-.79c3.21-.62 4.62-2.39 4.15-4.9z"
          style={{
            WebkitTransformOrigin: 299.65,
            msTransformOrigin: 299.65,
            transformOrigin: 299.65,
          }}
          id="elfn1o63et3xv"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M346.67 44.78a4.52 4.52 0 11-4.67-4.34 4.52 4.52 0 014.67 4.34z"
          style={{
            WebkitTransformOrigin: 342.153,
            msTransformOrigin: 342.153,
            transformOrigin: 342.153,
          }}
          id="el7znsuk6admr"
          fill="#E0E0E0"
          className="animable"
        ></path>
        <path
          d="M346.67 44.78c-.05 0-.06-.4-.28-1.07a4.57 4.57 0 00-1.75-2.3 4.32 4.32 0 00-6.74 3.72 4.32 4.32 0 007 3.17 4.5 4.5 0 001.56-2.43c.17-.69.15-1.09.2-1.09s0 .1.05.29a3.32 3.32 0 01-.05.84 4.47 4.47 0 01-1.53 2.67 4.69 4.69 0 01-4.43.91 4.74 4.74 0 01-.35-8.93 4.68 4.68 0 014.49.55 4.5 4.5 0 011.73 2.55 2.94 2.94 0 01.11.83c.01.19.01.29-.01.29z"
          style={{
            WebkitTransformOrigin: 342.041,
            msTransformOrigin: 342.041,
            transformOrigin: 342.041,
          }}
          id="elpe0s893ts2"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M344.15 41.64a5.08 5.08 0 01-.62 3.51 5.08 5.08 0 01-2.42 2.61 25.68 25.68 0 001.95-2.85 26.36 26.36 0 001.09-3.27z"
          style={{
            WebkitTransformOrigin: 342.673,
            msTransformOrigin: 342.673,
            transformOrigin: 342.673,
          }}
          id="elx52yn5xy3zi"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M345 46.43c-.13.08-.73-1.11-2.09-1.81a9.65 9.65 0 00-2.69-.66c0-.07.3-.21.85-.25a4.06 4.06 0 012.08.45 4 4 0 011.56 1.44c.29.47.39.81.29.83z"
          style={{
            WebkitTransformOrigin: 342.629,
            msTransformOrigin: 342.629,
            transformOrigin: 342.629,
          }}
          id="elivmt7je4whk"
          fill="#263238"
          className="animable"
        ></path>
        <path
          style={{
            WebkitTransformOrigin: 140.375,
            msTransformOrigin: 140.375,
            transformOrigin: 140.375,
          }}
          id="elxbtgwqjqwo"
          fill="#E0E0E0"
          d="M133.1 108.24H147.65V114.82H133.1z"
          className="animable"
          transform="rotate(-38.57)"
        ></path>
        <path
          d="M148.11 109.57s-.46-.5-1.2-1.38l-3-3.65h.27c-2.92 2.38-6.91 5.6-11.33 9.12v-.36l.07.09.14.17.27.33.53.67 1 1.31 2 2.5h-.35c3.28-2.59 6.13-4.79 8.18-6.37l2.42-1.84a8.42 8.42 0 01.93-.66 6.55 6.55 0 01-.76.68l-2.3 1.92c-2 1.64-4.82 4-8.16 6.66l-.19.15-.16-.19-2-2.49c-.35-.43-.7-.86-1.05-1.31l-.53-.66-.27-.34-.14-.17-.06-.08c0 .08.08-.69 0-.36 4.42-3.53 8.45-6.7 11.42-9l.15-.11.12.14c1.27 1.64 2.28 3 3 3.88a12.4 12.4 0 011 1.35z"
          style={{
            WebkitTransformOrigin: 140.265,
            msTransformOrigin: 140.265,
            transformOrigin: 140.265,
          }}
          id="el561mt5npnbe"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M130.08 120a6.07 6.07 0 008.53 1l-7.61-9.5a6.07 6.07 0 00-.92 8.5z"
          style={{
            WebkitTransformOrigin: 133.682,
            msTransformOrigin: 133.682,
            transformOrigin: 133.682,
          }}
          id="el7ryimfbaw5q"
          fill="#E0E0E0"
          className="animable"
        ></path>
        <path
          d="M130.08 120a2.24 2.24 0 01-.47-.53 5.8 5.8 0 01-.82-1.82 5.94 5.94 0 010-3.06 6.25 6.25 0 012.11-3.31l.19-.15.15.19 3.8 4.73c1.34 1.68 2.61 3.29 3.77 4.76l.15.19-.19.15a6.31 6.31 0 01-3.69 1.33 6.12 6.12 0 01-3-.7 5.76 5.76 0 01-1.58-1.21 2.28 2.28 0 01-.42-.57 9.21 9.21 0 002.13 1.52 6 6 0 006.25-.75v.34l-3.8-4.73-3.77-4.76h.33a6 6 0 00-2.12 5.94 9.57 9.57 0 00.98 2.44z"
          style={{
            WebkitTransformOrigin: 133.775,
            msTransformOrigin: 133.775,
            transformOrigin: 133.775,
          }}
          id="elt6m5hiiol"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M131.48 116.85a3.84 3.84 0 00-.63 4"
          style={{
            WebkitTransformOrigin: 131.014,
            msTransformOrigin: 131.014,
            transformOrigin: 131.014,
          }}
          id="elrpi9j6v55b"
          fill="#E0E0E0"
          className="animable"
        ></path>
        <path
          d="M130.85 120.89a2.28 2.28 0 01-.52-2.15c.19-1.3 1.07-2 1.15-1.89s-.48.85-.64 2 .16 1.97.01 2.04z"
          style={{
            WebkitTransformOrigin: 130.868,
            msTransformOrigin: 130.868,
            transformOrigin: 130.868,
          }}
          id="elz7hipjcmlco"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M138.63 117.5a22.67 22.67 0 01-2.22-2.65 22.94 22.94 0 01-2.2-2.65 7.7 7.7 0 012.6 2.32 8 8 0 011.82 2.98z"
          style={{
            WebkitTransformOrigin: 136.42,
            msTransformOrigin: 136.42,
            transformOrigin: 136.42,
          }}
          id="elfvrgf9gf4t"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M140 116.44a23.08 23.08 0 01-2.21-2.65 22.26 22.26 0 01-2.2-2.66 11.76 11.76 0 014.41 5.31z"
          style={{
            WebkitTransformOrigin: 137.795,
            msTransformOrigin: 137.795,
            transformOrigin: 137.795,
          }}
          id="elnzritbajoi"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M141.3 115.37a22.07 22.07 0 01-2.21-2.65 22.46 22.46 0 01-2.21-2.65 7.78 7.78 0 012.61 2.32 8.1 8.1 0 011.81 2.98z"
          style={{
            WebkitTransformOrigin: 139.09,
            msTransformOrigin: 139.09,
            transformOrigin: 139.09,
          }}
          id="el8d3npd7jpaf"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M142.63 114.31a23.08 23.08 0 01-2.21-2.65 23.5 23.5 0 01-2.2-2.66 8 8 0 012.6 2.32 7.85 7.85 0 011.81 2.99z"
          style={{
            WebkitTransformOrigin: 140.425,
            msTransformOrigin: 140.425,
            transformOrigin: 140.425,
          }}
          id="ely7shtl0keoa"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M144 113.24a22.07 22.07 0 01-2.21-2.65 21.75 21.75 0 01-2.2-2.65 7.91 7.91 0 012.6 2.32 8.1 8.1 0 011.81 2.98z"
          style={{
            WebkitTransformOrigin: 141.795,
            msTransformOrigin: 141.795,
            transformOrigin: 141.795,
          }}
          id="eljibr28zxjlk"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M145.3 112.18a23.08 23.08 0 01-2.21-2.65 23.5 23.5 0 01-2.2-2.66 8 8 0 012.6 2.32 7.85 7.85 0 011.81 2.99z"
          style={{
            WebkitTransformOrigin: 143.095,
            msTransformOrigin: 143.095,
            transformOrigin: 143.095,
          }}
          id="el213t5jzcl01"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M146.64 111.11a22.07 22.07 0 01-2.21-2.65 21.75 21.75 0 01-2.2-2.65 7.91 7.91 0 012.6 2.32 8.1 8.1 0 011.81 2.98z"
          style={{
            WebkitTransformOrigin: 144.435,
            msTransformOrigin: 144.435,
            transformOrigin: 144.435,
          }}
          id="el236ilobkayf"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M154.5 82c-.05 0-.06-.41-.28-1.08a4.51 4.51 0 00-1.78-2.33 4.37 4.37 0 00-6.83 3.76 4.37 4.37 0 007.11 3.21 4.52 4.52 0 001.58-2.46c.17-.69.15-1.1.2-1.1s0 .1.05.29a3.41 3.41 0 01-.05.85 4.57 4.57 0 01-1.5 2.74 4.7 4.7 0 01-4.48.91 4.8 4.8 0 01-.36-9 4.77 4.77 0 014.55.56 4.58 4.58 0 011.75 2.58 3.61 3.61 0 01.12.84q-.05.23-.08.23z"
          style={{
            WebkitTransformOrigin: 149.89,
            msTransformOrigin: 149.89,
            transformOrigin: 149.89,
          }}
          id="el2uusrh54rgv"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M124.8 93.08a6.56 6.56 0 01-.4-1.17 11.47 11.47 0 01-.37-1.42c-.12-.55-.29-1.18-.38-1.89a34.63 34.63 0 01-.47-5 35.49 35.49 0 011.9-12.15 33.87 33.87 0 012-4.64c.3-.65.65-1.2.93-1.69a14.38 14.38 0 01.78-1.23 6.27 6.27 0 01.75-1c.09.06-.91 1.52-2.13 4.09a36.28 36.28 0 00-1.85 4.62 42.17 42.17 0 00-1.41 5.92 41.39 41.39 0 00-.46 6.08 38.61 38.61 0 00.35 5c.36 2.76.86 4.45.76 4.48z"
          style={{
            WebkitTransformOrigin: 126.36,
            msTransformOrigin: 126.36,
            transformOrigin: 126.36,
          }}
          id="elyytj12vg7lp"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M388.49 137a5 5 0 01.41 1.17 13.33 13.33 0 01.37 1.41c.12.56.29 1.19.38 1.9a34.49 34.49 0 01.47 5 35.59 35.59 0 01-1.9 12.15 33.18 33.18 0 01-2 4.63c-.31.65-.65 1.2-.94 1.7a11.66 11.66 0 01-.78 1.23 5.54 5.54 0 01-.74 1c-.09-.05.91-1.52 2.13-4.08a41 41 0 001.85-4.62 42 42 0 001.41-5.93 41.36 41.36 0 00.46-6.07 40.84 40.84 0 00-.35-5c-.36-2.73-.86-4.43-.77-4.49z"
          style={{
            WebkitTransformOrigin: 386.94,
            msTransformOrigin: 386.94,
            transformOrigin: 386.94,
          }}
          id="eldkrpyikvlia"
          fill="#263238"
          className="animable"
        ></path>
        <path
          d="M395 138.76a5.27 5.27 0 01.41 1.17 13.33 13.33 0 01.37 1.41c.12.56.28 1.19.38 1.9a34.49 34.49 0 01.47 5 39.49 39.49 0 01-.42 6.15 38.43 38.43 0 01-1.48 6 33.87 33.87 0 01-2 4.64c-.31.64-.65 1.19-.94 1.69A13.54 13.54 0 01391 168a5.54 5.54 0 01-.74 1c-.09-.05.91-1.52 2.13-4.08a39.51 39.51 0 001.85-4.62 42 42 0 001.41-5.93 41.16 41.16 0 00.46-6.07 40.51 40.51 0 00-.35-5c-.36-2.82-.86-4.52-.76-4.54z"
          style={{
            WebkitTransformOrigin: 393.443,
            msTransformOrigin: 393.443,
            transformOrigin: 393.443,
          }}
          id="elfpwdzgxxls9"
          fill="#263238"
          className="animable"
        ></path>
      </g>
      <g
        id="freepik--speech-bubble--inject-5"
        className="animable"
        style={{
          WebkitTransformOrigin: 143.728,
          msTransformOrigin: 143.728,
          transformOrigin: 143.728,
        }}
      >
        <path
          d="M177.53 217.21a42.23 42.23 0 10-10.64 10l14.52 6.43z"
          style={{
            WebkitTransformOrigin: 143.724,
            msTransformOrigin: 143.724,
            transformOrigin: 143.724,
          }}
          id="el1w1w2qjkanl"
          fill="#FAFAFA"
          className="animable"
        ></path>
        <path
          d="M130.92 189.52a7.77 7.77 0 011.75-4.34 7.47 7.47 0 013.75-2.63 6 6 0 016.83 2.71 6.05 6.05 0 016.35-3.26 7.54 7.54 0 014 2.17 7.9 7.9 0 012.25 4.11 9.45 9.45 0 01-.84 5.9 13.41 13.41 0 01-4.36 4.6c-2.91 2-6.74 4.5-6.74 4.5s-3.51-2.31-6.63-3.95a13.43 13.43 0 01-4.88-4.05 9.49 9.49 0 01-1.48-5.76z"
          style={{
            WebkitTransformOrigin: 143.45,
            msTransformOrigin: 143.45,
            transformOrigin: 143.45,
          }}
          id="elxhzq55gddy9"
          fill="#7BC0CD"
          className="animable"
        ></path>
        <path
          d="M143.68 149.83a4.16 4.16 0 00-.74 0l-2.15.07c-.48 0-1 0-1.59.07l-1.9.26-2.22.32-2.48.62a39.88 39.88 0 00-12 5.24 42.43 42.43 0 00-19.48 31.88 45 45 0 00-.12 5.82c.07 1 0 2 .19 3s.3 2 .46 3a42.52 42.52 0 004 11.83 45.2 45.2 0 007.72 10.63 44.59 44.59 0 0011.13 8 40.3 40.3 0 0013.57 4.16 25.75 25.75 0 003.62.31 31.85 31.85 0 003.66.07 43.62 43.62 0 007.33-.93 42.52 42.52 0 0014.59-6.18l-.44.05 14.86 6 .88.36-.25-.92-4.32-15.94-.07.39a42.6 42.6 0 007.92-18.15 38.17 38.17 0 00.58-9.3A29.83 29.83 0 00186 186c-.11-.73-.23-1.45-.34-2.17s-.35-1.41-.52-2.11a42.45 42.45 0 00-16.57-24.16 40.84 40.84 0 00-9.87-5.21l-2.22-.79-2.11-.54-1.93-.48c-.62-.12-1.22-.18-1.78-.27-1.12-.14-2.11-.33-3-.38l-2.19-.07h-1.33a1.54 1.54 0 00-.45 0 2.62 2.62 0 00.45.06l1.33.1 2.16.15c.86.07 1.84.28 2.95.45a42.25 42.25 0 0133.79 31.34c.16.69.37 1.37.5 2.07s.21 1.42.32 2.13a28.89 28.89 0 01.39 4.39 37.7 37.7 0 01-.6 9.12 41.75 41.75 0 01-7.82 17.75l-.13.18.06.22c1.4 5.13 2.84 10.44 4.33 15.89l.63-.56-14.85-6-.23-.09-.22.13a41.88 41.88 0 01-14.26 6 42.51 42.51 0 01-7.16.91 32.86 32.86 0 01-3.58-.07 26 26 0 01-3.53-.3 39.48 39.48 0 01-13.27-4.05 43.85 43.85 0 01-10.95-7.78 44.79 44.79 0 01-7.59-10.39 42 42 0 01-4-11.57c-.15-1-.3-2-.45-2.93s-.13-2-.2-2.92a41.86 41.86 0 0119.07-37.21 40.31 40.31 0 0111.82-5.33l2.45-.65 2.2-.36 1.88-.31c.58-.07 1.11-.08 1.58-.12l2.15-.16a6.08 6.08 0 00.77-.08z"
          style={{
            WebkitTransformOrigin: 143.728,
            msTransformOrigin: 143.728,
            transformOrigin: 143.728,
          }}
          id="elj31lcmw5usb"
          fill="#263238"
          className="animable"
        ></path>
      </g>
      <defs>
        <filter id="active" height="200%">
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="2"
            result="DILATED"
          ></feMorphology>
          <feFlood
            floodColor="#32DFEC"
            floodOpacity="1"
            result="PINK"
          ></feFlood>
          <feComposite
            in="PINK"
            in2="DILATED"
            operator="in"
            result="OUTLINE"
          ></feComposite>
          <feMerge>
            <feMergeNode in="OUTLINE"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <filter id="hover" height="0%">
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="2"
            result="DILATED"
          ></feMorphology>
          <feFlood floodColor="red" floodOpacity="0.5" result="PINK"></feFlood>
          <feComposite
            in="PINK"
            in2="DILATED"
            operator="in"
            result="OUTLINE"
          ></feComposite>
          <feMerge>
            <feMergeNode in="OUTLINE"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
          <feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"></feColorMatrix>
        </filter>
      </defs>
    </svg> */}
 <div className='flex flex-col items-center text-center'>
      <img className='w-5/12' src={logo} alt="error"/>
      <p className='w-6/12'>
        존재하지 않는 주소를 입력하였거나 요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다. 궁금한 점이 있으시면 언제든 고객센터를 통해 문의해 주시기 바랍니다. 감사합니다.
      </p>
      <div className='flex flex-row justify-center space-x-10 mt-6'>
        <button type='button' className='btn-xl' onClick={goBack}>이전으로</button>
        <Link to='/'>
          <button type='button' className='btn-xl'>메인으로</button>
        </Link>
      </div>
    </div>
    </>
  );
}
