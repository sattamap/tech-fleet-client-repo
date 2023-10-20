import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetail = () => {

    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((response) => response.json())
            .then((data) => {
                // console.log("Cart Data:", data);
                // Update the cart data in your context provider
                // Assuming you have a function to set the cart data in your context
                // Replace 'setCartDataInContext' with the actual function name
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching carts:", error);
            });
    }, []);
    
    if (loading) {
        return <div>Loading...</div>;
    }
    const productDetail = products.find((product) => product._id === id);

    const handleAddToCart = () => {
        // Assuming you have a server route to add the product to the cart
        fetch("http://localhost:5000/carts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productDetail),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            // Show a success message
            Swal.fire({
              title: "Success!",
              text: "Product added to cart",
              icon: "success",
              confirmButtonText: "OK",
            });
          })
          .catch((error) => {
            console.error("Error adding product to cart:", error);
            // Show an error message if something goes wrong
            Swal.fire({
              title: "Error",
              text: "Failed to add product to cart",
              icon: "error",
              confirmButtonText: "OK",
            });
          });
      };
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={productDetail.image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{productDetail.name}</h1>
      <h1 className="text-2xl font-bold">{productDetail.brandName}</h1>
      <h1 className="text-xl font-bold">{productDetail.type}</h1>
      <h3 className="text-xl font-bold">Price: {productDetail.price}</h3>
      <p className="py-6">{productDetail.description}</p>
      <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ProductDetail;
