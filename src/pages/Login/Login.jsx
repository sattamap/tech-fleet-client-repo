import { Link } from "react-router-dom";
// import Swal from "sweetalert2";


const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
      
        const loginData = { email, password };
        
        fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            // Successful login, you can perform actions like redirecting to a dashboard.
            // You might also want to store authentication tokens or session data.
          } else {
            // Login failed, display an error message or handle it appropriately.
          }
        });
      };
      
    
   

    return (
        <div>
             <div className="mt-10">
            <h2 className="text-xl text-center">Login Yourself</h2>


<form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
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