import Lottie from 'lottie-react';
import loadingCat from '../../loading-cat.json'; 

function Spinner() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-40">
        <Lottie animationData={loadingCat} />
        {/* <h2 className='mt-4'>Loading ...</h2> */}
      </div>
    </div>
  );
}

export default Spinner;
