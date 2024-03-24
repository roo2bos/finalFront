import { Link } from 'react-router-dom';
import '../assets/css/review.css';

const reviewData = [
  {
    id: 'review_1',
    date: '2024-03-24',
    startTime: '10:00',
    finishTime: '11:00',
    correctiveSentenceCount: '5',
  },
  {
    id: 'review_2',
    date: '2024-03-24',
    startTime: '10:00',
    finishTime: '11:00',
    correctiveSentenceCount: '3',
  },
  {
    id: 'review_3',
    date: '2024-03-24',
    startTime: '10:00',
    finishTime: '11:00',
    correctiveSentenceCount: '2',
  },
  {
    id: 'review_4',
    date: '2024-03-25',
    startTime: '10:00',
    finishTime: '11:00',
    correctiveSentenceCount: '10',
  },
];

export default function Review() {
  return (
    <section className='review'>
      <div className='container'>
        <div className='conversation-controls'>
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
        <div className='review-conversation-lists'>
          {/* 전체 대화 목록 */}
          <ul>
            <li>
              {/* 날짜별로 생성되는 대화 목록 */}
              <ul>
                <div className='date'>2024-03-22</div>
                <Link to='/'>
                  <li className='review-item'>
                    <div className='character-img'>
                      <img src='/image1.png' alt='곰돌이푸' />
                    </div>
                    <div className='flex flex-col justify-center'>
                      <div>
                        <span className='character-name'>곰돌이 푸</span>
                        <span className='corrected-sentence-count'>5</span>
                      </div>
                      <div className='conversation-time'>10:00 ~ 11:00</div>
                    </div>
                  </li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
