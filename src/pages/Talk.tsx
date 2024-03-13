import { AiOutlineHighlight } from 'react-icons/ai';
import '../assets/css/talk.css';
import { /* useEffect, */ useState } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import datas from '../../datas.json'; //임시 데이터
import { Link } from 'react-router-dom';
import { BiSolidUserDetail } from 'react-icons/bi';
import { PiMicrophoneFill } from 'react-icons/pi';
import { PiMicrophoneSlash } from 'react-icons/pi';
import { RiSendPlaneFill } from 'react-icons/ri';

function Talk() {
	const { id } = useParams();
	const [account] = useState('test');
	// const [post, setPost] = useState([]);//api로 사용예정
	const [post] = useState(datas.chats.filter((chat) => chat.roomId === id)); //임시
	const [mic, setMic] = useState(false);
	return (
		<>
			<div className="list-talk">
				<div className="inner">
					<div className="head">
						<div className="profile">
							<img src={post[0]?.img} alt="" />
						</div>
						<dl>
							<dt>
								<Link to={`/character/${id}`}>
									<BiSolidUserDetail /> {post[0]?.name}{' '}
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
								</div>
							</dd>
						</dl>
					</div>
					<ul>
						{
							/* 처음 말을건 유저인 경우 */
							post.length > 0 && account === post[0]?.sendId ? (
								post.map((val, i) => {
									return (
										<li className={account === val.sendId ? '' : 'ai'} key={i}>
											<div className="profile">
												<img src={account === val.sendId ? '/vite.svg' : val.img} alt="" />
											</div>
											<div className="info">
												<div className="name">{val.sendId}</div>
												<div className="message">{val.msg}</div>

												{val.advice && (
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
												)}
											</div>
										</li>
									);
								})
							) : (
								<li>대화를 시도 해보세요~</li>
							)
						}
					</ul>
				</div>

				<form className="form">
					<textarea id="small-input" className="w-full " />
					<div className="btns">
						<button type="button" class="btn-send">
							<RiSendPlaneFill />
						</button>
						<button type="button" className="btn-mic" onClick={() => setMic(!mic)}>
							{mic ? <PiMicrophoneFill /> : <PiMicrophoneSlash />}
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Talk;
