import { useState } from 'react';

export default function Wordquiz() {
  const krAnswer = '해석 : 이것은 셔플링에 대한 샘플 문장입니다';
  const enAnswer = 'This is a sample sentence for shuffling';
  const [newArr, setNewArr] = useState(enAnswer.split(' '));
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [clickedWords, setClickedWords] = useState([]);
  const [showUndoButton, setShowUndoButton] = useState(false);

  const checkAnswer = () => {
    if (enAnswer === userAnswer) {
      alert('정답입니다!');
      firework();
      setShowUndoButton(false);
      setUserAnswer('아래 버튼을 눌러 다음 문제로 넘어가시오');
    } else {
      alert('오답입니다.');
      setCorrectAnswer(true);
      setShowUndoButton(true);
    }
  };

  const userAnswerHandler = (word) => {
    setUserAnswer((prevAnswer) => {
      if (prevAnswer === '') {
        return word;
      } else {
        return prevAnswer + (prevAnswer.endsWith(' ') ? '' : ' ') + word;
      }
    });
    setNewArr((prevArr) => prevArr.filter((val) => val !== word));
    setClickedWords((prevClickedWords) => [...prevClickedWords, word]);
    setShowUndoButton(true);
  };

  const undoClick = () => {
    if (clickedWords.length > 0) {
      const lastClickedWord = clickedWords[clickedWords.length - 1];
      setUserAnswer((prevAnswer) => {
        const regex = new RegExp(`\\b${lastClickedWord}\\b`);
        return prevAnswer.replace(regex, '').trim();
      });
      setNewArr((prevArr) => [...prevArr, lastClickedWord]);
      setClickedWords((prevClickedWords) => prevClickedWords.slice(0, -1));
      if (clickedWords.length === 1) {
        setShowUndoButton(false);
      }
    }
  };

  const firework = () => {
    var duration = 20 * 100;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 20, spread: 360, ticks: 100, zIndex: 0 };
    //  startVelocity: 범위, spread: 방향, ticks: 갯수

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(-0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  };

  return (
    <div className='mx-auto mt-10 text-center p-5 border border-[var(--border-divide-color)] shadow rounded-xl'>
      <p className='text-xl mb-4'>{krAnswer}</p>
      <input
        type='text'
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-full max-w-md mx-auto'
      />

      <div className='flex flex-wrap justify-center'>
        {newArr.map((val, index) => (
          <span
            key={index}
            onClick={() => userAnswerHandler(val)}
            className='bg-gray-200 px-4 py-2 rounded-md text-sm m-1 cursor-pointer'
          >
            {val}
          </span>
        ))}
      </div>

      <button
        onClick={checkAnswer}
        className='mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
      >
        확인
      </button>

      {correctAnswer && (
        <div className='mt-4'>
          <h1 className='text-red-600'>틀렸습니다.</h1>
          <strong>
            정답은 <span className='text-blue-500'>'{enAnswer}'</span>입니다.
          </strong>
        </div>
      )}

      {showUndoButton && (
        <button
          onClick={undoClick}
          className='mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
        >
          되돌리기
        </button>
      )}
    </div>
  );
}
