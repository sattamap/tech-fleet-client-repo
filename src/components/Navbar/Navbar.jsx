import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
           <div className="max-w-[1300px] mx-auto navbar py-14">
            <div className="flex-1">
                <img  src="" alt="" />
                <h1 className="text-2xl font-extrabold">Tech<span className=" text-emerald-600">Fleet</span></h1>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }
                        >
                            Home
                        </NavLink>

                    </li>

                    <li>
                        <NavLink
                            to="/product"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }
                        >
                            Add Product
                        </NavLink>


                    </li>
                    <li>
                        <NavLink
                            to="/cart"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }
                        >
                            My Cart
                        </NavLink>


                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }
                        >
                            Login
                        </NavLink>


                    </li>
                </ul>

            </div>
        </div>
            
        </div>
    );
};

export default Navbar;