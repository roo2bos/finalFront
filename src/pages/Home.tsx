import { useState /* , useEffect */ } from 'react';
import '../index.css';
import '../assets/css/home.css';
import { Link } from 'react-router-dom';
import datas from '../../datas.json'; //임시 데이터

function Home() {
	const [account] = useState('test'); //로그인(인증)된 유저정보
	// const [myTalk, setMyTalk] = useState([]); //인증된 유저의 전체 정보
	// const [myRooms, setMyRooms] = useState([]); //채팅룸
	// const [myMsg, setMyMsg] = useState([]); //각각의 채팅룸의 마지막 메세지
	// const [recomm, setRecomm] = useState([]); //캐릭터 추천

	const [myTalk] = useState(datas.users.find((user) => user.userid === account)); //인증된 유저의 전체 정보
	const [myRooms] = useState(datas.users.find((user) => user.userid === account).chats); //채팅룸
	console.log(myTalk);
	const [myMsg] = useState(
		myRooms.map((roomId) => {
			const newData = {
				name: datas.chats.filter((chat) => chat.roomId === roomId).pop().name,
				img: datas.chats.filter((chat) => chat.roomId === roomId).pop().img,
				msg: datas.chats.filter((chat) => chat.roomId === roomId).pop().msg,
			};
			return newData;
		})
	);
	const [recomm] = useState(datas.characters); //임시

	function Items() {
		return (
			<>
				{myRooms.map((chatId, i) => {
					return (
						<li key={chatId}>
							<Link to={`/talk/${chatId}`}>
								<div className="img">
									<img src={myMsg[i]?.img} alt="" />
								</div>
								<dl>
									<dt className="name">{myMsg[i]?.name}</dt>
									<dd className="text truncate-2">{myMsg[i]?.msg}</dd>
								</dl>
							</Link>
						</li>
					);
				})}
			</>
		);
	}

	return (
		<>
			<h2 className="list-title">대화 계속하기</h2>
			<ul className="list-char">
				<Items my={myTalk} />
			</ul>
			<h2 className="list-title">추천</h2>
			<ul className="list-char">
				{recomm.map((article) => {
					return (
						<li key={article.id}>
							<Link to={`/character/${article.id}`}>
								<div className="img">
									<img src={article.img} alt="" />
								</div>
								<dl>
									<dt className="name">{article.name}</dt>
									<dd className="text truncate-2">{article.desc}</dd>
								</dl>
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default Home;
