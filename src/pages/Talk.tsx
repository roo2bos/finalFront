import '../assets/css/talk.css';

function Talk() {
	return (
		<>
			<div className="list-talk">
				<div className="inner">
					<ul>
						<li className="you">
							<div className="profile"></div>
							<div className="info">
								<div className="name">홍</div>
								<div className="message">
									<p>안녕하세요</p>
								</div>
							</div>
						</li>
						<li className="gpt">
							<div className="profile"></div>
							<div className="info">
								<div className="name">GPT</div>
								<div className="message">
									<p>안녕하세요</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<form className="form">
				<textarea
					id="small-input"
					className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
			</form>
		</>
	);
}

export default Talk;
