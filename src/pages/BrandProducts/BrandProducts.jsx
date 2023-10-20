import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import the icons you want to use
import StarRating from '../../components/StarRating/StarRating';



const BrandProducts = () => {
    const { brandName } = useParams();
    const [products, setProducts] = useState([]);
    const [productImages, setProductImages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((response) => response.json())
            .then((data) => {
                const filteredData = data.filter((item) => item?.bandName === brandName);
                if (filteredData.length === 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'No Products Available',
                        text: 'There are no products available for this brand.',
                    });
                } else {
                    setProducts(filteredData);
                    setProductImages(filteredData.map((product) => product.image));
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [brandName]);

    return (
        <div>
   

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
  centerSlidePercentage={33}
  renderArrowPrev={(onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="absolute left-1/3 -bottom-3 transform -translate-y-1/2 z-10"
      >
        {/* Use React Icons for the previous arrow */}
        <FaArrowLeft size={24} />
      </button>
    )
  }
  renderArrowNext={(onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="absolute right-1/3 -bottom-3 transform -translate-y-1/2 z-10"
      >
        {/* Use React Icons for the next arrow */}
        <FaArrowRight size={24} />
      </button>
    )
  }
>
  {productImages.map((image, index) => (
    <div key={index} className="w-96 h-64 flex items-center justify-center">
      <img
        src={image}
        alt={`Product ${index}`}
        className="object-cover w-full h-full rounded-xl"
      />
    </div>
  ))}
</Carousel>
            <div className='max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-28 mb-5'>
                {products.map((product) => (
                    <div key={product._id}>
                        <div className="card w-96 bg-slate-200 shadow-2xl border-slate-700">
                            <figure><img src={product.image} alt={product.name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {product.name}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <StarRating rating={product.rating}/>
                                <div className="card-actions justify-end">
                                    <Link to={`/detail/${product._id}`}>
                                        <button className="btn">Detail</button>
                                    </Link>
                                    <Link to={`/update/${product._id}`}>
                                        <button className="btn">Update</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandProducts;



// import { useEffect, useState } from 'react';


// import { useParams } from 'react-router-dom';

// const BrandProducts = () => {
//   const { brandName } = useParams();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/products')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Data from API:', data);
//         // Convert brandName to lowercase
//         const brandNameLower = brandName.toLowerCase();
//         // Filter the data and handle potential undefined values
//         const filteredData = data.filter((item) => item.brandName && item.brandName.toLowerCase() === brandNameLower);
//         console.log('Filtered Data:', filteredData);

//         // Update your component state with the filtered data
//         setProducts(filteredData);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [brandName]);

//   console.log('Brand Name:', brandName);
//   console.log('Products:', products);

//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product._id}>
//           <div className='max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-5 border'>
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BrandProducts;





// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const BrandProducts = () => {
//     const { brandName } = useParams();
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         setLoading(true);
//         setError(null);

//         // Fetch products based on the dynamic brandName.
//         fetch(`http://localhost:5000/products?brand=${brandName}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setProducts(data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching products:', error);
//                 setError('An error occurred while fetching products.');
//                 setLoading(false);
//             });
//     }, [brandName]);

//     return (
//         <div>
//             {loading && <p>Loading...</p>}
//             {error && <p>{error}</p>}
//             {products.map((product) => (
//                 <div key={product._id}>
//                     <div className='max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-5 border'>
//                         <h3>{product.name}</h3>
//                         <p>{product.description}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default BrandProducts;

