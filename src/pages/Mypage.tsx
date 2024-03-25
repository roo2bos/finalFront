// import Mypage1 from '../components/Mypage'
import Review from '../components/Review';

function Mypage() {
  return (
    <section>
      <div>Mypage</div>
      <div>탭메뉴 - 대화목록, 프로필편집, 학습내역</div>
      {/* <Mypage1/> */}
      <Review />
    </section>
  );
}

export default Mypage;
