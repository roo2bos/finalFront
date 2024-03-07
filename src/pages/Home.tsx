import { useState } from 'react';
import '../index.css';
import '../assets/css/home.css';
import { Link } from 'react-router-dom';
const getMyTalk = [
	{ _id: 1, name: 'pooh', img: '/image1.png', desc: '대화중' },
];
const getRecomm = [
	{ _id: 1, name: 'pooh', img: '/image1.png', desc: '1설명설명설명설명설명설명설명설명설명설명' },
	{ _id: 2, name: 'pooh', img: '/image1.png', desc: '2설명설명설명설명설명설명설명설명설명설명' },
	{ _id: 3, name: 'pooh', img: '/image1.png', desc: '3설명설명설명설명설명설명설명설명설명설명' },
	{ _id: 4, name: 'pooh', img: '/image1.png', desc: '4설명설명설명설명설명설명설명설명설명설명' },
	// { _id: 5, name: 'pooh', img: '/image1.png', desc: '5설명설명설명설명설명설명설명설명설명설명' },
];


function Home() {
	const [myTalk] = useState(getMyTalk);
	const [recomm] = useState(getRecomm);
	return (
		<>
			<h2 className="list-title">대화 계속하기</h2>
			<ul className="list-char">
				{myTalk.map((article) => {
					return (
						<li key={article._id}>
							<Link to="/talk/1">
								<p className="img">
									<img src={article.img} alt="" />
								</p>
								<strong className="name">{article.name}</strong>
								<p className="desc truncate-2">{article.desc}</p>
							</Link>
						</li>
					);
				})}
			</ul>
			<h2 className="list-title">추천</h2>
			<ul className="list-char">
				{recomm.map((article) => {
					return (
						<li key={article._id}>
							<Link to={`/talk/${article._id}`}>
								<p className="img">
									<img src={article.img} alt="" />
								</p>
								<strong className="name">{article.name}</strong>
								<p className="desc truncate-2">{article.desc}</p>
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default Home;
