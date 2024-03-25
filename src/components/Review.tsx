import { Link } from 'react-router-dom';
import '../assets/css/review.css';
// import { useState } from 'react';
import datas from '../../datas.json';

export default function Review() {
  // 목록 정렬
  // const [sortBy, setSortBy] = useState('latest');
  const data = datas.reviewDatas;
  const uniqueDates = [...new Set(data.map((date) => date.date))];

  return (
    <section className='review'>
      <div className='container'>
        <div className='conversation-controls'>
          {/* 복습 목록 정렬 드롭 메뉴 */}
          <div className='sort-dropdown'>
            {/* select 드롭 임시 -- 수정 예정 */}
            <label htmlFor='sort-select' className='hide'>
              정렬
            </label>
            <select id='sort-select' className='border-none'>
              <option value='latest' selected>
                최신순
              </option>
              <option value='oldest'>과거순</option>
            </select>
          </div>
        </div>
        {/* 복습 목록 */}
        <div className='review-conversation-lists'>
          {/* 날짜별 영역 생성 */}
          {uniqueDates.map((date) => (
            <div key={date}>
              <div className='date'>{date}</div>
              {/* 날짜별 대화 목록 생성 */}
              <ul>
                {data.map((data) =>
                  date === data.date ? (
                    <Link to={`/mypage/review/${data.id}`} key={data.id}>
                      <li className='review-item'>
                        <div className='character-img'>
                          <img src={data.img} alt={`${data.name}`} />
                        </div>
                        <div className='flex flex-col justify-center'>
                          <div>
                            <span className='character-name'>{data.name}</span>
                            <span className='corrected-sentence-count'>
                              {data.correctiveSentenceCount}
                            </span>
                          </div>
                          <div className='conversation-time'>
                            <span className='start-time'>{data.startTime}</span>
                            <span className='finish-time'>
                              {data.finishTime}
                            </span>
                          </div>
                        </div>
                      </li>
                    </Link>
                  ) : null
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
