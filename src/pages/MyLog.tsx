import { useState } from 'react';
import Review from '../components/Review';

function Mypage() {
  const tabs = [
    { id: 0, menu: '복습하기', content: <Review /> },
    { id: 1, menu: '학습내역', content: '(임시) 예문/퀴즈 내역' },
  ];

  const [tabMenu, setTabMenu] = useState(0);

  return (
    <section>
      <h2 className='list-title'>나의활동</h2>
      <div className='tab-btn'>
        {tabs.map(({ id, menu }, i) => (
          <button
            className={`rounded-full px-5 hover:bg-[var(--hover-highlight-color)] hover:text-white ${
              tabMenu === i
                ? 'bg-[var(--highlight-color)] text-white'
                : 'bg-[var(--btn-sub-bg)]'
            }`}
            type='button'
            key={id}
            onClick={() => {
              setTabMenu(i);
            }}
          >
            {menu}
          </button>
        ))}
      </div>
      <div className='tab-content'>
        <div>{tabs[tabMenu].content}</div>
      </div>
    </section>
  );
}

export default Mypage;
