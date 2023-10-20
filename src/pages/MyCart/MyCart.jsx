import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const MyCart = () => {
    
    const [loading, setLoading] = useState(true);
    const [carts, setCarts] = useState([]);

    
    
    useEffect(() => {
        fetch("https://tech-fleet-server-jfp9pf6zl-sattam-chakmas-projects.vercel.app/cart")
            .then((response) => response.json())
            .then((data) => {
                // console.log("Cart Data:", data);
                // Update the cart data in your context provider
                // Assuming you have a function to set the cart data in your context
                // Replace 'setCartDataInContext' with the actual function name
                setCarts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching carts:", error);
            });
    }, []);
    
    if (loading) {
        return <div>Loading...</div>;
    }

    const handleDelete = id =>{
         console.log('want to delete:',id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tech-fleet-server-jfp9pf6zl-sattam-chakmas-projects.vercel.app//carts/${id}`,{
                    method: 'DELETE'
                })
        
                    .then(res=>res.json())
                    .then(data=>{
                        console.log(data);
                        if (data.deletedCount === 1) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                            const remaining = carts.filter(cart => cart._id!== id);
                            setCarts(remaining);
                        }
                    })
           
            }
          })
     
        }


    return (
        <div className="max-w-[1300px] mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    {carts.map((cart, index) => (
                        <tbody key={cart._id}>
                            <tr>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{cart.name}</div>
                                            <div className="text-sm opacity-50">{cart.type}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{cart.type}</td>
                                <td>{cart.price}</td>
                                <th>
                                    <button onClick={ () => handleDelete(cart._id)} className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default MyCart;
