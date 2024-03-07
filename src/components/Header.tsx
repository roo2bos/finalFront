import { Link } from "react-router-dom";
import viteLogo from "/vite.svg"

export default function Header() {
  return (
    <header id="header" className="flex justify-between">
      <h1 className="inline-flex">
				<Link to="/" className="text-sm text-[10px]">
					<img src={viteLogo} className="logo" alt="Vite logo" width="20" />
				</Link>
			</h1>
      <nav>
				<Link to="/">홈</Link> /{" "}
				<Link to="/about">404</Link> /{" "}
				<Link to="/guide">가이드</Link> /{" "}
				<Link to="/signup">가입</Link> /{" "}
				<Link to="/mypage">마이페이지</Link> /{" "}
				<Link to="/login">로그인</Link>

			</nav>
    </header>
  )
}
