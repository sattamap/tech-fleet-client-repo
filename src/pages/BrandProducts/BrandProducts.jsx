import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const BrandProducts = () => {
    const { brandName } = useParams();
    console.log(brandName);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((response) => response.json())
            .then((data) => {
                // Filter the data for a specific brandName (in this case, "Apple")
                const filteredData = data.filter((item) => item.bandName === brandName);

                // Update your component state with the filtered data
                if (filteredData.length === 0) {
                    // No data available for the brand, show a sweet alert
                    Swal.fire({
                        icon: 'error',
                        title: 'No Products Available',
                        text: 'There are no products available for this brand.',
                    });
                } else {
                    // Update your component state with the filtered data
                    setProducts(filteredData);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    console.log('Brand Name:', brandName);
    console.log('Products:', products);

    return (
        <div className='max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5'>
            {products.map((product) => (
                <div key={product._id}>

                    <div className="card w-96 bg-slate-200 shadow-2xl border-slate-700">
                        <figure><img src={product.image} alt={product.name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {product.name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                            <div className="card-actions justify-end">
                                <Link to={`/detail/${product._id}`}> <button className="btn">Detail</button></Link>
                                <button className="btn">Update</button>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
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

