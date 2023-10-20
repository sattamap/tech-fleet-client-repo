import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const ProductDetail = () => {

    const { id } = useParams();
    const { products } = useContext(AuthContext);
    const productDetail = products.find((product) => product._id === id);
    
    const handleAddToCart = () => {
        // Assuming you have a server route to add the product to the cart
        fetch("https://tech-fleet-server-4kaem7qlc-sattam-chakmas-projects.vercel.app/cart", {
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
