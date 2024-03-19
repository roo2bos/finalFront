import Lottie from 'lottie-react';
import loadingCat from '../../loading-cat.json'; 

function Spinner() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-40">
        <Lottie animationData={loadingCat} />
      </div>
    </div>
  );
}

export default Spinner;
