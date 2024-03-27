// 복습내역
import /* useEffect, useState */ 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { IoArrowForward } from 'react-icons/io5';
import '../assets/css/reviewContent.css';

const chat = [
	{
		id: 'review_1',
		messages: [
			{ speaker: 'ai', message: 'I have to go.' },
			{ speaker: 'user', message: 'why?' },
			{ speaker: 'ai', message: 'He goed to the store.' },
			{ speaker: 'user', message: 'Why do you think so?' },
		],
		wrongSentence: 'He goed to the store.',
		correctedSentence: 'He went to the store.',
	},
	{
		id: 'review_2',
		messages: [
			{ speaker: 'ai', message: 'God bless you' },
			{ speaker: 'user', message: 'what?' },
			{ speaker: 'ai', message: 'He goed to the store.' },
			{ speaker: 'user', message: 'Why do you think so?' },
			{ speaker: 'ai', message: 'He goed to the store.' },
			{ speaker: 'user', message: 'Why do you think so?' },
		],
		wrongSentence: 'He goed to the store.',
		correctedSentence: 'He went to the store.',
	},
	{
		id: 'review_3',
		messages: [
			{ speaker: 'ai', message: "That's ok." },
			{ speaker: 'user', message: 'why?' },
		],
		wrongSentence: 'He goed to the store.',
		correctedSentence: 'He went to the store.',
	},
];

export default function ReviewContent() {
	const { id } = useParams();
	const conversationData = chat.filter((item) => item.id === id);

	if (!conversationData) {
		return <div>대화를 찾을 수 없습니다.</div>;
	}

	const { messages, wrongSentence, correctedSentence } = conversationData[0];
	console.log(messages);

	return (
		<div className="list-talk1">
			<div className="history">
				<ul>
					{messages.map((talkMessage, i) => (
						<li key={i} className={talkMessage.speaker === 'user' ? 'user' : 'ai'}>
							<div className="profile">
								<img src={talkMessage.speaker === 'user' ? '/user-default.png' : '/image1.png'} alt="프로필 이미지" />
							</div>
							<div className="info">
								<div className="name">{talkMessage.speaker === 'user' ? '사용자' : 'AI'}</div>
								{talkMessage.message === wrongSentence ? (
									<div className="message">
										<div style={{ color: 'red' }} className="wrong-sentence">
											{wrongSentence}
										</div>
										<div className="corrected-sentence">
											<IoArrowForward />
											{correctedSentence}
										</div>
									</div>
								) : (
									<div className="message">{talkMessage.message}</div>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

// 복습 목록
// 목록보기

// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import '../assets/css/review.css';
// import datas from '../../datas.json';

// interface Data {
//   id: string;
//   img: string;
//   name: string;
//   startTime: string;
//   finishTime: string;
//   incorrectSentences: string[];
// }

// interface ReviewData extends Data {
//   date: string;
// }
// interface Props {
//   data: Data;
// }

// function ReviewItem({ data }: Props) {
//   return (
//     <Link to={`/mypage/${data.id}`}>
//       <div className='mr-6'>
//         <img className='character-img' src={data.img} alt={`${data.name}`} />
//       </div>
//       <div className='flex flex-col justify-center'>
//         <div className='review-character'>
//           <span className='character-name'>{data.name}</span>
//           <span className='start-time ml-2'>{data.startTime}</span>
//           <span className='finish-time'>{data.finishTime}</span>
//         </div>
//         {/* 틀린 문장 보기 */}
//         <div className='review-sentence my-2 flex items-center'>
//           <div className='corrected-sentence-count mr-2'>
//             {data.incorrectSentences.length}
//           </div>
//           <div className='incorrect-first text-lg truncate-1'>
//             {data.incorrectSentences[0]}
//           </div>
//           {/* 첫번째 문장 외 나머지 문장 */}
//           {/* 링크를 li에 걸었는데....???? */}
//           {/* <div>
//               {data.incorrectSentences.slice(1).map((sentence, index) => (
//                 <div key={index}>{sentence}</div>
//               ))}
//             </div> */}
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default function Review() {
//   const [sortBy, setSortBy] = useState<string>('latest');
//   const reviewDatas: ReviewData[] = datas.reviewDatas;
//   const uniqueDates: string[] = [
//     ...new Set(reviewDatas.map((data) => data.date)),
//   ];

//   return (
//     <section className='review'>
//       <div className='container'>
//         <div className='conversation-controls'>
//           {/* 정렬은 아직... */}
//           <div className='sort-dropdown'>
//             <label htmlFor='sort-select' className='hide'>
//               정렬
//             </label>
//             <select
//               id='sort-select'
//               className='border-none'
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//             >
//               <option value='latest'>최신순</option>
//               <option value='oldest'>과거순</option>
//             </select>
//           </div>
//         </div>
//         <div className='review-conversation-lists'>
//           {uniqueDates.map((date) => (
//             <div key={date}>
//               <div className='date'>{date}</div>
//               <ul className='review-list'>
//                 <li className='review-item'>
//                   {reviewDatas
//                     .filter((data) => date === data.date)
//                     .map((data) => (
//                       <ReviewItem key={data.id} data={data} />
//                     ))}
//                 </li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
