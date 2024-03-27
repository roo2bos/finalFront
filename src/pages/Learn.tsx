import { useState } from 'react';
import Preview from '../components/Preview';
import Wordquiz from '../components/Wordquiz';

export default function Learn() {
  const tabs = [
    { id: 0, menu: '퀴즈', content: <Wordquiz /> },
    { id: 1, menu: '예문', content: <Preview /> },
  ];

  const [tabMenu, setTabMenu] = useState(0);

  return (
    <section>
      <h2 className='list-title'>학습하기</h2>
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
