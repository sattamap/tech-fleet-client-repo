import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserAlt } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import ThemeToggle from "../ThemeToggle/ThemeToggle";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);
   
    const handleLogOut = () => {
        logOut()
          .then(result => {
            console.log(result.user);
    
          })
          .catch(error => {
            console.log(error);
          })
      }
    return (
        <div>
           <div className="max-w-[1300px] mx-auto navbar py-14">
            <div className="flex-1">
                <img  src={logo} alt="" className="w-10" />
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
            
        <div className="navbar-end">



{user ? (
  // If the user is logged in, show their profile picture, first name, and a logout button
  <div className="nav-item">
    {user.photoURL ? (
      <img
        src={user.photoURL}
        alt={`${user.displayName}'s Profile`}
        className="btn btn-ghost btn-circle avatar"
      />
    ) : (
      <FaUserAlt className="btn btn-ghost btn-circle avatar" />
    )}
    <span className="nav-link mx-2">
      Welcome, {user.displayName?.split(" ")[0]}!
    </span>
    <button className="btn btn-secondary mx-2" onClick={handleLogOut}>
      Logout
    </button> <Link to="/register" className="btn btn-primary">
      Register
    </Link>
  </div>
) : (
  // If the user is not logged in, show the login button


  <div className="nav-item">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div>
        <FaUserAlt></FaUserAlt>
      </div>
    </label>
   
    <Link to="/register" className="btn btn-primary">
      Register
    </Link>
    <ThemeToggle></ThemeToggle>
  </div>

)}

</div>
        </div>
            
        </div>
    );
};

export default Navbar;