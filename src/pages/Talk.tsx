import '../assets/css/talk.css';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../datas.json'; //임시 데이터
import axios from 'axios';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
// import { BiSolidUserDetail } from 'react-icons/bi';
import { PiUserListFill } from 'react-icons/pi';
import { PiUserListDuotone } from 'react-icons/pi';

import { PiMicrophoneFill } from 'react-icons/pi';
import { PiMicrophoneSlash } from 'react-icons/pi';
import { RiSendPlaneFill } from 'react-icons/ri';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import { BsShiftFill } from 'react-icons/bs';
import { IoStop } from 'react-icons/io5';
import { IoPlay } from 'react-icons/io5';
import { PiListMagnifyingGlassDuotone } from 'react-icons/pi';
import { MdChecklist } from 'react-icons/md';
import { IoMdCloseCircle } from 'react-icons/io';
import { RiLoader2Fill } from 'react-icons/ri';
import { FaFileArrowDown } from 'react-icons/fa6';
import { FaArrowLeft } from 'react-icons/fa6';
// import wavfile from '/test.wav';
import { type } from './../store/store';

export const ChatHistory = ({ talkMessages, userInfo, characterInfo }) => {
  return (
    <ul className={talkMessages.length === 0 ? 'h-full' : ''}>
      {talkMessages.length === 0 ? (
        <li key={0} className='h-full !m-0 flex justify-center items-center'>
          대화 내역이 아직 없습니다.
        </li>
      ) : (
        talkMessages.map((talkMessage, i) => {
          return (
            <li
              key={i}
              className={talkMessage?.includes('user:') ? 'user' : 'ai'}
            >
              <div className='profile'>
                <img
                  src={
                    talkMessage?.includes('user:')
                      ? '/user-default.png'
                      : characterInfo[0]?.img
                  }
                  alt=''
                />
              </div>
              <div className='info'>
                <div className='name'>
                  {talkMessage?.includes('user:')
                    ? userInfo.userid
                    : talkMessage.split(': ')[0]}
                </div>
                <div className='msg'>{talkMessage.split(': ')[1]}</div>
              </div>
            </li>
          );
        })
      )}
    </ul>
  );
};

function Talk() {
  const { id } = useParams();
  const [account] = useState('test');
  // const [beforeMessage, setBeforeMessage] = useState([]);//api로 사용예정
  const [beforeMessage] = useState(
    datas.chats.filter((chat) => chat.roomId === id)
  ); //임시:기존 대화한 내역 메세지

  // 뒤로가기 버튼
  const backHandler = () => {
    if (window.confirm('대화창을 나가면 내역은 저장되지 않습니다.')) {
      window.history.back();
    } else {
      return;
    }
  };

  const [mic, setMic] = useState(false); //마이크 활성 체크
  const [history, setHistory] = useState(false); //대화 내역

  const textareaRef = useRef();
  const innerRef = useRef();
  const audioRef = useRef();
  const [playState, setPlayState] = useState(false); //오디오 재생 중인지 체크
  const [duration, setDuration] = useState(0); //오디오 재생 중
  const [isPop, setIsPop] = useState(false); //대화내역 활성 체크
  const [audioEnd, setAudioEnd] = useState(false); //오디오 종료 체크
  const [isAudioFetched, setIsAudioFetched] = useState(false); //오디오 파일 fetch 체크
  const [correctLoad, setCorrectLoad] = useState(false); //교정 fetching 체크
  const [audioLoad, setAudioLoad] = useState(false); //오디오 fetching 체크
  // const [count,setCount] = useState(0);//임시 : 대화 메세지 전송 개수 체크(api 적용시 삭제예정)
  // const [file] = useState(['https://market-imgs.s3.ap-northeast-2.amazonaws.com/test.mp3','/test.wav']);//임시 : 음성메세제 개수 (api 적용시 삭제예정)
  const [aiMsg, setAiMsg] = useState({}); //임시 : 대화 메세지 전송 개수 체크(api 적용시 삭제예정)
  const [talkMessages, setTalkMessages] = useState([]); //둘의 대화 메세지 목록
  const [correctList, setCorrectList] = useState([]); //교정 할 리스트
  const [isFinishPop, setIsFinishPop] = useState(false); //대화 종료 팝업 체크
  const [isFinish, setIsFinish] = useState(false); //대화 종료

  const [userInfo] = useState(
    datas.users.find((user) => user.userid === account)
  ); //임시
  const [characterInfo] = useState(
    datas.characters.filter((character) => character.id === id)
  ); //임시
  const [characterDesc, setCharacterDesc] = useState(false);
  const [missions] = useState([
    // 더미
    {
      id: 1,
      message:
        'mission1 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 ',
      complete: true,
    },
    {
      id: 2,
      message:
        'mission2 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 ',
      complete: false,
    },
    {
      id: 3,
      message:
        'mission3 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 ',
      complete: false,
    },
  ]);

  useEffect(() => {
    setMic(false);
  }, []);

  const fetchAndPlayAudio = async (inputText) => {
    try {
      const response = await axios.post(
        'https://43.203.227.36.sslip.io/server/chat/SendChat',
        {
          messages: [`user: ${inputText}`],
        },
        { withCredentials: true }
      );
      const result = await response.data;
      // const objectURL = 'https://43.203.227.36.sslip.io/pooh.wav';
      setTalkMessages((prevData) => [...prevData, `pooh: ${result.aimsg}`]);
      setAiMsg((prevData) => ({ ...prevData, result: result }));
      setAudioLoad(false);
      // return objectURL;
      const file = await fetch('/pooh.wav', { withCredentials: true });
      const blob = await file.blob();
      const objectURL = URL.createObjectURL(blob);
      return objectURL;
    } catch (error) {
      console.error('Fetch and play audio error:', error);
    }
  };

  function playAudio() {
    const player = audioRef.current;
    setPlayState(!playState);
    playState ? player.pause() : player.play();
    player.addEventListener('timeupdate', function () {
      const currentTime = player.currentTime;
      const end = player.duration;
      const percentage = Math.floor((currentTime / end) * 100);
      setDuration(percentage);
      if (percentage >= 100) {
        setAudioEnd(true); //오디오 총료 체크
        setPlayState(false); //오디오 재생 중인 상태 체크
        setIsAudioFetched(false);
        // setTimeout(() => (audioRef.current.src = ''), 100); //음성재생완료시 새로운 메세지 받기위해서 초기화
      } else {
        setAudioEnd(false);
      }
    });
  }

  // async function playAudio(audioUrl) {
  // 	const audio = new Audio(audioUrl);
  // 	audio.crossOrigin = 'anonymous'; // CORS 정책 위반 방지
  // 	await audio.load(); // 오디오 파일 로드
  // 	audio.play().catch(e => console.error('오디오 재생 실패:', e));
  //   }

  const sendMessage = async (e) => {
    try {
      e.preventDefault();
      const inputText = textareaRef.current.value;
      if (inputText.length === 0) {
        alert('음성 입력된 값이 없습니다');
        return;
      }
      await setAudioLoad(true);
      setTalkMessages((prevData) => [...prevData, `user: ${inputText}`]);
      const audioSrc = await fetchAndPlayAudio(inputText);
      audioEnd
        ? (audioRef.current.src = '')
        : (audioRef.current.src = audioSrc);
      await setIsAudioFetched(true);
      playAudio();
      textareaRef.current.value = ''; //textarea clear
    } catch (error) {
      console.log(error);
    }
  };
  const finishChat = async () => {
    try {
      setCorrectLoad(true);
      await axios
        .post(
          'https://43.203.227.36.sslip.io/server/chat/getCorrection',
          {
            messages: talkMessages,
          },
          { withCredentials: true }
        )
        .then(function (response) {
          const correctedMsg = response.data;
          correctedMsg.forEach(function (msg) {
            if (msg.includes('->')) {
              setCorrectList((prevData) => [...prevData, msg]);
            }
          });

          if (correctedMsg.length === 0) {
            setCorrectList(['Perfect Grammar']);
          }
          setIsFinish(true);
        })
        .catch(function (error) {
          console.error('에러 발생:', error);
        });
      setIsFinishPop(true);
      setCorrectLoad(false);
    } catch (error) {
      console.error('Fetch and play audio error:', error);
    }
  };
  const inputHandler = () => {
    return (textareaRef.current.parentNode.dataset.value =
      textareaRef.current.value);
  };

  // 마이크 캡처
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const recordedBlob = new Blob(chunksRef.current, {
          type: 'audio/AMR-WB',
        });
        chunksRef.current = [];

        sendAudioData(recordedBlob);
      };

      mediaRecorder.start();
      setMic(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const handleStopRecording = () => {
    const mediaRecorder = mediaRecorderRef.current;
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      setMic(false);
    }
  };

  const sendAudioData = async (audioBlob: Blob) => {
    try {
      // Blob을 File 객체로 변환 (파일 이름은 recording.amr로 지정)
      const audioFile = new File([audioBlob], 'recording.amr', {
        type: 'audio/AMR-WB',
      });

      const formData = new FormData();

      formData.append('audio', audioFile);
      const response = await axios.post(
        'https://43.203.227.36.sslip.io/server/speech',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          // ,withCredentials: true,
        }
      );

      console.log('Audio data sent successfully:', response.data);
      textareaRef.current.value = response.data;
    } catch (error) {
      console.error('Error sending audio data:', error);
    }
  };

  return (
    <>
      <div className='list-talk bg-cover bg-no-repeat bg-center '>
        {/* <div className="bg-char"></div> */}
        <div ref={innerRef} className='inner'>
          <div className='head'>
            <div className='btn-area flex justify-between w-full py-2'>
              <button
                type='button'
                aria-label='뒤로가기'
                className='p-0 text-2xl'
                onClick={talkMessages.length === 0 ? '' : backHandler}
              >
                <FaArrowLeft />
              </button>
              <button
                type='button'
                className='btn-mission btn-chat '
                onClick={() => setIsPop(!isPop)}
              >
                {/* <MdChecklist /> */}미션
              </button>
            </div>
            <div className={`ly-modal${isPop ? '' : ' !hidden'}`}>
              <div className='ly-inner'>
                <div className='ly-head'>
                  <strong>오늘의 학습 미션</strong>
                  <button type='button' onClick={() => setIsPop(!isPop)}>
                    <IoMdCloseCircle className='text-[var(--highlight-color)]' />
                  </button>
                </div>
                <div className='ly-body'>
                  <p className='todo'>
                    <span>오늘의 학습 목표: 미달(1/3)</span>{' '}
                    <span>전체 목표량 : 1/30일</span>
                  </p>
                  <ul className='list-mission'>
                    {missions.map((mission) => {
                      return (
                        <li
                          key={mission.id}
                          className={`${mission.complete ? 'complete' : ''}`}
                        >
                          <span>{mission.message}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='profile'>
              <img src={beforeMessage[0]?.img} alt='' />
              <div className={`voiceContainer ${playState ? 'on' : 'off'}`}>
                <div>
                  <div className='voice voice1'></div>
                  <div className='voice voice2'></div>
                  <div className='voice voice3'></div>
                  <div className='voice voice4'></div>
                  <div className='voice voice5'></div>
                </div>
              </div>
            </div>

            {/* <dl className='char-info'>
              <dt>
                <button
                  id='charName'
                  onClick={() => setCharacterDesc(!characterDesc)}
                >
                  {characterDesc ? (
                    <PiUserListFill className='text-lg' />
                  ) : (
                    <PiUserListDuotone className='text-lg' />
                  )}{' '}
                  {beforeMessage[0]?.name}{' '}
                </button>
              </dt>
              <dd>
                <div className='btn-group'>
                  <button>
                    <RiThumbUpFill /> (10k)
                  </button>
                  <button>
                    <RiThumbDownFill /> (0)
                  </button>
                </div>
              </dd>
            </dl> */}
            <div
              aria-labelledby={`charName`}
              className={`desc ${characterDesc ? 'on' : ''}`}
            >
              {characterInfo[0].desc}
            </div>
          </div>
        </div>

        <div className={`history ${history ? '' : 'hidden'}`}>
          <ChatHistory
            talkMessages={talkMessages}
            userInfo={userInfo}
            characterInfo={characterInfo}
          />
        </div>
        {/* foot */}
        <div className='foot-talking-wrap '>
          <div className='progress'>
            <div
              className='bar'
              style={{ transform: `translateX(${duration}%)` }}
            />
          </div>
          <div className='talking'>
            <dl>
              <dt className='flex justify-between'>
                <span>{characterInfo.name}</span>
                <button
                  className='btn-history'
                  onClick={() => setHistory(!history)}
                >
                  <PiListMagnifyingGlassDuotone
                    className={`text-2xl ${
                      talkMessages.length == 0 ? ' text-gray-400' : ''
                    }`}
                  />
                </button>
              </dt>
              <dd className='message'>
                {aiMsg.result ? aiMsg.result.aimsg : '대화를 시작 해보세요~'}
              </dd>
              <dd className='hidden'>
                <audio id='myAudio' ref={audioRef}></audio>
              </dd>
            </dl>
          </div>
          <form className='form' onSubmit={(e) => sendMessage(e)}>
            <div className='textarea-wrap '>
              <textarea
                id='talkInput'
                className='w-full'
                ref={textareaRef}
                onKeyPress={(e) => {
                  if (e.nativeEvent.isComposing) return;
                  const key = e.key || e.keyCode;
                  (key === 'Enter' || key === 13) &&
                    !e.shiftKey &&
                    sendMessage(e);
                }}
                onInput={inputHandler}
              />
            </div>
            <div className='foot'>
              <div className='btns'>
                <button
                  type='button'
                  className='btn-stop'
                  onClick={playAudio}
                  disabled={playState ? false : true}
                >
                  {playState ? <IoStop /> : <IoPlay />}
                </button>
                <button
                  type='submit'
                  className='btn-send'
                  disabled={playState || isFinish ? true : false}
                >
                  {audioLoad ? (
                    <RiLoader2Fill className='animate-spin' />
                  ) : (
                    <RiSendPlaneFill />
                  )}
                </button>
                <button
                  type='button'
                  className='btn-mic'
                  onClick={mic ? handleStopRecording : handleStartRecording}
                >
                  {mic ? <PiMicrophoneFill /> : <PiMicrophoneSlash />}
                </button>
              </div>

              <div className='shortcuts'>
                <div className='shortcut hidden'>
                  * Send:{' '}
                  <span>
                    <MdOutlineKeyboardReturn />
                  </span>{' '}
                  / New Line:{' '}
                  <span>
                    <BsShiftFill />
                  </span>{' '}
                  +{' '}
                  <span>
                    <MdOutlineKeyboardReturn />
                  </span>
                </div>
                <button
                  type='button'
                  className='btn-finishchat'
                  onClick={finishChat}
                >
                  대화 종료{' '}
                  {correctLoad && <RiLoader2Fill className='animate-spin' />}
                </button>
                <div className={`ly-modal${isFinishPop ? '' : ' !hidden'}`}>
                  <div className='ly-inner'>
                    <div className='ly-head'>
                      <strong>교정 목록</strong>
                      <button
                        type='button'
                        onClick={() => setIsFinishPop(!isFinishPop)}
                      >
                        <IoMdCloseCircle className='text-[var(--highlight-color)]' />
                      </button>
                    </div>
                    <div className='ly-body'>
                      {correctList.length === 0 ? (
                        <div>Perfect Grammar</div>
                      ) : (
                        <ul className='list-correct'>
                          {correctList.map((msg, i) => {
                            return <li key={i}>{msg}</li>;
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Talk;
