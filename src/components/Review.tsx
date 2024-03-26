import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../assets/css/review.css';
import datas from '../../datas.json';

interface Data {
  id: string;
  img: string;
  name: string;
  startTime: string;
  finishTime: string;
  incorrectSentences: string[];
}

interface ReviewData extends Data {
  date: string;
}
interface Props {
  data: Data;
}

function ReviewItem({ data }: Props) {
  return (
    <Link to={`/mypage/${data.id}`}>
      <div className='mr-6'>
        <img className='character-img' src={data.img} alt={`${data.name}`} />
      </div>
      <div className='flex flex-col justify-center'>
        <div className='review-character'>
          <span className='character-name'>{data.name}</span>
          <span className='start-time ml-2'>{data.startTime}</span>
          <span className='finish-time'>{data.finishTime}</span>
        </div>
        {/* 틀린 문장 보기 */}
        <div className='review-sentence my-2 flex items-center'>
          <div className='corrected-sentence-count mr-2'>
            {data.incorrectSentences.length}
          </div>
          <div className='incorrect-first text-lg truncate-1'>
            {data.incorrectSentences[0]}
          </div>
          {/* 첫번째 문장 외 나머지 문장 */}
          {/* 링크를 li에 걸었는데....???? */}
          {/* <div>
              {data.incorrectSentences.slice(1).map((sentence, index) => (
                <div key={index}>{sentence}</div>
              ))}
            </div> */}
        </div>
      </div>
    </Link>
  );
}

export default function Review() {
  const [sortBy, setSortBy] = useState<string>('latest');
  const reviewDatas: ReviewData[] = datas.reviewDatas;
  const uniqueDates: string[] = [
    ...new Set(reviewDatas.map((data) => data.date)),
  ];

  return (
    <section className='review'>
      <div className='container'>
        <div className='conversation-controls'>
          {/* 정렬은 아직... */}
          <div className='sort-dropdown'>
            <label htmlFor='sort-select' className='hide'>
              정렬
            </label>
            <select
              id='sort-select'
              className='border-none'
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value='latest'>최신순</option>
              <option value='oldest'>과거순</option>
            </select>
          </div>
        </div>
        <div className='review-conversation-lists'>
          {uniqueDates.map((date) => (
            <div key={date}>
              <div className='date'>{date}</div>
              <ul className='review-list'>
                <li className='review-item'>
                  {reviewDatas
                    .filter((data) => date === data.date)
                    .map((data) => (
                      <ReviewItem key={data.id} data={data} />
                    ))}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
