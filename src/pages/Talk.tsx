// import { AiOutlineHighlight } from 'react-icons/ai';
import '../assets/css/talk.css';
import io from 'socket.io-client';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import datas from '../../datas.json'; //임시 데이터
const socket = io('http://localhost:3005', {
	timeout: 5000, // 5초 동안 연결을 시도합니다.
}); // 서버 주소
// import axios from 'axios';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import { BiSolidUserDetail } from 'react-icons/bi';
import { PiMicrophoneFill } from 'react-icons/pi';
import { PiMicrophoneSlash } from 'react-icons/pi';
import { RiSendPlaneFill } from 'react-icons/ri';
// import { FaUserLarge } from 'react-icons/fa6';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import { BsShiftFill } from 'react-icons/bs';
// import { LuHighlighter } from "react-icons/lu";
import { PiSpeakerHighDuotone } from 'react-icons/pi';
import { BsFillChatHeartFill } from 'react-icons/bs';

function Talk() {
	const { id } = useParams();
	const [account] = useState('test');
	// const [beforeMessage, setBeforeMessage] = useState([]);//api로 사용예정
	const [beforeMessage] = useState(datas.chats.filter((chat) => chat.roomId === id)); //임시:기존 대화한 내역 메세지
	const [mic, setMic] = useState(false);

	const textareaRef = useRef();
	const innerRef = useRef();
	const msgRef = useRef([]);
	const newMsgRef = useRef([]);
	const [messages, setMessages] = useState([]); //입력된 메세지들
	const [getVoices, setVoices] = useState([]); //목소리들
	const [voice, setVoice] = useState(0); // 기본적으로 첫 번째 목소리를 선택합니다

	const [userInfo] = useState(datas.users.find((user) => user.userid === account)); //임시
	const [characterInfo] = useState(datas.characters.find((character) => character.id === id)); //임시

	useEffect(() => {
		const userMessageHandler = (message) => {
			setMessages((prevMessages) => [...prevMessages, { text: message, type: 'user' }]);
			getSpeech(message);
		};

		const aiMessageHandler = (message) => {
			setMessages((prevMessages) => [...prevMessages, { text: message, type: 'ai' }]);
			getSpeech(message);
		};

		socket.on('userMessage', userMessageHandler);
		socket.on('aiMessage', aiMessageHandler);

		return () => {
			socket.off('userMessage', userMessageHandler);
			socket.off('aiMessage', aiMessageHandler);
		};
	}, [messages]);

	useEffect(() => {
		innerRef.current.scrollTop = innerRef.current.scrollHeight;
	}, [messages]);
	useEffect(() => {
		getSpeech('');
	}, []);

	const sendMessage = (e) => {
		e.preventDefault();
		const newMessage = textareaRef.current.value;
		textareaRef.current.parentNode.dataset.value = '';
		textareaRef.current.value = '';
		socket.emit('userMessage', newMessage);
		socket.emit('aiMessage', '답변: ' + newMessage);
	};
	const inputHandler = () => {
		return (textareaRef.current.parentNode.dataset.value = textareaRef.current.value);
	};
	const speakerHandler = (type, idx) => {
		let text = '';
		if (type === 'before') {
			text = msgRef.current[idx].textContent;
		} else {
			//after
			text = newMsgRef.current[idx].textContent;
		}
		getSpeech(text);
	};

	const getSpeech = (text) => {
		const setVoiceList = () => {
			setVoices(window.speechSynthesis.getVoices());
		};
		setVoiceList();
		if (window.speechSynthesis.onvoiceschanged !== undefined) {
			window.speechSynthesis.onvoiceschanged = setVoiceList;
		}

		const speech = (text) => {
			// 선택한 목소리
			const selectedVoice = getVoices[voice];
			if (!selectedVoice) return;

			const utterThis = new SpeechSynthesisUtterance(text);
			utterThis.voice = selectedVoice;

			window.speechSynthesis.speak(utterThis);
		};

		speech(text);
	};

	return (
		<>
			<div className="list-talk">
				<div ref={innerRef} className="inner">
					<div className="head">
						<div className="profile">
							<img src={beforeMessage[0]?.img} alt="" />
						</div>
						<dl>
							<dt>
								<Link to={`/character/${id}`}>
									<BiSolidUserDetail /> {beforeMessage[0]?.name}{' '}
								</Link>
							</dt>
							<dd>방 제목 : {id}</dd>
							<dd>
								<div className="btn-group mt-3">
									<button>
										<RiThumbUpFill /> (10k)
									</button>
									<button>
										<RiThumbDownFill /> (0)
									</button>
								</div>{' '}
								<select className="max-w-[150px] text-xs" onChange={(e) => setVoice(e.target.value)}>
									{getVoices.map((voice, index) => (
										<option key={index} value={index}>
											{voice.name}
										</option>
									))}
								</select>
							</dd>
						</dl>
					</div>
					<ul>
						{
							/* 기존 대화 내용 메세지 */
							beforeMessage.length > 0 && account === beforeMessage[0]?.sendId ? (
								beforeMessage.map((val, i) => {
									return (
										<li className={account === val.sendId ? '' : 'ai'} key={i}>
											<div className="profile">
												<img src={account === val.sendId ? '/vite.svg' : val.img} alt="" />
											</div>
											<div className="info">
												<div className="name">{val.sendId}</div>
												<div className="message" ref={(el) => (msgRef.current[i] = el)}>
													<span className="speaker" onClick={() => speakerHandler('before', i)}>
														<PiSpeakerHighDuotone />
													</span>{' '}
													{val.msg}
												</div>

												{val.advice && (
													<p>
														<BsFillChatHeartFill className="icon" />{' '}
														{val.advice.split(' ').map((word, i) => {
															return (
																<a
																	href={`https://dict.naver.com/dict.search?query=${word.replace(/([?.,])/g, '')}`}
																	target="_blank"
																	key={i}>
																	{word}{' '}
																</a>
															);
														})}
													</p>
												)}
											</div>
										</li>
									);
								})
							) : (
								<li>대화를 시도해 보세요~</li>
							)
						}

						{messages.map((message, i) => (
							<li key={i} className={message.type}>
								<div className="profile">
									<img src={message.type === 'user' ? '/vite.svg' : characterInfo.img} alt="" />
								</div>
								<div className="info">
									<div className="name">{message.type === 'user' ? userInfo.userid : characterInfo.name}</div>
									<div className="message" ref={(el) => (newMsgRef.current[i] = el)}>
										<span className="speaker" onClick={() => speakerHandler('after', i)}>
											<PiSpeakerHighDuotone />
										</span>{' '}
										{message.text}
									</div>

									{/* {val.advice && (
                    <p>
                      <AiOutlineHighlight />{' '}
                      {val.advice.split(' ').map((word, i) => {
                        return (
                          <a
                            href={`https://dict.naver.com/dict.search?query=${word.replace(/([?.,])/g, '')}`}
                            target="_blank"
                            key={i}>
                            {word}{' '}
                          </a>
                        );
                      })}
                    </p>
                  )} */}
								</div>
							</li>
						))}
					</ul>
				</div>

        {/* foot */}
				<div>
					<form className="form" onSubmit={(e) => sendMessage(e)}>
						<div className="textarea-wrap">
							<textarea
								id="talkInput"
								className="w-full "
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
							<div className="shortcuts">
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
