import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        setProducts(filteredData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log('Brand Name:', brandName);
  console.log('Products:', products);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <div className='max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-5 border'>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
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

