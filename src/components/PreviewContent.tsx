import { LuRepeat } from 'react-icons/lu';
import { HiSpeakerWave } from 'react-icons/hi2';
import { FaArrowLeft } from 'react-icons/fa6';
import '../assets/css/preview.css';

// 임시 데이터
const sentenceData = [
  {
    id: 'sentence1',
    sentence: 'I love coding.',
    sentenceTranslation: '나는 코딩을 사랑해요.',
  },
  {
    id: 'sentence2',
    sentence: 'Learning new things is exciting.',
    sentenceTranslation: '새로운 것을 배우는 건 흥미로워요.',
  },
  {
    id: 'sentence3',
    sentence: 'Reading books broadens the mind.',
    sentenceTranslation: '책을 읽는 것은 지식을 넓히는 데 도움이 돼요.',
  },
];

const conversationData = {
  'conversation-type1': {
    type1: [
      {
        id: 'coversation-type1-1',
        speaker: 'A',
        message: 'I love coding.',
        translation: '나는 코딩을 사랑해요.',
        img: '/characters/ic_style_joker_male.avif',
      },
      {
        id: 'coversation-type1-2',
        speaker: 'B',
        message: "That's great!",
        translation: '정말 좋아요!',
        img: '/characters/ic_style_joker_female.avif',
      },
      {
        id: 'coversation-type1-3',
        speaker: 'A',
        message: "It's a rewarding skill to have.",
        translation: '보람 있는 기술이에요.',
        img: '/characters/ic_style_joker_male.avif',
      },
      {
        id: 'coversation-type1-4',
        speaker: 'B',
        message: 'Definitely! I enjoy it too.',
        translation: '확실히요! 저도 그것을 즐겨요.',
        img: '/characters/ic_style_joker_female.avif',
      },
    ],
    type2: [
      {
        id: 'coversation-type2-1',
        speaker: 'A',
        message: 'Do you have any hobbies?',
        translation: '취미가 있으세요?',
        img: '/characters/ic_style_joker_female.avif',
      },
      {
        id: 'coversation-type2-2',
        speaker: 'B',
        message: 'Yes, I love coding.',
        translation: '네, 저는 코딩을 사랑해요.',
        img: '/characters/ic_style_joker_male.avif',
      },
      {
        id: 'coversation-type2-3',
        speaker: 'A',
        message: "That's wonderful! What do you enjoy coding?",
        translation: '정말 멋져요! 무엇을 코딩하는 것을 좋아하세요?',
        img: '/characters/ic_style_joker_female.avif',
      },
      {
        id: 'coversation-type2-4',
        speaker: 'B',
        message: 'I particularly enjoy working on web development projects.',
        translation: '특히 웹 개발 프로젝트를 하는 것을 좋아해요.',
        img: '/characters/ic_style_joker_male.avif',
      },
    ],
    type3: [
      {
        id: 'coversation-type3-1',
        speaker: 'A',
        message: "I'm struggling with coding. It's so difficult.",
        translation: '코딩하는 것이 힘들어요. 너무 어려워요.',
        img: '/characters/ic_style_joker_female.avif',
      },
      {
        id: 'coversation-type3-2',
        speaker: 'B',
        message: "Don't worry, everyone struggles at first.",
        translation: '걱정 마세요. 모두 처음에는 힘들어요.',
        img: '/characters/ic_style_joker_male.avif',
      },
      {
        id: 'coversation-type3-3',
        speaker: 'A',
        message: 'I hope so. I really want to get better at it.',
        translation: '그렇길 바라요. 제대로 잘 하고 싶어요.',
        img: '/characters/ic_style_joker_female.avif',
      },
      {
        id: 'coversation-type3-4',
        speaker: 'B',
        message: '곧 코딩을 사랑하게 될거야.',
        translation: 'You will soon come to love coding.',
        img: '/characters/ic_style_joker_male.avif',
      },
    ],
  },
  'conversation-type2': {
    type1: [
      {
        id: 'coversation-type1-1',
        speaker: 'A',
        message: 'I love coding.',
        translation: '나는 코딩을 사랑해요.',
        img: '/characters/ic_style_joker_male.avif',
      },
      {
        id: 'coversation-type1-2',
        speaker: 'B',
        message: "That's great!",
        translation: '정말 좋아요!',
        img: '/characters/ic_style_joker_female.avif',
      },
      {
        id: 'coversation-type1-3',
        speaker: 'A',
        message: "It's a rewarding skill to have.",
        translation: '보람 있는 기술이에요.',
        img: '/characters/ic_style_joker_male.avif',
      },
      {
        id: 'coversation-type1-4',
        speaker: 'B',
        message: 'Definitely! I enjoy it too.',
        translation: '확실히요! 저도 그것을 즐겨요.',
        img: '/characters/ic_style_joker_female.avif',
      },
    ],
    type2: [
      {
        id: 'coversation-type2-1',
        speaker: 'A',
        message: 'Do you have any hobbies?',
        translation: '취미가 있으세요?',
        img: '/characters/ic_style_joker_female.avif',
      },
      {
        id: 'coversation-type2-2',
        speaker: 'B',
        message: 'Yes, I love coding.',
        translation: '네, 저는 코딩을 사랑해요.',
        img: '/characters/ic_style_joker_male.avif',
      },
      {
        id: 'coversation-type2-3',
        speaker: 'A',
        message: "That's wonderful! What do you enjoy coding?",
        translation: '정말 멋져요! 무엇을 코딩하는 것을 좋아하세요?',
        img: '/characters/ic_style_joker_female.avif',
      },
      {
        id: 'coversation-type2-4',
        speaker: 'B',
        message: 'I particularly enjoy working on web development projects.',
        translation: '특히 웹 개발 프로젝트를 하는 것을 좋아해요.',
        img: '/characters/ic_style_joker_male.avif',
      },
    ],
    type3: [
      {
        id: 'coversation-type3-1',
        speaker: 'A',
        message: "I'm struggling with coding. It's so difficult.",
        translation: '코딩하는 것이 힘들어요. 너무 어려워요.',
        img: '/characters/ic_style_joker_female.avif',
      },
      {
        id: 'coversation-type3-2',
        speaker: 'B',
        message: "Don't worry, everyone struggles at first.",
        translation: '걱정 마세요. 모두 처음에는 힘들어요.',
        img: '/characters/ic_style_joker_male.avif',
      },
      {
        id: 'coversation-type3-3',
        speaker: 'A',
        message: 'I hope so. I really want to get better at it.',
        translation: '그렇길 바라요. 제대로 잘 하고 싶어요.',
        img: '/characters/ic_style_joker_female.avif',
      },
      {
        id: 'coversation-type3-4',
        speaker: 'B',
        message: '곧 코딩을 사랑하게 될거야.',
        translation: 'You will soon come to love coding.',
        img: '/characters/ic_style_joker_male.avif',
      },
    ],
  },
  'conversation-type3': {
    type1: [
      {
        id: 'coversation-type1-1',
        speaker: 'A',
        message: 'I love coding.',
        translation: '나는 코딩을 사랑해요.',
        img: '/characters/ic_style_joker_male.avif',
      },
      {
        id: 'coversation-type1-2',
        speaker: 'B',
        message: "That's great!",
        translation: '정말 좋아요!',
        img: '/characters/ic_style_joker_female.avif',
      },
      {
        id: 'coversation-type1-3',
        speaker: 'A',
        message: "It's a rewarding skill to have.",
        translation: '보람 있는 기술이에요.',
        img: '/characters/ic_style_joker_male.avif',
      },
      {
        id: 'coversation-type1-4',
        speaker: 'B',
        message: 'Definitely! I enjoy it too.',
        translation: '확실히요! 저도 그것을 즐겨요.',
        img: '/characters/ic_style_joker_female.avif',
      },
    ],
    type2: [
      {
        id: 'coversation-type2-1',
        speaker: 'A',
        message: 'Do you have any hobbies?',
        translation: '취미가 있으세요?',
        img: '/characters/ic_style_joker_female.avif',
      },
      {
        id: 'coversation-type2-2',
        speaker: 'B',
        message: 'Yes, I love coding.',
        translation: '네, 저는 코딩을 사랑해요.',
        img: '/characters/ic_style_joker_male.avif',
      },
      {
        id: 'coversation-type2-3',
        speaker: 'A',
        message: "That's wonderful! What do you enjoy coding?",
        translation: '정말 멋져요! 무엇을 코딩하는 것을 좋아하세요?',
        img: '/characters/ic_style_joker_female.avif',
      },
      {
        id: 'coversation-type2-4',
        speaker: 'B',
        message: 'I particularly enjoy working on web development projects.',
        translation: '특히 웹 개발 프로젝트를 하는 것을 좋아해요.',
        img: '/characters/ic_style_joker_male.avif',
      },
    ],
    type3: [
      {
        id: 'coversation-type3-1',
        speaker: 'A',
        message: "I'm struggling with coding. It's so difficult.",
        translation: '코딩하는 것이 힘들어요. 너무 어려워요.',
        img: '/characters/ic_style_joker_female.avif',
      },
      {
        id: 'coversation-type3-2',
        speaker: 'B',
        message: "Don't worry, everyone struggles at first.",
        translation: '걱정 마세요. 모두 처음에는 힘들어요.',
        img: '/characters/ic_style_joker_male.avif',
      },
      {
        id: 'coversation-type3-3',
        speaker: 'A',
        message: 'I hope so. I really want to get better at it.',
        translation: '그렇길 바라요. 제대로 잘 하고 싶어요.',
        img: '/characters/ic_style_joker_female.avif',
      },
      {
        id: 'coversation-type3-4',
        speaker: 'B',
        message: '곧 코딩을 사랑하게 될거야.',
        translation: 'You will soon come to love coding.',
        img: '/characters/ic_style_joker_male.avif',
      },
    ],
  },
};

export default function PreviewContent() {
  return (
    <section className='preview-sentence'>
      <div className='container'>
        <button type='button' className='exit-btn'>
          <FaArrowLeft />
        </button>
        <div className='sample-sentence-area'>
          <div className='number-btn-group'>
            {/* 활성 버튼 상태 변경 -- 수정 */}
            <button type='button' className='number-btn active'>
              1
            </button>
            <button type='button' className='number-btn'>
              2
            </button>
            <button type='button' className='number-btn'>
              3
            </button>
          </div>
          <div className='today-sentence'>
            <p className='sentence-sub-title'>오늘의 표현</p>
            <div className='key-sentence'>
              <p className='key-sentence-english'>
                I will not give up on achieving my dreams.
              </p>
              <p className='key-sentence-korea'>
                내 꿈을 이루기 위해 포기하지 않아.
              </p>
            </div>
          </div>
          <div className='sample-sentence'>
            <div className='preview-text-btn'>
              <span className='sentence-sub-title'>예문</span>
              <button type='button'>
                <LuRepeat />
              </button>
              <button type='button'>
                <HiSpeakerWave />
              </button>
            </div>
            <div className='dialogue'>
              <p className='dialogue-english'>
                A: Hey, have you been feeling discouraged lately?
                <br />
                B: Yeah, a bit. It feels like everything's against me.
                <br />
                A: Don't worry, I believe in you. Remember, you always said you
                wouldn't give up on your dreams.
                <br />
                B: You're right. I won't give up. No matter how tough it gets,
                I'll keep pushing forward.
                <br />
              </p>
              <p className='dialogue-korea'>
                A: 요즘 낙담한 기분이야? <br /> B: 응, 좀 그래. 모든 게 내게
                반대되는 것 같아. <br /> A: 걱정 마. 나는 네가 할 수 있다고
                믿어. 꿈을 이루기 위해 포기하지 않겠다고 말했었잖아. <br /> B:
                맞아. 포기하지 않을 거야. 어려울 때라도 계속 나아갈 거야. <br />{' '}
              </p>
            </div>
          </div>
        </div>
        <div className='three-sentence-area'>
          <div className='sentence-sub-title'>하루 3문장</div>
          <div className='three-sentence'>
            <div className='three-sentence-group'>
              <span className='number-btn active'>1</span>
              <span> I will not give up on achieving my dreams.</span>
            </div>
            <div className='three-sentence-group'>
              <span className='number-btn'>2</span>
              <span>Hey, have you eaten yet?</span>
            </div>
            <div className='three-sentence-group'>
              <span className='number-btn'>3</span>
              <span>I want to go home.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
