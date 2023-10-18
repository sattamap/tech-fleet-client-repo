import { Link } from "react-router-dom";


const Login = () => {

   

    return (
        <div>
             <div className="mt-10">
            <h2 className="text-xl text-center">Login Yourself</h2>


<form  className="card-body md:w-3/4 lg:w-1/2 mx-auto">
    <div className="form-control">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
    </div>
    <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
    </div>
   
</form>

<p className="text-center">Do not have any Account <Link className="text-lime-700 font-bold" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;