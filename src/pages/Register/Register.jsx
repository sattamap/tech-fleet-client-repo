import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photoURL = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');
        if (
            password.length < 6 ||
            !/[A-Z]/.test(password) ||
            !/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)
          ) {
            swal('Error', 'Password does not meet the criteria.', 'error');
            return; // Exit the function if password is invalid
          }
       
      };
      
    return (
        <div>
            <div >
                <h2 className="text-xl text-center">Register Yourself</h2>
                <form  className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-2">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-2">Already have an Account <Link className="text-lime-700 font-bold" to="/login">Login</Link></p>

            </div>
        </div>
    );
};

export default Register;