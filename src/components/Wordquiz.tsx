import { useState, useEffect } from "react";
import datas from '../../datas.json';



export default function Wordquiz() {
    const [question, setQuestion] = useState(0);
    const [correct, setCorrect] = useState(true);
    const [clickedAnswer, setClickedAnswer] = useState(null);

    

    const handleNextQuestion = () => {
        if (question < datas.quiz.length - 1) {
            setQuestion(question + 1);
            setCorrect(true);
            setClickedAnswer(null);
        } else {
            console.log("모든 문제를 풀었습니다.");
        }
    };

    const checkAnswer = (quizItem, selectedAnswer) => {
        if (quizItem.answer[`asw${selectedAnswer}`] === quizItem.correctAnswer) {
            handleNextQuestion();
            firework()
        } else {
            setCorrect(false);
            setClickedAnswer(selectedAnswer); 
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
              origin: { x: randomInRange(-0.1, 0.3), y: Math.random() - 0.2 }
            })
          );
          confetti(
            Object.assign({}, defaults, {
              particleCount,
              origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            })
          );
        }, 250);
      }

    return (
        <div className="container mx-auto py-8">
            {/* 퀴즈 */}
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {/* 문제 */}
                {datas.quiz.map((quizItem, index) => (
                    index === question && (
                        <div key={quizItem.id}>
                            <h3 className="text-xl font-bold mb-4">문제{quizItem.id}: {quizItem.question}</h3>
                            <ul>
                                <li className={`mb-2 cursor-pointer ${clickedAnswer === 1 && !correct ? 'text-red-500' : ''}`} onClick={() => checkAnswer(quizItem, 1)}><span className="font-bold">1. </span>{quizItem.answer.asw1}</li>
                                <li className={`mb-2 cursor-pointer ${clickedAnswer === 2 && !correct ? 'text-red-500' : ''}`} onClick={() => checkAnswer(quizItem, 2)}><span className="font-bold">2. </span>{quizItem.answer.asw2}</li>
                                <li className={`mb-2 cursor-pointer ${clickedAnswer === 3 && !correct ? 'text-red-500' : ''}`} onClick={() => checkAnswer(quizItem, 3)}><span className="font-bold">3. </span>{quizItem.answer.asw3}</li>
                            </ul>
                            <p className="text-sm mt-4">힌트: {quizItem.hint}</p>
                            {!correct && <p className="text-red-500">오답입니다. 정답은 {quizItem.correctAnswer}입니다.</p>}
                        </div>
                    )
                ))}
                {/* 진행 상황 바 */}
                <div className="bg-blue-500 mt-4 h-2" style={{ width: `${((question + 1) / datas.quiz.length) * 100}%` }}></div>
            </div>
        </div>
    );
}
