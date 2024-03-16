// import { AiOutlineHighlight } from 'react-icons/ai';
import '../assets/css/talk.css';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import datas from '../../datas.json'; //임시 데이터
// import axios from 'axios';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import { BiSolidUserDetail } from 'react-icons/bi';
import { PiMicrophoneFill } from 'react-icons/pi';
import { PiMicrophoneSlash } from 'react-icons/pi';
import { RiSendPlaneFill } from 'react-icons/ri';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import { BsShiftFill } from 'react-icons/bs';
import { IoStop } from 'react-icons/io5';
import { IoPlay } from 'react-icons/io5';

function Talk() {
	const { id } = useParams();
	// const [account] = useState('test');
	// const [beforeMessage, setBeforeMessage] = useState([]);//api로 사용예정
	const [beforeMessage] = useState(datas.chats.filter((chat) => chat.roomId === id)); //임시:기존 대화한 내역 메세지
	const [mic, setMic] = useState(false);
	const [audioState, setAudioState] = useState(false);

	const textareaRef = useRef();
	const innerRef = useRef();
	const audioRef = useRef();
	const [duration, setDuration] = useState(0);

	// const [userInfo] = useState(datas.users.find((user) => user.userid === account)); //임시
	const [characterInfo] = useState(datas.characters.find((character) => character.id === id)); //임시

	useEffect(() => {
		setMic(false);
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
	const sendMessage = (e) => {
		e.preventDefault();
		playAudio();
	};
	const inputHandler = () => {
		return (textareaRef.current.parentNode.dataset.value = textareaRef.current.value);
	};

	return (
		<>
			<div className="list-talk bg-cover bg-no-repeat bg-center ">
				<div className="bg-char"></div>
				<div ref={innerRef} className="inner">
					<div className="head">
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

				{/* foot */}
				<div className="foot-talking-wrap ">
					<div className="progress">
						<div className="bar" style={{ transform: `translateX(${duration}%)` }} />
					</div>
					<dl className="talking">
						<dt>{characterInfo.name}</dt>
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
								<source src="/test.wav" type="audio/wav" />
								Your browser does not support the audio element.
							</audio>
						</dd>
					</dl>
					<form className="form" onSubmit={(e) => sendMessage(e)}>
						<div className="textarea-wrap hidden">
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
						<div className="btns">
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
							<div>
								<button type="button" className="btn-stop" onClick={playAudio}>
									{audioState ? <IoStop /> : <IoPlay />}
								</button>
								<button type="submit" className="btn-send">
									<RiSendPlaneFill />
								</button>
								<button type="button" className="btn-mic" onClick={() => setMic(!mic)}>
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
