
import { Button } from 'flowbite-react';
import bannerTask from '../img/66637589-tasks-text-rubber-seal-stamp-watermark-caption-inside-rounded-rectangular-banner-with-grunge-design.jpg'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
          <div className="hero h-screen bg-no-repeat bg-cover" style={{backgroundImage: `url(${bannerTask})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    <Link to='/login'> <Button  className='mx-auto'>
       Lets Explore
        <MdOutlineArrowRightAlt className='text-2xl'></MdOutlineArrowRightAlt>
      </Button></Link> 
    </div>
  </div>
</div>  
        </div>
    );
};

export default Banner;