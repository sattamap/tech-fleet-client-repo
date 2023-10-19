

const BrandCard = ({ brand }) => {
    const { name, imageURL } = brand;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={imageURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default BrandCard;