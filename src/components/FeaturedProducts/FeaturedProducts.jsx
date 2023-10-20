
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import f1 from '../../assets/f1.jpg';
import f2 from '../../assets/f2.jpg';
import f3 from '../../assets/f3.jpg';
import f4 from '../../assets/f4.jpg';

const FeaturedProducts = () => {


   
    return (
        <div className="max-w-[1300px] mx-auto  mt-20 ">
            <h2 className="text-lg font-poppin text-center mb-10">Featured Products</h2>
            <h2 className="text-4xl text-center">Grab Your one</h2>
            <div className="divider mb-10">Trust on us</div>
             <div className=' '>
             <Carousel
        showThumbs={false} // Hide thumbnail navigation
        showStatus={false} // Hide status indicator
        infiniteLoop={true} // Enable infinite loop
        autoPlay={true} // Enable auto-play
        interval={5000} // Auto-play interval in milliseconds
        swipeable={true} // Enable swipe gestures on mobile
        emulateTouch={true} // Enable touch emulation for desktop
        dynamicHeight={false} // Adjust slide height dynamically
        centerMode={true} // Center the current slide
        centerSlidePercentage={33} // Set the percentage width of the center slide
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className="absolute left-96 -bottom-3 transform -translate-y-1/2 z-10">
              Previous
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} title={label} className="absolute right-96 -bottom-3 transform -translate-y-1/2 z-10">
              Next
            </button>
          )
        }
        
      >
             <div className="card w-72 bg-base-100 shadow-xl">
                <figure><img src={f1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        iPhone 15 Pro Max 
                        <div className="badge badge-secondary">Featured</div>
                    </h2>
                    <p>Price: $1200</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure><img src={f2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        iPhone 15 Pro Max 
                        <div className="badge badge-secondary">Featured</div>
                    </h2>
                    <p>Price: $1200</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure><img src={f3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        iPhone 15 Pro Max 
                        <div className="badge badge-secondary">Featured</div>
                    </h2>
                    <p>Price: $1200</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure><img src={f4} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        iPhone 15 Pro Max 
                        <div className="badge badge-secondary">Featured</div>
                    </h2>
                    <p>Price: $1200</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>
            </Carousel>

             </div>
        </div>
    );
};

export default FeaturedProducts;