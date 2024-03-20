import { LuRepeat } from 'react-icons/lu';
import { HiSpeakerWave } from 'react-icons/hi2';
import { FaArrowLeft } from 'react-icons/fa6';
import '../assets/css/preview.css';

export default function Preview() {
  return (
    <section id='preview'>
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
                A: That's the spirit! Your determination will get you through
                anything.
                <br />
                B: Thanks for the pep talk. I needed that reminder.
              </p>
              <p className='dialogue-korea'>
                A: 요즘 낙담한 기분이야? <br /> B: 응, 좀 그래. 모든 게 내게
                반대되는 것 같아. <br /> A: 걱정 마. 나는 네가 할 수 있다고
                믿어. 꿈을 이루기 위해 포기하지 않겠다고 말했었잖아. <br /> B:
                맞아. 포기하지 않을 거야. 어려울 때라도 계속 나아갈 거야. <br />{' '}
                A: 그게 바로 자세야! 네 끈기가 어떤 일이든 이겨낼 거야. <br />{' '}
                B: 격려해 줘서 고마워. 그런 상기가 필요했어.
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
