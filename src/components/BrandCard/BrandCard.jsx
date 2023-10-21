import { Link } from "react-router-dom";


const BrandCard = ({ brand }) => {
    const { name, imageURL } = brand;
    return (
        <div>
           <Link to={`/products/${name}`}>
           <div className="card  lg:w-96 bg-base-100 shadow-xl">
                <figure><img src={imageURL} alt="Shoes" className="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    
                    
                </div>
            </div>
           </Link>
        </div>
    );
};

export default BrandCard;