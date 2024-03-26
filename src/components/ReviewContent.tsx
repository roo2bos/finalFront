// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { IoArrowForward } from 'react-icons/io5';
import '../assets/css/reviewContent.css';

const dummy = [
  {
    id: 'review_1',
    conversation: [
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
    conversation: [
      { speaker: 'ai', message: 'God bless you' },
      { speaker: 'user', message: 'what?' },
    ],
    wrongSentence: 'He goed to the store.',
    correctedSentence: 'He went to the store.',
  },
  {
    id: 'review_3',
    conversation: [
      { speaker: 'ai', message: "That's ok." },
      { speaker: 'user', message: 'why?' },
    ],
    wrongSentence: 'He goed to the store.',
    correctedSentence: 'He went to the store.',
  },
];

export default function ReviewContent() {
  const { id } = useParams();
  const conversationData = dummy.find((item) => item.id === id);

  if (!conversationData) {
    return <div>대화를 찾을 수 없습니다.</div>;
  }

  const { conversation, wrongSentence, correctedSentence } = conversationData;

  return (
    <>
      <div className='review-content'>
        <div>복습 내역</div>
        <div>
          {/* 대화 내역 렌더링 */}
          {conversation.map((message, index) => (
            <div key={index}>
              <div className={message.speaker === 'ai' ? 'ai' : 'user'}>
                {/* 틀린 문장인 경우 빨간색으로 표시 */}
                {message.message === wrongSentence ? (
                  <>
                    <span style={{ color: 'red' }}>{message.message}</span>
                    {/* 교정 문장 표시 */}
                    <div>
                      <IoArrowForward />
                      {correctedSentence}
                    </div>
                  </>
                ) : (
                  message.message
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
