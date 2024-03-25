import '../assets/css/talk.css';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import datas from '../../datas.json'; //임시 데이터
import axios from 'axios';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import { BiSolidUserDetail } from 'react-icons/bi';
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

// import wavfile from '/test.wav';

function Talk() {
	const { id } = useParams();
	const [account] = useState('test');
	// const [beforeMessage, setBeforeMessage] = useState([]);//api로 사용예정
	const [beforeMessage] = useState(datas.chats.filter((chat) => chat.roomId === id)); //임시:기존 대화한 내역 메세지
	const [mic, setMic] = useState(false);
	const [audioState, setAudioState] = useState(false);
	const [history, setHistory] = useState(false);
	const [missions] = useState([
		// 더미
		{
			id: 1,
			message: 'mission1 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 ',
			complete: true,
		},
		{
			id: 2,
			message: 'mission2 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 ',
			complete: false,
		},
		{
			id: 3,
			message: 'mission3 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 미션 노출 ',
			complete: false,
		},
	]);

	const textareaRef = useRef();
	const innerRef = useRef();
	const audioRef = useRef();
	const [duration, setDuration] = useState(0);
	const [isPop, setIsPop] = useState(false);

	const [userInfo] = useState(datas.users.find((user) => user.userid === account)); //임시
	const [characterInfo] = useState(datas.characters.find((character) => character.id === id)); //임시


	useEffect(() => {
		setMic(false);

    const fetchAndPlayAudio = async () => {
      try {
        const response = await fetch('https://market-imgs.s3.ap-northeast-2.amazonaws.com/test.mp3');
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        // 오디오 요소에 파일 URL을 설정하여 재생합니다.
        audioRef.current.src = objectURL;
        // audioRef.current.play();
      } catch (error) {
        console.error('Fetch and play audio error:', error);
      }
    };

    fetchAndPlayAudio();
	}, []);

	function playAudio() {
		const player = audioRef.current;
		setAudioState(!audioState);
		audioState ? player.pause() : player.play();
		player.addEventListener('timeupdate', function () {
			const currentTime = player.currentTime;
			const end = player.duration;
			const percentage = Math.floor((currentTime / end) * 100);
			setDuration(percentage);
			percentage >= 100 && setAudioState(false);
		});
	}
	const sendMessage = async (e) => {
		e.preventDefault();
		// playAudio();

		const userInput = textareaRef.current.value;

		if (userInput.trim() === "") {
			alert("채팅을 입력해주세요.");
			return;
		}

		try {
			const response = await axios.post("http://localhost:8080/chat", {userInput})
			console.log("post 요청 성공", response.data);
			
		} catch (error) {
			console.error("post 요청 실패", error);
			
		}

		textareaRef.current.value = '';

	};
	const inputHandler = () => {
		return (textareaRef.current.parentNode.dataset.value = textareaRef.current.value);
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
			const recordedBlob = new Blob(chunksRef.current, { type: 'audio/AMR-WB' });
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
			const audioFile = new File([audioBlob], 'recording.amr', { type: 'audio/AMR-WB' });

			const formData = new FormData();
			formData.append('audio', audioFile);	
			const response = await axios.post('http://localhost:8080/speech', formData, {
				headers: {
				'Content-Type': 'multipart/form-data'
				}
				// ,withCredentials: true,
			});	
			console.log('Audio data sent successfully:', response.data);
			textareaRef.current.value = response.data;
		} catch (error) {
			console.error('Error sending audio data:', error);
		}
	};



	return (
		<>
			<div className="list-talk bg-cover bg-no-repeat bg-center ">
				<div className="bg-char"></div>
				<div ref={innerRef} className="inner">
					<div className="head">
						<button className="btn-mission" onClick={() => setIsPop(!isPop)}>
							<MdChecklist />
						</button>
						<div className={`ly-mission${isPop ? '' : ' !hidden'}`}>
							<div className="ly-inner">
								<div className="ly-head">
									<strong>오늘의 학습 미션</strong>
									<button onClick={() => setIsPop(!isPop)}>
										<IoMdCloseCircle className="text-[var(--highlight-color)]" />
									</button>
								</div>
								<div className="ly-body">
									<p className="todo">
										<span>오늘의 학습 목표: 미달(1/3)</span> <span>전체 목표량 : 1/30일</span>
									</p>
									<ul className="list-mission">
										{missions.map((mission) => {
											return (
												<li key={mission.id} className={`${mission.complete ? 'complete' : ''}`}>
													<span>{mission.message}</span>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						</div>
						<div className="profile">
							<img src={beforeMessage[0]?.img} alt="" />

							<div className={`voiceContainer ${audioState ? 'on' : 'off'}`}>
								<div>
									<div className="voice voice1"></div>
									<div className="voice voice2"></div>
									<div className="voice voice3"></div>
									<div className="voice voice4"></div>
									<div className="voice voice5"></div>
								</div>
							</div>
						</div>

						<dl className="char-info">
							<dt>
								<Link to={`/character/${id}`}>
									<BiSolidUserDetail /> {beforeMessage[0]?.name}{' '}
								</Link>
							</dt>
							<dd>
								<div className="btn-group">
									<button>
										<RiThumbUpFill /> (10k)
									</button>
									<button>
										<RiThumbDownFill /> (0)
									</button>
								</div>
							</dd>
						</dl>
					</div>
				</div>

				<div className={`history ${history ? '' : 'hidden'}`}>
					<ul>
						<li className="user">
							<div className="profile">
								<img src="/user-default.png" alt="" />
							</div>
							<div className="info">
								<div className="name">{userInfo.userid}</div>
								<div className="msg">대화 내용</div>
							</div>
						</li>
						<li className="ai">
							<div className="profile">
								<img src={beforeMessage[0]?.img} alt="" />
							</div>
							<div className="info">
								<div className="name">{characterInfo.name}</div>
								<div className="msg">대화 내용</div>
							</div>
						</li>
						<li className="ai">
							<div className="profile">
								<img src={beforeMessage[0]?.img} alt="" />
							</div>
							<div className="info">
								<div className="name">{characterInfo.name}</div>
								<div className="msg">대화 내용</div>
							</div>
						</li>
						<li className="ai">
							<div className="profile">
								<img src={beforeMessage[0]?.img} alt="" />
							</div>
							<div className="info">
								<div className="name">{characterInfo.name}</div>
								<div className="msg">대화 내용</div>
							</div>
						</li>
					</ul>
				</div>
				{/* foot */}
				<div className="foot-talking-wrap ">
					<div className="progress">
						<div className="bar" style={{ transform: `translateX(${duration}%)` }} />
					</div>
					<div className="talking">
						<dl>
							<dt className="flex justify-between">
								<span>{characterInfo.name}</span>
								<button className="btn-history" onClick={() => setHistory(!history)}>
									<PiListMagnifyingGlassDuotone className="text-2xl" />
								</button>
							</dt>
							<dd className="message">
								대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될
								데이터. 대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될 데이터. 대화가
								출력될 데이터. 대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될 데이터.
								대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될
								데이터. 대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될 데이터. 대화가
								출력될 데이터. 대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될 데이터.
								대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될 데이터. 대화가 출력될
								데이터. 대화가 출력될 데이터.
							</dd>
							<dd className="hidden">
								<audio id="myAudio" ref={audioRef}>
									{/* <source src={wavfile} type="audio/wav" /> */}
									{/* <source src={`blob:https://hackingbeauty.github.io/fc3116f0-53c9-4cae-9680-b2978e5bd6f4`} /> */}
									Your browser does not support the audio element.
								</audio>
							</dd>
						</dl>
					</div>
					<form className="form" onSubmit={(e) => sendMessage(e)}>
						<div className="textarea-wrap ">
							<textarea
								id="talkInput"
								className="w-full"
								ref={textareaRef}
								onKeyPress={(e) => {
									if (e.nativeEvent.isComposing) return;
									const key = e.key || e.keyCode;
									(key === 'Enter' || key === 13) && !e.shiftKey && sendMessage(e);
								}}
								onInput={inputHandler}
							/>
						</div>
						<div className="foot">
							<div className="shortcuts invisible">
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
							<div className="btns">
								<button type="button" className="btn-stop" onClick={playAudio}>
									{audioState ? <IoStop /> : <IoPlay />}
								</button>
								<button type="submit" className="btn-send">
									<RiSendPlaneFill />
								</button>
								<button type="button" className="btn-mic" onClick={mic? handleStopRecording : handleStartRecording}>
									{mic ? <PiMicrophoneFill /> : <PiMicrophoneSlash />}
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Talk;
